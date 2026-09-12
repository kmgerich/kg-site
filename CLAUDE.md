# kg-site

Kevin Gerich's personal blog/portfolio, built on Eleventy (11ty) 3.0. Started from the
[`eleventy-base-blog` v9](https://github.com/11ty/eleventy-base-blog) starter — `package.json`
metadata still shows the upstream repo/author, that's expected.

## Commands

- `npm start` — dev server with live reload at http://localhost:8080/ (`--serve --quiet`). First
  run takes ~45s (image optimization pipeline runs cold); rebuilds are much faster once cached.
- `npm run build` — one-shot production build to `_site/`.
- `npm run debug` / `npm run debugstart` — same as above with `DEBUG=Eleventy*` verbose logging.

## Layout

- Input dir: `content/` — Output dir: `_site/` — Includes: `_includes/` — Data: `_data/`
  (configured in `eleventy.config.js`, `config.dir`).
- `eleventy.config.js` — plugins, collections, passthrough copies, image transform, feed config.
- `_config/filters.js` — custom Nunjucks filters (`readableDate`, `htmlDateString`, `head`, `min`,
  `getKeys`, `filterTagList`, `sortAlphabetically`, `regexMatch`).
- `_data/metadata.js` — site title/description/author (note: `url` here is still the placeholder
  `https://example.com/` from the starter, not `kmgerich.com`).

## Content

Two distinct sets of posts live under `content/posts/`, both picked up by the same
`posts` collection (`content/posts/blog.11tydata.js` tags them `posts`, layout `layouts/post.njk`):

- `content/posts/2002/…/2006/` — old Mozilla/Firefox-theme blog posts, as dated directory trees
  (`content/posts/YYYY/MM/DD/slug/index.md`) with images co-located next to each `index.md`.
- `content/posts/art/` — imported Instagram posts (flat files, tagged `instagram art`), each a
  caption plus a single `![Instagram image](/media/….jpg)`. Images live in `content/media/`.

`_includes/postslist.njk` renders the card grid used on the home page, archive, and tag pages. It
finds a thumbnail by regex-matching the first `/media/…` image out of the post's *raw markdown*
(via the `regexMatch` filter) — it does not use frontmatter for this, so a post's first image
(anywhere in the body) becomes its card thumbnail.

`_includes/layouts/base.njk` has a left sidebar (`.sidebar`) + main content area — this is a
custom rework of the starter's top-nav layout. The "masonry" grid on the postlist is plain CSS
grid (`public/css/index.css`, `.postlist-masonry`, breakpoints around line 413-441), not the
`flexmasonry` npm package — that dependency is currently unused in the source.

## Known issues (as of the last review)

- **`addPassthroughCopy("media")` in `eleventy.config.js` is a no-op.** There's no `media/` at
  repo root — post images live in `content/media/`. A clean build won't copy them, so all the
  Instagram post images will 404 unless `_site/media/` still has a stale committed copy. Fix:
  change it to `addPassthroughCopy({"./content/media/": "/media/"})`.
- **Feed autodiscovery link is wrong.** `base.njk` links `<link rel="alternate" href="/feed/feed.xml">`
  but the feed plugin in `eleventy.config.js` outputs to `/feed.xml`.
- A handful of very old posts hotlink images from now-dead hosts (`kmgerich.com/archive/…`,
  `noved.org`) — eleventy-img logs 404s for these on every build. Harmless since
  `failOnError: false`, just noisy.
- `_site/` is committed to git (deploy target for Netlify/Vercel reads from it directly), so it
  shows as modified after most builds — this is expected, not a mistake.

## Deploy

Netlify (`netlify.toml`: `publish = "_site"`, `command = "npm run build"`) and Vercel
(`vercel.json`: `trailingSlash: true`) configs are both present.
