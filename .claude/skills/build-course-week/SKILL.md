---
name: build-course-week
description: Build the learning pages for one week of the Agentic Coding with Claude course. Use when the user asks to build/create the learning pages, lessons, or site content for a given week (e.g. "/build-course-week 3" or "build the week 3 pages").
---

# Build Course Week

Build the set of HTML learning pages for week $ARGUMENTS of the course, aligned to that week's mastery objectives and grounded in that week's assigned sources. Week 1 (`docs/week-01/`) is the reference implementation — match its structure, voice, and quality exactly.

## Established decisions (do not re-litigate)

These were settled in the Week 1 grill session; follow them unless the user says otherwise:

- **Self-contained lessons**, student-facing, second person. A student must be able to reach the objective from the page alone; assigned sources are cited and linked as "go deeper."
- **One page per objective minimum**; split a dense objective into 2–5 lesson pages when it genuinely contains multiple lessons (Week 1 split M01 and M03).
- **Grounding**: web-fetch every fetchable assigned source for the week fresh at build time (URLs are in the `Sources` sheet of the objectives workbook). Every factual claim must be traceable to a fetched source. Login-walled or video sources are Companion Material — link them with "what to look for" pointers; hunt for transcripts/public module lists and use them when found.
- **Bloom-matched self-checks** end every page: 3–5 click-to-reveal MCQs in the graded quiz's application-over-recall style; Apply objectives also get a hands-on checklist; Analyze objectives get a worked analysis exercise; Evaluate objectives get a judgment exercise with model rationale.
- **Static no-build HTML** (see `adr/0001`), shared `docs/assets/styles.css` + `app.js`. No inline styles, no new frameworks.
- Vocabulary lives in `CONTEXT.md` (Learning Page, Week Hub, Self-Check, Grounding Source, Companion Material). Use those terms; update the file if new terms crystallise.

## Procedure

1. **Extract the week's plan.** Read the week's rows from `Agentic_Coding_with_Claude_Mastery_Objectives.xlsx` (Objectives + Weekly Map + Sources sheets) and the week's section of `Agentic_Coding_with_Claude_Syllabus.docx` (use `python-docx`/`openpyxl` with `-X utf8`, as in Week 1). Note each objective's ID, statement, Bloom level, Assessed By, and Primary Source, plus the quiz topics and assignment text.
2. **Propose the page inventory.** Decide which objectives split into multiple pages. Present the proposed inventory (page titles + filenames) to the user with AskUserQuestion before writing.
3. **Fetch grounding sources.** WebFetch each assigned source; search for transcripts of assigned videos. Do not write content for claims you could not ground.
4. **Write the pages** in `docs/week-NN/`:
   - Filenames: `mXX[a-z]-short-slug.html` (letter suffix only for split objectives); hub is `index.html`.
   - Page anatomy (copy a Week 1 page as the template): breadcrumb header → `h1` + lede → `.obj-banner` with ID/Bloom/Assessed-By chips and objective statement → teaching sections with `.callout` asides → Bloom-matched `.selfcheck` (and `.handson` for Apply) → `.sources` listing grounding vs. companion sources → `.pager` prev/next in reading order.
   - Self-check markup must follow the `app.js` contract: `.q[data-answer]` > `.q-opts` buttons with `data-opt` > hidden `.q-why`.
   - Footer notes the source-verification date (today).
   - Week hub: card grid of lessons in recommended order, assessment section (quiz topics + assignment text), assigned sources list.
5. **Update navigation.** In `docs/index.html`, unlock the week's card (remove `locked` class, add link + objective count + description).
6. **Verify before delivery** (all three):
   - Internal link check: every `href`/`src` in new/changed pages resolves to a file.
   - Serve `docs/` locally (`python -m http.server`) and render the hub plus at least two lesson pages in Chrome; screenshot-check layout.
   - Exercise the self-check JS on one page (wrong click marks incorrect without revealing; correct click reveals rationale) and fetch every new page confirming HTTP 200.
7. **Commit and push.** Milestone commits with messages via temp file (`git commit -F`), Co-Authored-By trailer, then push — GitHub Pages redeploys `main /docs` automatically. Confirm the live URL renders the new week.
