# Local Run Regression Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a local-only regression path that exercises the mini-program run contract with realistic deterministic track data and can later target an explicitly enabled non-production test origin.

**Architecture:** A pure generator creates a physically continuous, timestamped track from the selected task route. A server-owned runner sends the same request objects through either an in-memory mock transport or a guarded HTTPS test transport; the production origin is always rejected. A separate route and dashboard panel expose the regression report without changing the disabled legacy submit API.

**Tech Stack:** Next.js 16 route handlers, React 19, Node.js test runner

**Spec:** `security-audit/wx8e8598deed63f9b1/analysis/chunk_96.appservice.formatted.js`

## Global Constraints

- Local mock mode is the default and performs no upstream network request.
- `https://wxxcx.xtotoro.com` can never receive regression submissions.
- Test submission requires `SUNRUN_REGRESSION_MODE=test` and `SUNRUN_REGRESSION_ALLOW_TEST_SUBMIT=true`.
- The old `/api/sunrun/submit` endpoint remains disabled.

---

### Task 1: Mini-program track fixture

**Files:**
- Create: `lib/server/run-regression-data.js`
- Test: `tests/run-regression.test.js`

**Interfaces:**
- Consumes: normalized task and route objects from `makeMiniTasks`
- Produces: `buildRunFixture({ task, route, identity, now })`

- [x] **Step 1: Write tests for distance, point timestamps, pace, and mini-program payload keys.**
- [x] **Step 2: Run `node --test tests/run-regression.test.js` and confirm the missing module failure.**
- [x] **Step 3: Implement deterministic route interpolation and payload construction.**
- [x] **Step 4: Run the focused test and confirm it passes.**

### Task 2: Guarded regression runner and API

**Files:**
- Create: `lib/server/run-regression.js`
- Create: `app/api/sunrun/regression/route.js`
- Modify: `.env.example`
- Test: `tests/run-regression.test.js`

**Interfaces:**
- Consumes: `buildRunFixture`, environment configuration, route request JSON
- Produces: `runRegression(input, options)` and `{ success, result }` API responses

- [x] **Step 1: Test the complete mock call order and assert that injected fetch is never called.**
- [x] **Step 2: Test that the production origin is rejected in test mode before fetch.**
- [x] **Step 3: Implement mock responses, guarded test transport, sequential prerequisite/start/poll/submit calls, and redacted reports.**
- [x] **Step 4: Run the focused tests and confirm both safety cases pass.**

### Task 3: Dashboard regression control

**Files:**
- Create: `components/RunRegressionPanel.jsx`
- Modify: `app/dashboard/page.jsx`
- Modify: `lib/api.js`
- Modify: `app/globals.css`

**Interfaces:**
- Consumes: selected task, selected route, persisted login identity, `/api/sunrun/regression`
- Produces: one-click local regression report with step results and track metrics

- [x] **Step 1: Add the client API wrapper and regression panel.**
- [x] **Step 2: Pass the selected task and route from the dashboard.**
- [x] **Step 3: Add compact report styling and clear environment labeling.**
- [x] **Step 4: Run ESLint and fix any reported issues.**

### Task 4: End-to-end verification

**Files:**
- Modify: `README.md`

**Interfaces:**
- Consumes: completed regression route and panel
- Produces: documented environment switch and verified local workflow

- [x] **Step 1: Document mock defaults, the test-only opt-in, and the permanent production block.**
- [x] **Step 2: Run `npm test`, `npm run lint`, and `npm run build`.**
- [x] **Step 3: Call the local route and verify every regression step reports success without an upstream request.**
- [x] **Step 4: Inspect the dashboard result in the local browser.**
