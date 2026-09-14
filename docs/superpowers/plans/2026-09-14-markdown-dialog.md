# Markdown Dialog Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a reusable accessible dialog that loads and renders a Markdown file, plus a working login-page example.

**Architecture:** Next.js compiles the fixed project-root `dialog/index.md` file into a Server Component during development/build. The server page passes that rendered content into a focused client-side `MarkdownDialog`, which owns only native dialog interaction and keeps compiled document code outside the client component boundary.

**Tech Stack:** Next.js 16 App Router, React 19, `@next/mdx`, Node.js test runner

**Spec:** User request in the 2026-09-14 task conversation.

## Global Constraints

- The compiled source is always `dialog/index.md` at the project root.
- The dialog supports Escape, backdrop closing, visible focus, and native focus trapping.
- The public API stays page-agnostic: `open`, `onClose`, `title`, `closeLabel`, and `children`.

---

### Task 1: Build-time Markdown compilation

**Files:**
- Create: `next.config.mjs`
- Create: `mdx-components.js`
- Create: `dialog/index.md`
- Modify: `package.json`

**Interfaces:**
- Produces: an importable React component from `dialog/index.md`.

- [x] **Step 1: Add the official Next.js MDX packages and configure `.md` compilation.**
- [x] **Step 2: Add the required `mdx-components.js` provider.**
- [x] **Step 3: Add `dialog/index.md` as the single project-owned dialog document.**

### Task 2: Reusable dialog and example

**Files:**
- Create: `components/MarkdownDialog.jsx`
- Create: `components/LoginScreen.jsx`
- Modify: `app/page.jsx`
- Modify: `app/globals.css`

**Interfaces:**
- Consumes: the server-rendered `dialog/index.md` content as `children`.
- Produces: `MarkdownDialog({ open, onClose, title, closeLabel, children })`.

- [x] **Step 1: Implement native modal behavior, keyboard/backdrop closing, and accessible naming.**
- [x] **Step 2: Extract the interactive login screen and add the example trigger.**
- [x] **Step 3: Keep `app/page.jsx` server-rendered and pass the compiled document through `children`.**
- [x] **Step 4: Add responsive styles consistent with the existing visual system.**
- [x] **Step 5: Run tests, lint, build, and verify the local page without requesting production APIs.**
