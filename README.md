# Greenlight Ready Release (GRR)

Greenlight Ready Release (GRR) is a lightweight release readiness dashboard for GitHub repositories. It helps developers quickly check whether a repository looks “ready to ship” by summarizing key repository signals in a clean, readable UI.

This project was built as a custom React project for TripleTen and is designed to be practical, scalable, and portfolio ready for future DevSecOps work.

## What GRR does

- Search any GitHub username or organization and list public repositories
- Display repositories as reusable cards with clear, readable metadata
- Show loading state (preloader) while requests are in progress
- Show user friendly error and empty states (invalid user, no repos, rate limit, etc.)
- Includes authentication modals (UI behavior: open, close, switch between sign in and sign up)

## Why this is useful

Developers and teams often need a quick way to review repository health before shipping changes. GRR centralizes the first “sanity check” signals into one place, reducing the time spent clicking through multiple GitHub pages.

## Tech stack

- React
- Vite
- React Router
- Fetch API
- CSS with BEM naming
- GitHub REST API
- GitHub Pages deployment

## Live demo

GitHub Pages URL:
[https://domenique412.github.io/greenlight-ready-release/]
