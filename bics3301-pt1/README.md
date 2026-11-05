# BICS 3301 · Practical Test Part 1 starter (React)

The same starter is used by every section. Your task paper and data files are released on iTa'LeeM when the test starts.

## Set up at home, at least a day before the test

Open this folder in VS Code, then in the terminal:

```bash
npm install
npm run dev
```

Open http://localhost:5173. You should see "Practical Test Part 1 · React" and links Q1, Q2 and Q3, each saying "Not started yet".

Then start Git for this folder (local only, nothing goes to GitHub):

```bash
git init
git add .
git commit -m "Start"
```

You should see a line like `[main (root-commit) 1a2b3c4] Start`. Do **not** write any test code before the test starts.

## What is already done for you

| File | What it is |
|---|---|
| `src/App.jsx` | Routes: `/q1`, `/q2` and `/q3/*`. Fill in your name, matric no. and section in the comment at the top; do not change the code |
| `src/shared/Layout.jsx` | Top bar with links to each question |
| `src/shared/useLocalStorage.js` | Like useState, but survives a refresh (same as CampusEats Week 4) |
| `src/shared/Status.jsx` | `<Loading />` and `<ErrorMessage message onRetry />` |
| `src/index.css` | All the CSS you need. Classes: `card`, `card selected`, `card-grid`, `summary`, `detail`, `muted`, `pill`, `badge`, `form`, `field`, `error`, `error-box`, `row` |
| `src/q1/`, `src/q2/`, `src/q3/` | One empty page per question: write your answers here |

## At the end of the test

```bash
npm run pack
```

This makes `<your matric>_submission.zip`, e.g. `2416464_submission.zip` (your code and Git history, without node_modules). It reads your matric number from the top of `src/App.jsx`, or asks you for it. Upload it with your screen video to iTa'LeeM.
