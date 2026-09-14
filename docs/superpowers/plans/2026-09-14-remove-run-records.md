# Remove Run Records Implementation Plan

> **For Codex:** Execute this plan in the current task and verify each step before completion.

**Goal:** Remove the run-record/history feature end to end while preserving login, task selection, and start-run behavior.

**Architecture:** Delete the App Router page and route handler first, then remove their client state/API helpers and server-side upstream adapter. Finish by pruning feature-only styles, tests, and documentation so the shipped route manifest contains no record endpoints.

**Tech Stack:** Next.js App Router, React, Zustand, Node test runner, CSS

---

### Task 1: Remove the records feature chain

**Files:**
- Delete: `app/records/page.jsx`
- Delete: `app/api/sunrun/records/route.js`
- Modify: `app/dashboard/page.jsx`
- Modify: `lib/api.js`
- Modify: `lib/store.js`
- Modify: `lib/server/sunrun-service.js`
- Modify: `lib/server/sunrun-models.js`

- [x] Remove the dashboard entry and both App Router endpoints.
- [x] Remove record-only client state and API functions.
- [x] Remove the `getSunrunArch` service call and response model.

### Task 2: Remove residue and verify the remaining product

**Files:**
- Modify: `app/globals.css`
- Modify: `tests/miniprogram.test.js`
- Modify: `README.md`

- [x] Delete record-only selectors and tests.
- [x] Update documentation to describe only the remaining flow.
- [x] Scan for stale references, then run tests, lint, build, and route checks.
