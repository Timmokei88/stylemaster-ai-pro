(() => {
  function getSelectedAngleSheetViews() {
    return Array.from(
      document.querySelectorAll('.pre-angle-choice:checked')
    ).map(box => box.value);
  }

  function updateAngleSheetCount() {
    const selected = getSelectedAngleSheetViews();
    const counter = document.getElementById('preAngleCount');

    if (counter) {
      counter.textContent = selected.length
        ? `${selected.length} selected • 1 sheet generation`
        : `0 selected • 0 sheet generations`;
    }
  }
    function getAngleSheetMasterImage() {
    return window.activeSelectedImage ||
      document.getElementById('outputImage')?.src ||
      '';
  }

  function splitDataUrl(url) {
    const match = String(url).match(/^data:([^;]+);base64,(.+)$/);

    if (!match) return null;

    return {
      mimeType: match[1],
      data: match[2]
    };
  }

   function angleSheetLabels(selected) {
    const names = {
      front: 'FRONT',
      left: 'LEFT PROFILE',
      right: 'RIGHT PROFILE',
      back: 'BACK',
      top: 'TOP',
      bottom: 'BOTTOM'
    };

    return selected.map(view => names[view] || view.toUpperCase());
  }

   async function generateAngleSheet() {
    const selected = getSelectedAngleSheetViews();

    if (!selected.length) {
      alert('Select at least one angle first.');
      return;
    }

    const masterImage = getAngleSheetMasterImage();

    if (!masterImage) {
      alert('Select your favourite generated image first.');
      return;
    }

    const reference = splitDataUrl(masterImage);

    if (!reference) {
      alert('Please select your favourite generated image again.');
      return;
    }

    const labels = angleSheetLabels(selected);

      const prompt = `
CREATE ONE SINGLE TURNAROUND / ANGLE SHEET IMAGE.

Use the supplied reference image as the absolute visual reference.

Include ONLY these requested views:
${labels.join(', ')}

Put ALL requested views together inside ONE single image.
Arrange them as a clean professional model-sheet grid.
Clearly label every view.

IDENTITY LOCK:
Every panel must show the exact same subject.
Preserve the same face, body proportions, fur or hair, markings,
clothing, accessories, colours, materials, textures and distinctive details.
Do not redesign, simplify, recolour, add or remove features.

ANGLE DIRECTIONS:
FRONT = straight-on front view.
LEFT PROFILE = true left-side profile.
RIGHT PROFILE = true right-side profile.
BACK = straight-on rear view.
TOP = directly overhead looking down.
BOTTOM = directly underneath looking up.

Keep the subject centred and fully visible in every requested panel.
Preserve the original image quality and fine surface detail.
Do not turn a photorealistic subject into smooth plastic or low-detail CGI.

Use a simple neutral studio background.
No extra views.
No duplicate views.
No unrelated objects.
`;

      const imageSize =
      document.getElementById('imageSizeSelect')?.value || '2K';

    const payload = {
      contents: [{
        role: 'user',
        parts: [
          { text: prompt },
          {
            inlineData: {
              mimeType: reference.mimeType,
              data: reference.data
            }
          }
        ]
      }],
      generationConfig: {
        responseModalities: ['IMAGE'],
        imageConfig: {
          aspectRatio: '16:9',
          imageSize: imageSize
        }
      }
    };

      const button = document.getElementById('generateChosenAnglesBtn');
    const loading = document.getElementById('loading');
    const loadingText = document.getElementById('loadingText');

    try {
      if (button) {
        button.disabled = true;
        button.textContent = 'Generating Angle Sheet...';
      }

      if (loading) loading.classList.remove('hidden');

      if (loadingText) {
        loadingText.textContent =
          `Generating one image with ${selected.length} selected view${selected.length === 1 ? '' : 's'}...`;
      }

      const response = await fetch('/api/gemini/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

           if (!response.ok) {
        throw new Error(
          result?.error?.message ||
          result?.error ||
          `Gemini request failed (${response.status})`
        );
      }

      const imageData =
        result?.candidates?.[0]?.content?.parts?.find(
          part => part.inlineData
        )?.inlineData;

      if (!imageData) {
        throw new Error('Gemini did not return an angle-sheet image.');
      }

      const angleSheetUrl =
        `data:${imageData.mimeType};base64,${imageData.data}`;

           const angleArea = document.getElementById('multiAngleContent');

      if (angleArea) {
        angleArea.innerHTML = `
          <div class="w-full space-y-4">
            <h3 class="font-bold text-lg text-indigo-300">
              Selected Angle Sheet
            </h3>

            <p class="text-xs text-slate-400">
              ${labels.join(' • ')}
            </p>

            <div class="checkerboard w-full rounded-xl p-3 flex justify-center">
              <img
                id="angleSheetImage"
                src="${angleSheetUrl}"
                class="max-w-full max-h-[75vh] object-contain rounded-lg"
                alt="StyleMaster Angle Sheet">
            </div>

            <button
              id="downloadAngleSheet"
              class="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg font-bold">
              Download Angle Sheet
            </button>

            <p class="text-xs text-slate-400">
              All selected views were generated together in one image. Crop individual views as needed.
            </p>
          </div>
        `;

        angleArea.classList.remove('hidden');
      }

           document.getElementById('downloadAngleSheet')?.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = angleSheetUrl;
        link.download = 'stylemaster-angle-sheet.png';
        link.click();
      });

    } catch (error) {
      alert(`Angle sheet failed: ${error.message}`);
    } finally {
      if (loading) loading.classList.add('hidden');

      if (button) {
        button.textContent = 'Generate Selected Angle Sheet';
        button.disabled = false;
      }
    }
  }

  function installAngleSheet() {
    const button = document.getElementById('generateChosenAnglesBtn');
    const status = document.getElementById('angleServerStatus');

    if (status) status.remove();

    if (button) {
      button.textContent = 'Generate Selected Angle Sheet';
      button.disabled = false;
      button.onclick = generateAngleSheet;
    }

    document.querySelectorAll('.pre-angle-choice').forEach(box => {
      box.addEventListener('change', updateAngleSheetCount);
    });

    window.generateChosenAnglesV7 = generateAngleSheet;
    updateAngleSheetCount();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', installAngleSheet);
  } else {
    installAngleSheet();
  }
})();
