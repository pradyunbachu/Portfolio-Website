# Portfolio Website

A modern portfolio website built with React and Vite.

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

This will start the development server at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages.

### Setup Instructions:

1. **Push your code to GitHub** (if you haven't already)
2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save

3. **Configure the base path** (if needed):
   - If your repo is named `Portfolio-Website`, the base path in `vite.config.js` is already set to `/Portfolio-Website/`
   - If you want to use `username.github.io` as your main site:
     - Rename your repo to `username.github.io` (replace `username` with your GitHub username)
     - Change `base: '/Portfolio-Website/'` to `base: '/'` in `vite.config.js`

4. **Deploy:**
   - Push to the `main` branch
   - GitHub Actions will automatically build and deploy your site
   - Your site will be available at:
     - `https://username.github.io/Portfolio-Website/` (if repo is named Portfolio-Website)
     - `https://username.github.io/` (if repo is named username.github.io)

## Tech Stack

- React 18
- Vite
- Font Awesome Icons
- Custom CSS

