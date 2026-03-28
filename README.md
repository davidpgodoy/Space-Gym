# Space Gym Website

This is the official website for Space Gym, located in El Pinar, Ciudad de la Costa.

## Tech Stack
- Pure HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript
- No frameworks or libraries

## File Structure
- `index.html`: The main single-page website.
- `css/styles.css`: All styling, fully responsive and mobile-first.
- `js/main.js`: Interactivity (mobile menu, scroll reveal, number counters, sticky navbar).
- `assets/`: Directory for images.

## Setup & Deployment
This project requires zero build configuration. It consists of static files.
You can deploy it directly to:
- Vercel
- Netlify
- GitHub Pages
- Any standard web server (Apache, Nginx)

## Customization

### Colors
All brand colors are defined as CSS variables at the top of `css/styles.css`:
```css
:root {
    --color-bg: #0D0D0D;
    --color-accent: #C8E635;
    /* ... */
}
```
Change these values to update the theme globally.

### Replacing Images
1. **Logo:** Replace `assets/logo.png`. The CSS uses `mix-blend-mode: screen` to drop dark backgrounds.
2. **Hero Background:** Find `<div class="hero-bg"></div>` in `index.html` and replace it with an `<img>` or update the CSS to use a `background-image`.
3. **Gallery & Community:** Look for `<div class="placeholder-img">` in `index.html` and replace them with real `<img>` tags pointing to your photos.

### Updating Links
All WhatsApp buttons currently link to `https://wa.link/97wb8t`. Search for this URL in `index.html` to update it if needed.
