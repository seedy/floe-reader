# Floe reader

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Core Philosophy

- **Understand before changing**: Never modify code you haven't read and understood
- **Plan before implementing**: Present approach and wait for explicit approval
- **Explain the "why"**: Technical decisions need reasoning, not just implementation
- **Minimize complexity**: Prefer removing redundant code over adding workarounds

---

## Workflow Requirements (STRICT)

### 1. Linters and formatters

Always make sure code is properly linted and formatted before considering a task finished.

There are 3 commands to run :

- `pnpm run lint:biome`
- `pnpm run lint:tsc`
- `pnpm run test`

### 2. Error Analysis Protocol

When encountering errors (TypeScript, runtime, validation, etc.):

1. **Root Cause Analysis**: Identify and explain the underlying issue, not just symptoms
2. **Explain the "Why"**: Why does this error occur? What assumption is broken?
3. **Mitigation Plan**: Propose a fix with clear reasoning
4. **Side Effects**: Investigate and document potential impacts on other parts of the codebase
5. **Request Approval**: Wait for explicit confirmation before proceeding
6. **Questions First**: If anything is unclear, ask before proposing solutions

### 3. Build & Verification

Do not run build commands yourself. Verifications will be handled by me :

1. Ask me to try out
2. Wait for me to paste output/errors
3. Analyze results and iterate

Never assume changes are correct without build verification.

### 4. Change Management

**For targeted fixes (1-3 files):**

- Show diff for each file
- Explain the change rationale
- Proceed after approval

**For broader changes (4+ files or architectural):**

- List all affected files/concepts first
- Include business logic implications
- Show complete diffs before any edits
- Step-by-step execution with approval gates
- If proposing batch changes, explicitly request permission

### 5. Approval Gates

Always ask "Do you approve?" or "Should I proceed?" before:

- Making code changes
- Deleting files or code
- Adding new patterns or abstractions
- Database migrations
- Any irreversible action

---

## Cross-App Rules

### Type Alignment

- **Backend types are source of truth**: Frontend types must align with backend DTOs
- **No redundant fields**: If a field serves no purpose, remove it
- **Explicit casts with comments**: When casting types, add a comment explaining why it's safe

### API Contracts

- Changes to server endpoints require corresponding client updates
- Validate at boundaries (API input), trust internal code

---

## Forbidden Actions

- No auto-commits or git commands without explicit request
- No package installs without asking
- No `any`, find other solutions
- No backwards-compatibility hacks for removed features

## Continous improvement

- Try your best to align with how I work
- Remember my decisions
