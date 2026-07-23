# Course Site — Agentic Coding with Claude

Static learning-page site for the ten-week opt-in course "Agentic Coding with Claude." The repo holds the course source documents (syllabus, mastery-objectives workbook) and the student-facing HTML lessons built from them.

## Language

### Curriculum

**Mastery Objective**:
One numbered row (M01–M60) in the objectives workbook: a single assessable capability with a Week, Category, Bloom Level, Assessed By, and Primary Source.
_Avoid_: learning goal, outcome (reserved for the syllabus's course-level Learning Outcomes)

**Learning Page**:
A self-contained, student-facing HTML lesson that teaches exactly one Mastery Objective (a dense objective may be covered by several Learning Pages, each still targeting only that objective).
_Avoid_: article, module (Skilljar's term), unit

**Week Hub**:
The per-week index page: theme, objective table, assigned sources, time estimate, and links to that week's Learning Pages.

**Course Home**:
The site's root index page linking to Week Hubs.

**Self-Check**:
The Bloom-matched practice block ending every Learning Page: reveal-answer MCQs for all pages, plus a hands-on checklist on Apply pages or a worked analysis exercise on Analyze pages.
_Avoid_: quiz (reserved for the graded weekly 25-MCQ quizzes)

### Sourcing

**Assigned Source**:
A reading or video the syllabus assigns students for the week, regardless of whether the site can fetch its text.

**Grounding Source**:
An Assigned Source whose text was actually fetched at build time; every factual claim in a Learning Page must be traceable to one.
_Avoid_: reference (too generic)

**Companion Material**:
An Assigned Source that could not be fetched (login-walled or video without an obtainable transcript); linked with "what to look for" pointers but never relied on for lesson claims.

**Source Tier**:
The course's trust hierarchy for sources: 1 Anthropic official, 2 Pocock/AI Hero, 3 selected practitioner, plus ancillary GitHub Docs.
