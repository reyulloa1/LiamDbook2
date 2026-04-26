# Liam D Book Website

This project uses React + Vite and can be deployed automatically to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Publish live with GitHub Pages

1. Push this repository to GitHub.
2. Make sure your default branch is `main`.
3. In GitHub, go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Source: GitHub Actions**.
5. Push a commit to `main` (or run the workflow manually from **Actions**).
6. Open **Actions → Deploy to GitHub Pages** and wait for green checks.
7. Your live URL appears in the deploy job output and in **Settings → Pages**.

> If GitHub Actions reports `Dependencies lock file is not found`, run `npm install` locally once and commit the generated `package-lock.json` file.

## Routing note

This app uses `HashRouter` to avoid 404 issues on GitHub Pages for routes like `/about` and `/buy`.
