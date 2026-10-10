# MixoLabs V147 — Edit a Generated Image

After opening any generated result as the Active Masterpiece, customers can now create a selective edited version of that exact image.

## Customer workflow

1. Generate an image and open the preferred result.
2. Under **Edit This Generated Image**, describe only the requested change, such as “Change the background to a moonlit forest.”
3. Review the displayed cost and confirm the one-credit edit.
4. MixoLabs automatically supplies the selected generation as the reference image.
5. The edited result opens as the Active Masterpiece and also appears in **All Results**.
6. The customer can download, enhance, save, favourite or edit the new version again.
7. **View Original Version** returns to the immediate parent image. Repeated edits therefore retain a navigable version chain during the session.

## Preservation rules

The edit request instructs the image model to change only what the customer explicitly requests. Subject identity, recognisable faces, pose, proportions, clothing, objects, materials, framing, composition, lighting direction, style, colours and quality remain locked unless mentioned in the edit instruction.

Background changes additionally require clean foreground edges and coherent perspective, light, shadows and reflections. The model is told not to return a collage, comparison sheet, mock-up or instructions printed on the image.

The existing server-side reference-image moderation, person-identity lock, failed-generation refund process and credit accounting remain active.
