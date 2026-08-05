# Brand guidelines — Recreatiebedrijf Boot

Dit is het merkboek voor recreatiebedrijfboot.nl. Elke pagina en elk nieuw blok volgt deze regels, zodat de site overal dezelfde stem en hetzelfde gevoel heeft.

## Merkgevoel
Gastvrij familiebedrijf aan de Zeeuwse kust. Warm, nuchter, ruim en licht. Geen luxeresort-vibe, geen festivalcamping: rust, buitenleven en persoonlijk contact. Premium in afwerking, eenvoudig in toon.

## Kleuren
| Token | Waarde | Gebruik |
| --- | --- | --- |
| `--color-brand-green` | #5BBE36 | Logo-groen, glow-accenten |
| `--color-brand-green-deep` (`--color-coral`) | #3F8E20 | Primaire knoppen, tekst-accenten in koppen (AA-veilig) |
| `--color-brand-blue-deep` (`--color-sea`) | #1F5F9D | Sectielabels, links, iconen |
| `--color-sea-deep` | #143E68 | Donkere vlakken (footer, mesh-secties), kaart-koppen |
| `--color-amber` | #F2C97C | Accenten op donkere vlakken, sterren |
| `--color-paper` | #FBF7EE | Basisachtergrond |
| `--color-sand-soft` | #F4ECD8 | Afwisselende sectieband, met `border-y --color-line` |
| `--color-mist` | #DEEAF6 | Zachte blauwe vlakjes, icoon-tegels, actieve states |
| `--color-ink` / `-soft` / `-mute` | #16263A / #475569 / #6B7585 | Tekst-hiërarchie |

Regels: nooit donkere of merk-gekleurde tekst op donker; op `bg-mesh-sea` en de footer is tekst wit/amber. Groen accent in een kop is altijd `--color-coral` (het donkere groen), nooit het felle logo-groen.

## Typografie
- Display: **Bricolage Grotesque**, gewicht 600 voor alle koppen.
- Body: **Inter**, 400/500/600. Geen cursief, geen em-dash.
- Vaste kopklassen (niets inline meer):
  - `.heading-display` — home-hero (clamp 2.5rem tot 4.5rem)
  - `.heading-hero` — paginakoppen en detail-hero's (clamp 2.25rem tot 4rem)
  - `.heading-xl` — sectiekoppen (clamp 2rem tot 3.25rem)
  - `.heading-lg` — subsectiekoppen (clamp 1.6rem tot 2.25rem)
- Kaart-/kolomkoppen daaronder: Tailwind `text-2xl`/`text-xl` met `font-display`.
- Accent in een kop: één woordgroep in `text-[var(--color-coral)]`.

## Sectielabel (eyebrow)
Eén patroon overal: kort horizontaal streepje + uppercase label (`.eyebrow` = `.dateline`, zelfde stijl). Blauw (`--color-sea`) op licht, amber op donker (`-light` variant). Geen bolletjes, geen andere varianten.

## Sectie-opbouw
1. `.section` verticale maat (5.5rem, mobiel 3.5rem) binnen `.container-x` (max 1240px).
2. Label → kop (`.heading-xl`) → korte intro (`max-w-xl`, `--color-ink-soft`) → content.
3. Bandritme per pagina: paper → sand-soft (`border-y`) → eventueel één donkere `bg-mesh-sea` sectie. Nooit twee donkere secties direct na elkaar.

## Beeld
- Altijd echte foto's van Boot of de omgeving; geen stock, geen zwart-wit, geen AI-vervormde teamfoto's.
- Featureframes: `rounded-[1.75rem]`, zachte diepe schaduw (`0 50px 90px -40px rgba(20,57,69,.5)`).
- Gridtegels/galerij: `rounded-2xl`, `.img-zoom` hover (alleen op hover-apparaten).
- Geen scheve polaroids, geen witte fotolijstranden meer.

## Componenten
- Knoppen: pill (`999px`). Primair groen (`.btn-coral`), secundair `.btn-outline`, op donker `.btn-glass`/`.btn-on-dark`. Press-feedback `scale(0.97)`. Max 1 primaire knop per blok.
- Kaarten: `.card` 18px radius; interactief altijd `.card-hover`.
- Chips: `.chip` varianten coral/sand/dark.
- Formulieren: `.field` + `.field-label`; verzenden via `data-mailto` knoppen.

## Motion
- Reveal on scroll: 550ms, 14px, sterke ease-out; alles respecteert `prefers-reduced-motion`.
- Hover-effecten alleen binnen `@media (hover:hover) and (pointer:fine)`.
- UI-animaties kort (onder 300ms); alleen `transform`/`opacity`.

## Copy
- Nederlands, je/jullie, eenvoudige woorden. Ondertekening: Gertjan & Lisette.
- SEO-termen in koppen waar natuurlijk: camping Noordwelle, kamperen Schouwen-Duiveland, vakantie Renesse.

## Footer
Donker (`--color-sea-deep`), amber kolomlabels, en "Made by Agensea" met een zichtbaar pulserende glow in Boot-groen.
