# Signaling Power supplies

A bilingual English and Arabic quiz with 100 questions about railway signaling and power supplies. Questions are shuffled each time the page loads. The final result plays a success sound at 85% or higher, and a failure sound below 85%.

## Run locally

Open `index.html` in a browser, or serve the project folder with a local static server such as the VS Code Live Server extension. No package installation or build step is required.

## Project files

- `index.html` — quiz page and content structure
- `style.css` — responsive design and visual styling
- `script.js` — quiz interactions, scoring, and audio
- `quiz-questions.js` and `quiz-questions-part2.js` — the 100 quiz questions
- `Logo.jpg` — project logo and favicon
- `audio/` — final-result and section feedback sounds

## Deploy with GitHub Pages

1. Push the repository to GitHub.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose the `main` branch and `/ (root)`, then save.
5. Open the published URL after the Pages deployment finishes.

The site is static and needs no build command. Keep `.env` and other private configuration files out of the repository; `.env` is excluded by `.gitignore`.

## Deploy with Vercel

Import the repository into Vercel. The included `vercel.json` configures the static site and its quiz and audio assets.
