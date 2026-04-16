# Bridgent Solutions Landing Page

Static marketing website for Bridgent Solutions, built with plain HTML, CSS, and JavaScript.

## Structure

```text
bridgent-solutions/
|-- index.html
|-- thank-you.html
|-- assets/
|   |-- css/style.css
|   |-- js/main.js
|   `-- images/
|       |-- logo/
|       `-- projects/
|-- .gitignore
`-- README.md
```

## Features

- Responsive one-page landing page
- Smooth-scroll navigation
- Professional visual style using the Bridgent Solutions brand colors
- Netlify Forms contact form
- Separate thank-you page after successful form submission
- Static site deployable to Netlify, GitHub Pages, Cloudflare Pages, or similar platforms

## Netlify Forms Setup

1. Keep the form markup in `index.html` unchanged so Netlify can detect it during deploy.
2. Deploy the site to Netlify.
3. Open your Netlify project and go to the `Forms` section.
4. Submit a test enquiry from the live site to confirm the form is being captured.
5. Review spam filtering or notification settings in Netlify if needed.

## Deploy to Netlify

1. Sign in to Netlify.
2. Create a new site from a folder or connect a Git repository.
3. Use the `bridgent-solutions` folder as the publish directory if prompted.
4. No build command is required because this is a static site.
5. If Netlify reads `netlify.toml`, it will automatically publish the current folder.
6. After deployment, set your custom domain to `bridgent-solutions.com`.

## Namecheap Domain Connection

Keep your Microsoft 365 mail-related records intact so email continues working.

Recommended DNS setup at Namecheap:

- `ALIAS` record for host `@` pointing to `apex-loadbalancer.netlify.com`
- `CNAME` record for host `www` pointing to your Netlify subdomain, for example `your-site-name.netlify.app`

Fallback if you prefer not to use ALIAS:

- `A` record for host `@` pointing to `75.2.60.5`
- `CNAME` record for host `www` pointing to your Netlify subdomain

Important:

- Do not remove your Microsoft 365 `MX`, `TXT`, and `CNAME` email records
- Remove only conflicting website records for `@` or `www` if they already exist
- SSL usually activates automatically after Netlify verifies the domain

## Suggested Namecheap Record Layout

- `@` -> `ALIAS` -> `apex-loadbalancer.netlify.com`
- `www` -> `CNAME` -> `your-site-name.netlify.app`
- Existing Microsoft 365 records remain unchanged

## Go-Live Checklist

1. Deploy the site to Netlify.
2. Add `bridgent-solutions.com` as the custom domain in Netlify.
3. Update Namecheap DNS records for `@` and `www`.
4. Wait for DNS propagation.
5. Confirm the site opens on both `bridgent-solutions.com` and `www.bridgent-solutions.com`.
6. Submit a test contact form entry and verify it appears in Netlify Forms.

## Suggested Next Updates

- Replace the placeholder company names in the "Companies Worked With" section
- Add project screenshots in `assets/images/projects/`
- Add your actual company logo in `assets/images/logo/`
- Update business contact details if you want them shown on the site
