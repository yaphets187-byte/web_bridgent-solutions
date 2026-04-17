# Bridgent Solutions Website Workflow

## Project
- Repo: `https://github.com/yaphets187-byte/web_bridgent-solutions`
- Local folder: `C:\Users\ROG ZEPHYRUS\OneDrive - Bridgent Solutions\BRIDGENT SOLUTIONS\web\bridgent-solutions`
- Live site: `https://bridgent-solutions.com`
- Hosting: Netlify
- Contact form: Netlify Forms

## Branch Setup
- `dev` = working branch
- `main` = production branch

## Branch Rules
- Do normal edits on `dev`
- Do not experiment on `main`
- Use `main` only when ready to publish or for urgent live fixes

## GitHub Mapping
- local `dev` -> `origin/dev`
- local `main` -> `origin/main`

## Netlify Setup
- Production branch: `main`
- Branch deploy branch: `dev`
- Push to `dev` -> branch preview deploy
- Push to `main` -> production deploy

## Local Development
- Use `localhost:8888` for fast local editing and layout checks
- Use Netlify preview for branch-level validation before release
- Use production only for final live verification

## Forms
- Form name: `consultation`
- Notification email: `aslesterr@bridgent-solutions.com`

## Daily Work
1. Open the repo.
2. Confirm current branch is `dev`.
3. Make changes.
4. Check changes quickly on `localhost:8888`.
5. Review changed files.
6. Commit changes.
7. Push `dev`.
8. Check Netlify preview deploy.
9. Verify desktop and mobile layout.

## Before Release
1. Confirm `localhost:8888` looks correct first.
2. Confirm Netlify preview looks correct.
3. Confirm no unfinished work remains on `dev`.
4. Test key sections and navigation.
5. Test form if contact section changed.
6. Check branding assets if logo or favicon changed.

## Publish Release
1. Switch to `main`.
2. Pull latest `main`.
3. Merge `dev` into `main`.
4. Push `main`.
5. Wait for Netlify production deploy.
6. Check the live site.

## Forms Check
1. Submit a test form if form-related changes were made.
2. Check Netlify `Forms`.
3. Check `aslesterr@bridgent-solutions.com`.
4. Check spam/junk if needed.

## Do Not
- Do not do routine work on `main`
- Do not push incomplete work to production
- Do not discard unknown Git changes without checking the file first
- Do not remove Microsoft 365 DNS records while updating website DNS

## If Something Looks Wrong
1. Check current branch.
2. Check whether changes were committed.
3. Check whether changes were pushed.
4. Check Netlify deploy status.
5. Check browser cache only after deploy succeeds.

## Simple Workflow
`dev` -> test on localhost -> commit -> push `dev` -> review Netlify preview -> merge to `main` -> push `main` -> verify live site
