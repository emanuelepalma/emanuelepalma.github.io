# emanuelepalma.com

Static site. No build step, no dependencies. Open `index.html` in a browser, or push
the folder to GitHub Pages / Netlify as-is.

    site/
      index.html          Home
      work.html           Work
      publications.html   Publications & talks
      notes.html          Notes
      about.html          About
      contact.html        Contact
      css/style.css       All styling — every colour, font and spacing token is at the top
      js/site.js          ~20 lines: reveal-on-scroll only
      assets/             Favicon, mark, avatar

## Editing

**Colours and type** live in the `:root` block at the top of `css/style.css`.
Change `--plum` / `--azure` / `--amber` / `--cream` / `--night` and the whole site follows.
To swap the font pairing, change `--display` / `--body` / `--mono` and update the Google
Fonts `<link>` in each page's `<head>`. Three alternative pairings are listed in a comment
next to those variables.

**Content** is plain HTML. Repeating blocks all use one class each, so you copy a block and
change the text:

| Block | Class | Where |
|---|---|---|
| "Now" line item | `.row` | index.html |
| Work teaser card | `.card` | index.html |
| Full project entry | `.proj` (add `.proj--flip` to mirror it) | work.html |
| Publication | `.pub` (last one gets `.pub--last`) | publications.html |
| Talk card | `.talk` | publications.html |
| Note listing | `.note-item` (last one gets `.note-item--last`) | notes.html |
| About fact | `.fact` | about.html |

**Images.** Every grey striped box is a placeholder: `.card__media`, `.proj__media`,
`.tile`, `.portrait`. Drop an `<img>` inside and delete the `.ph-label` span.

**Nav.** Add `class="is-active"` to the current page's link in the header of that page.

**Forms** post nowhere — point the `action` at Formspree, Buttondown, or your own endpoint.

Responsive with no media queries: the grids use `auto-fit` + `minmax`, type uses `clamp()`.
Motion respects `prefers-reduced-motion`.


## Credits

Paintbrush icon in the mark: Font Awesome Free (CC BY 4.0) — https://fontawesome.com/license/free
