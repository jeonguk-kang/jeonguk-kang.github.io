# Jeonguk Kang Personal Homepage

Static personal homepage for a Robotics AI Engineer, ready for deployment on GitHub Pages with a repository name such as `<username>.github.io`.

## Run locally

Because this is a plain static site, you can open `index.html` directly in a browser.

For a local server, use one of the following:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Project structure

```text
.
|-- index.html
|-- styles.css
|-- script.js
|-- data/
|   `-- site.js
|-- assets/
|   |-- profile.jpg
|   |-- CV_Jungwook_Kang.pdf
|   |-- favicon.svg
|   `-- research/
|       |-- legged.mp4
|       |-- estimation.mp4
|       |-- exoskeleton.mp4
|       |-- sim2real.mp4
|       `-- awards.mp4
|-- .github/
|   `-- workflows/
|       `-- pages.yml
|-- .nojekyll
|-- robots.txt
`-- sitemap.xml
```

## How to customize profile data

The central editable content file is:

- `data/site.js`

Update this file to change:

- name, title, subtitle, intro
- About section text
- research items
- projects
- CV content
- external links

Some core fallback content is also present in `index.html` so the site still has structure without JavaScript, but `data/site.js` is the main place to update personal information.

## Files to replace

Replace these files with your real assets:

- Profile image: `assets/profile.jpg`
- CV PDF: `assets/CV_Jungwook_Kang.pdf`
- Research media:
  - `assets/research/legged.mp4`
  - `assets/research/estimation.mp4`
  - `assets/research/exoskeleton.mp4`
  - `assets/research/sim2real.mp4`
  - `assets/research/awards.mp4`
- Favicon if desired: `assets/favicon.svg`

## How to connect custom links

Open `data/site.js` and update:

- `links.github`
- `links.scholar`
- `links.linkedin`
- `links.email`

The CV button path is controlled by:

- `profile.cv`

## GitHub Pages deployment

This repository is ready for GitHub Pages deployment in two common ways:

### Option 1: Deploy as `<username>.github.io`

1. Create a GitHub repository named exactly `<username>.github.io`.
2. Push this project to the repository.
3. In GitHub Pages settings, choose GitHub Actions as the source if needed.
4. The included workflow at `.github/workflows/pages.yml` will build and deploy the site.

### Option 2: Deploy a project repository

If you deploy this in a normal repository name, keep all paths relative as they are now. Since the site uses relative static paths, it remains compatible with GitHub Pages project hosting as well.

## Notes

- `.nojekyll` is included so GitHub Pages serves files directly without Jekyll processing.
- `robots.txt` and `sitemap.xml` are included for basic indexing support.
- The Open Graph image currently points to `assets/profile.jpg`.
