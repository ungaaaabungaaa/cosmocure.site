# Campaign imagery

Created with the built-in image generation tool on 10 October 2026. These are illustrative campaign images, not photographs of clinic patients or treatment outcomes.

All active photo and artwork sources are local WebP files. Generated originals are resized to 1000 px wide and WebP-compressed. The existing hero, gift artwork, paper texture and floral drawings are retained. CSS masks keep the exact transparent outlines of the original artwork during image changes. Service photos retain the original rounded rectangular boxes. The hero retains its flower-and-leaf frame, the introduction keeps its curved leaf frame, and the gift section keeps its arch. Each of the ten image blocks has its own two-image set; images are never shared between blocks on the same page.

## Generation prompts

- `public/images/skin-care.webp`: Editorial skincare portrait of an adult Northeast Indian woman, natural skin texture and dark hair tucked back, ivory fabric, warm beige backdrop, soft window light, cream and espresso palette. Portrait 4:5. No text, watermark, before-and-after comparison or treatment claims.
- `public/images/hair-care.webp`: Editorial hair-care portrait of an adult Northeast Indian woman viewed from behind in three-quarter profile, long dark hair, ivory top, warm beige backdrop and natural window light. Portrait 4:5. No text, watermark, medical procedure or treatment-result claims.
- `public/images/calm-care.webp`: Editorial skincare still life with ivory cotton towels, unlabeled amber glass bottle, clear glass bowl, delicate green stem and warm travertine, in morning sunlight. Portrait 4:5. No text, logo, watermark, pills or medical claims.
- `public/images/homoeopathy.webp`: WebP conversion of the existing repository image, not newly generated.

Image sections advance every seven seconds while visible. Changes stop when the browser tab is hidden, when the pointer rests over an image, or when the system requests reduced motion. There are no play or pause buttons.

## Additional treatment-specific prompts

All of these use the same warm cream and espresso editorial style, portrait 4:5, realistic texture, soft daylight, and no text, branding, before/after comparisons or outcome claims.

- `medi-facial.webp`: Gloved hand applies a facial mask with a fan brush to an adult Northeast Indian woman reclining in an ivory towel.
- `advanced-skin.webp`: Sterile treatment pen tips in sealed packaging, unbranded treatment pen, serum ampoules and white gloves on a cream tray.
- `pigmentation-care.webp`: Respectful close-up of an adult South Asian woman with natural freckles and pigment, looking into a hand mirror.
- `scalp-care.webp`: Gloved clinician parts an adult woman's hair and uses a handheld scalp camera; no scissors or hair cutting.
- `body-contouring.webp`: Radiofrequency and ultrasound body-care applicators beside ivory towels on a warm stone worktop; no people.
- `body-care.webp`: Wooden anatomical artist mannequin, towel, blank clipboard and pen on a warm consultation desk.
- `skin-assessment.webp`: Gloved professional examines a small natural mole on an adult forearm with a dermatoscope; no invasive procedure.
- `homoeopathy-consultation.webp`: Vial of white pellets, notebook and pen in focus, with adults in consultation softly blurred in the background.
- `beauty-gift.webp`: Cream gift envelope, blank card, caramel ribbon and neatly manicured hands on ivory linen.

Existing treatment photographs were converted to WebP and paired with their corresponding new image. The original body image depicted a facial and the original hair image depicted a haircut; those were not selected for the body contouring and scalp-care blocks.

## Service background flowers
Built-in image generation produced `public/images/service-flowers.webp`.
Prompt: An airy branch with two cosmos flowers, one bud and slender leaves; delicate warm pale gold line work on a transparent background, no lettering or border.
The artwork sits behind the original curved Services frame. Its outer dimensions match the hero artwork. The mobile hero now has 20px top padding and no repeated brand/location label; the contact page heading is 30px on mobile.

## Final mobile refinements
Separate transparent ornaments replace the full decorative border:
- Hero: single cosmos flower, angled behind the leaf frame.
- Services: the approved two-flower branch, enlarged behind the photo.
- Gift card: a different ginkgo crescent with a small star, tucked behind the arch.
- Footer: a small ivory/gold constellation.
All generated with the built-in image tool, then saved as WebP. Prompts requested sparse line art, transparent backgrounds and no text or full borders.

The mobile quick-contact pill has visible Call and Visit us labels, stays above the safe area and hides at the footer without an extra spacer. The side menu uses a native modal dialog for focus containment and Escape dismissal. Every image block has a distinct interval (7.1–19.3 seconds).

Rounded treatment photos also have small alternating orbit and constellation accents tucked behind their edges. The final pill labels are Call us and Visit us, in white with icons beside the labels and no border. Content headings use one shared responsive scale: H1 30.4/41.6px, H2 28/36px and H3 20/24px (mobile/desktop).
