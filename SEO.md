# SEO-dossier — Recreatiebedrijf Boot

Datum: 5 augustus 2026. Dit document beschrijft wat er voor SEO en GEO (vindbaarheid in AI-zoekmachines) is gedaan, waarom, en wat de vervolgstappen zijn. Bedoeld voor iedereen die hier later aan verder werkt.

## Hoe dit tot stand kwam

Het onderzoek en de content zijn gemaakt met een multi-agent werkwijze:

1. **Drie parallelle onderzoeken** (augustus 2026, live SERP-analyse): commerciele/lokale keywords, informationele omgevings-keywords, en een beoordelingskader gebaseerd op officiele Google-documentatie (helpful content self-assessment, E-E-A-T uit de Search Quality Rater Guidelines, SEO starter guide) plus GEO-onderzoek naar hoe AI-zoekmachines bronnen kiezen.
2. **Een contentstrateeg** koos op basis daarvan zes artikelonderwerpen, gespreid over de klantreis.
3. **Zes schrijvers** schreven elk een artikel en verifieerden elke feitelijke claim vooraf via webonderzoek.
4. **Zes reviewers** toetsten elk artikel tegen het Google-kader en deden een onafhankelijke feitencheck (o.a. schoolvakantiedata via Rijksoverheid, hondenregels via de gemeente, Strao-data 2026, stallingstarieven tegen Boots eigen site, afstanden herberekend met een routeplanner) en leverden de definitieve versie.

Harde regels voor alle content: geen verzonnen prijzen, openingstijden of reviews; bij twijfel weglaten. Nederlands met je/jullie, geen em-dash, geen emoji, mensen-eerst geschreven (niet voor de zoekmachine).

## Belangrijkste onderzoeksbevindingen

**Waar Boot realistisch kan ranken:**

1. **Caravanstalling** — de grootste kans. De SERP voor "caravanstalling Schouwen-Duiveland" en "winterstalling caravan Zeeland" bestaat uit kleine, gedateerde sites; concurrentie zit vooral aan de oostkant (Bruinisse), de westkant bij Renesse is dun bezet. Commercieel en jaarrond omzet.
2. **Minicamping + plaatsnaam** — "minicamping Noordwelle/Renesse/Schouwen-Duiveland": individuele minicampings ranken hier gewoon zelf. Boots ruime plekken (150-370 m2) zijn een aantoonbaar verkoopargument boven concurrenten.
3. **Event-content (Strao, Kunstschouw)** — vrijwel concurrentieloos, want aggregators bedienen dit niet. Boot rankte al op de Strao-term; het is letterlijk het eigen dorp. Levert boekingen buiten het hoogseizoen (feb-mrt en juni).
4. **Hond-gerelateerde long-tail** — "camping met hond Renesse", "hondenstrand Renesse regels": themapagina's van individuele campings ranken hier aantoonbaar.
5. **Eigen merknaam** — "recreatiebedrijf boot" moet de eigen site boven ACSI/ANWB staan. Let op: renesse.com noemt het bedrijf "Mini Camping Boot"; die naamgeving gelijktrekken.

**Waar niet in investeren:** head-terms als "camping Zeeland", "camping Renesse", "appartement Renesse", "vakantiehuis Zeeland". Die worden gedomineerd door aggregators (ACSI, Ardoer, Booking, renesse.com) en grote parken. Wel als secundaire woorden in titels verwerken, geen strategie op bouwen.

## De zes lanceringsartikelen (in /blog)

| Artikel (slug) | Target keyword | Intentie / rol |
| --- | --- | --- |
| wat-te-doen-schouwen-duiveland-met-kinderen | wat te doen Schouwen-Duiveland met kinderen | Orientatie, gezinnen (kerndoelgroep) |
| hondenstrand-renesse-regels | hondenstrand Renesse regels | Planning, hondenbezitters; voedt "camping met hond" |
| fietsroutes-schouwen-duiveland | fietsroutes Schouwen-Duiveland | Tijdens verblijf; linkt naar /fietsverhuur |
| herfstvakantie-zeeland-tips | herfstvakantie Zeeland wat te doen | Seizoensverbreding najaar; linkt naar appartementen |
| strao-noordwelle | Strao Noordwelle | Uniek, eigen dorp, laagseizoen (feb-mrt) |
| winterstalling-caravan-zeeland | winterstalling caravan Zeeland | Commercieel, niche met jaarrond omzet |

Elk artikel heeft: target keyword in titel, eerste alinea en koppen waar natuurlijk; een direct antwoord in de openingsalinea (voor AI-citaties); een FAQ-sectie met echte vragen (GEO); 2-4 interne links; externe links alleen naar officiele bronnen; 900-1500 woorden. Bronnen per artikel zijn tijdens het schrijven geverifieerd; de reviewnotities staan in het workflow-archief.

## Technische SEO (doorgevoerd)

- **Sitemap**: @astrojs/sitemap genereert /sitemap-index.xml; verwezen vanuit robots.txt en de HTML-head.
- **robots.txt**: alles toegestaan, sitemap-verwijzing.
- **Canonical + Open Graph**: elke pagina heeft een canonical-URL, og:image, og:url, og:site_name.
- **Structured data**: Campground-schema (JSON-LD) op de homepage met NAW, geo-coordinaten, petsAllowed; BlogPosting-schema op elk blogartikel.
- **Meta descriptions**: per pagina en per artikel, max 155 tekens, met keyword.
- **Interne linkstructuur**: artikelen linken naar accommodatie- en servicepagina's en terug. Het blog staat bewust NIET in het hoofdmenu (keuze 10 aug 2026: menu rustig houden voor bezoekers) maar wel in de footer, de sitemap en de onderlinge links; daarmee blijven de artikelen volledig crawlbaar en indexeerbaar voor Google en AI-zoekmachines. Verwijder de footer-link niet, anders worden de artikelen wees-pagina's.

## Bij domeinkoppeling (belangrijk)

Als recreatiebedrijfboot.nl aan dit project wordt gekoppeld:

1. `site` in `astro.config.mjs` wijzigen naar het echte domein.
2. Sitemap-URL in `public/robots.txt` aanpassen.
3. Redirects instellen van de oude Procurios-URL's naar de nieuwe paden (301), anders gaat bestaande ranking (o.a. de Strao-positie) verloren.
4. Site aanmelden in Google Search Console en de sitemap indienen.

## Aanbevolen vervolgstappen (nog niet gedaan)

- **Google Business Profile** claimen/optimaliseren met consistente naam, foto's en reviews; naamgeving op renesse.com, ACSI en ANWB gelijktrekken (NAP-consistentie).
- **Zoekvolumes valideren**: dit onderzoek is SERP-gebaseerd (wie rankt, welke content); exacte volumes checken in Google Keyword Planner zodra er een Ads-account is.
- **Vervolgartikelen** (kansrijk, nog te schrijven): Kunstschouw-arrangement uitgebreider, "kamperen bij de boer Zeeland", "wat te doen in Zeeland bij regen" als eigen artikel, Neeltje Jans-gids.
- **Reviews verzamelen** op Google en Zoover en die tonen op de site (echte reviews, nooit verzonnen).
- Per kwartaal de artikelen actualiseren (data, evenementen) en in Search Console kijken welke zoektermen aanslaan.

## Archief

Het volledige workflow-archief (onderzoeksrapporten, per-artikel reviewnotities en bronnen) staat in de sessie-transcripten van 5 augustus 2026. De kern is in dit document samengevat.
