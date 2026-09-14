# Production Origin Regression Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Allow the explicitly enabled regression runner to target the original production origin for a backend-controlled test Token.

**Architecture:** Keep the existing opt-in `test` mode and ten-step request sequence, but allow its validated HTTPS origin to equal the original production origin. The operator-provided backend-controlled Token remains responsible for rejecting or isolating writes.

**Tech Stack:** Next.js 16 Route Handlers, React 19, Node.js test runner

**Spec:** User request in the 2026-09-14 task conversation; the supplied Token is explicitly controlled by the backend for production regression.

## Global Constraints

- Production origin is exactly `https://wxxcx.xtotoro.com`.
- Production targeting still requires `SUNRUN_REGRESSION_MODE=test` and `SUNRUN_REGRESSION_ALLOW_TEST_SUBMIT=true`.
- Existing mock and non-production test behavior remains compatible.
- No real Token or production network request is used by automated tests.

---

### Task 1: Production origin transport support

**Files:**
- Modify: `tests/run-regression.test.js`
- Modify: `lib/server/run-regression.js`

**Interfaces:**
- Consumes: `runRegression(input, options)` and the current preparation endpoint sequence.
- Produces: existing full regression results while accepting the exact original production origin.

- [ ] **Step 1: Write a failing test** proving an explicitly enabled run reaches the original production origin and preserves upstream business failures.
- [ ] **Step 2: Run `node --test tests/run-regression.test.js`** and confirm the new assertions fail because the mode is not implemented.
- [ ] **Step 3: Remove the production-origin exclusion** while preserving HTTPS origin validation and the explicit submit opt-in.
- [ ] **Step 4: Run `node --test tests/run-regression.test.js`** and confirm all focused tests pass.

### Task 2: Operator configuration and live regression

**Files:**
- Modify: `app/api/sunrun/regression/route.js`
- Modify: `components/RunRegressionPanel.jsx`
- Modify: `.env.example`
- Modify: `README.md`

**Interfaces:**
- Consumes: the `production-readonly` result contract from Task 1.
- Produces: accurate UI/report copy, documented server-only environment configuration, and a redacted live report.

- [ ] **Step 1: Update route setup metadata** so test mode reports the configured target origin without claiming it is non-production.
- [ ] **Step 2: Keep the existing full-flow report contract** and document the backend-controlled Token requirement.
- [ ] **Step 3: Document the original origin as an allowed explicit regression target.**
- [ ] **Step 4: Run `npm test`, `npm run lint`, and `npm run build`** and inspect every exit code.
- [ ] **Step 5: Resolve the supplied Token to an account and task, then run one live ten-step regression with redacted output and no automatic retries.**
