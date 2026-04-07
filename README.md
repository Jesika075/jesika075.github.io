# M&A Deal Tracker

A static deal tracker hosted on GitHub Pages.

## How to update

1. Edit `data.js` to add/remove/update deals and documents
2. Commit and push to `main`
3. GitHub Actions auto-deploys to your Pages URL

## Files

- `index.html` — the tracker UI (no need to edit)
- `data.js` — **your data file** (edit this)
- `.github/workflows/deploy.yml` — auto-deploy config

## Adding a new deal

1. Add a deal object to the `deals` array in `data.js`
2. Copy any existing deal's document block and change the `dealId`
3. Push to `main`

## Status values
Pending | Received | Under Review | Approved

## Stage values
Term Sheet | Due Diligence | Documentation | Closing | Post Closing