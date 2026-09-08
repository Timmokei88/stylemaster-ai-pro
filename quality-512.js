(() => {
  function add512Quality() {
    const select = document.getElementById('imageSizeSelect');

    if (!select) return;

    // Don't add it twice.
    if (Array.from(select.options).some(option => option.value === '512')) {
      return;
    }

    const option = document.createElement('option');
    option.value = '512';
    option.textContent = '512 — Economy / Preview';

    select.insertBefore(option, select.firstChild);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', add512Quality);
  } else {
    add512Quality();
  }
})();
