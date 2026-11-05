# Jas-One Securities (JOSPL) – React website

React + Vite conversion of the original static HTML site. Same design, images, fonts, PDFs and video.

## Run
```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in /dist
npm run preview
```
> When deploying, configure the server to fall back to `index.html` for unknown paths (SPA routing).
> Old links such as `/contact.html` automatically redirect to `/contact`.

## Structure
```
public/                     static files served as-is (same paths as the original site)
  assets/img, assets/favicons, downloads/*.pdf, videos/jospl-video.mp4
src/
  main.jsx                  entry – imports vendor + global CSS
  App.jsx                   routes
  assets/css, assets/fonts  vendor CSS (Bootstrap, Font Awesome, Themify, Elegant, Flaticon, animate) + icon fonts
  styles/                   variables.css, base.css, content.css (global styles only)
  data/                     navigation, site info, downloads list, page copy
  hooks/                    useWindowWidth, useScrolled
  components/
    layout/                 Layout, Preloader, TopBar, Navbar (+NavDropdown), Footer      (each with its own .css)
    common/                 Breadcrumb, ContactCard, DownloadLink                          (each with its own .css)
    sections/               HeroBanner (+YouTubeBackground), AboutSection/ContentSection,
                            WorkProcess, HelpCta, ServicesArea, MissionBlock,
                            ManagementTeam, ContactLocation                                (each with its own .css)
  pages/                    one folder per page (Home, WhoWeAre, Contact, InvestorCharter, …)
```
