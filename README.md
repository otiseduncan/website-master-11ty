# Website Master — Eleventy (11ty)

Golden Master template for fast brochure/portfolio sites.

## Quick start
npm install
npm run dev   # http://localhost:8080
npm run build # outputs to /dist

## New site from this master
1) Push to GitHub, mark "Template repository".
2) Use this template → new repo.
3) Edit /src/_data/site.json and /src/_data/nav.json
4) Replace page content in /src/pages/*
5) Drop hero images in assets/img/hero and update frontmatter.

## Deploy
- GitHub Pages: included workflow (Actions → Pages)
- Netlify/Vercel: build = `npm run build`, publish dir = `dist`
