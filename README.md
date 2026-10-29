# WEDE5020-POE — Hope SA Foundation Website Proposal

## Student Information
**Student Number:** ST10508029
**Name:** Relebohile Thato Phalatsi

**Live website:** https://hope-sa-foundation.netlify.app
**GitHub repository:** https://github.com/Relebohile834/WEDE5020-POE-ST10508029

---

## Project Overview

**Name:** Hope SA Foundation

**Brief History of the Organisation:** Hope SA Foundation is a non-profit organisation that provides support to underdeveloped and disaster-affected communities in South Africa. Their projects include daily and monthly food drives, food items and essentials hamper distribution, water supply solutions, relief aid, gender-based violence and skills development workshops, and participation in working with communities for a better, economically sustainable society.

**Mission Statement:** Hope SA Foundation is dedicated to fostering hope and creating positive change in marginalized communities across South Africa and the African Continent. Through its steadfast commitment to disaster relief, poverty alleviation, water solutions, healthcare, gender-based violence (GBV) prevention, and education, they address these diverse challenges to alleviate suffering. Through impactful initiatives, they empower individuals and keep hope alive, addressing urgent needs and creating lasting change.

**Vision Statement:** To address poverty, inequality, and gender-based violence through strategic initiatives in education, healthcare, and disaster relief. In alignment with the UN Sustainable Development Goals, our commitment is to empower individuals to thrive with dignity and hope. Empower, Uplift, and be a Blessing.

**Target Audience:** Hope SA Foundation serves vulnerable and marginalized communities across South Africa, including low-income families, children, women affected by gender-based violence, disaster victims, and unemployed individuals. The organisation focuses on people facing poverty, food insecurity, limited access to healthcare and education, and those requiring emergency humanitarian assistance. Through its programs, Hope SA aims to improve quality of life, empower communities, and create sustainable opportunities for a better future.

**Primary Target Audience:**
- Low-income and vulnerable families affected by poverty and unemployment.
- Children who lack access to adequate food, education, and necessities.
- Communities affected by disasters, including floods, riots, pandemics, and other humanitarian crises.
- Underserved communities in South Africa and across the African continent that need access to healthcare, clean water, education, and skills development.
- Unemployed individuals and youth who can benefit from skills training and empowerment programs to improve their livelihoods.

**Secondary Target Audience:**
- Individual donors
- Volunteers
- Government agencies and NGOs interested in partnerships or community development initiatives

---

## Website Goals and Objectives

**Goals:**
- Raise awareness of the foundation's mission and community impact.
- Encourage online donations.
- Recruit volunteers and community partners.
- Promote educational programs and upcoming events.
- Share success stories to inspire public support.
- Increase online donations by 15% within the first year.
- Recruit at least 50 new volunteers annually.
- Improve awareness through engaging educational content.
- Make information about programs easily accessible.

**Key Performance Indicators (KPIs):**
- Website traffic
- Number of donations received
- Total donation value
- Volunteer registration forms submitted
- Newsletter subscriptions
- Event registrations
- Social media shares
- Average time spent on the website

---

## Key Features and Functionality

**Essential Pages:**
- Home
- About Us
- Projects
- Initiatives
- Gallery
- Enquiry (Get Involved)
- Donate
- Contact Us

**Functionality:**
- Secure online donation form
- Volunteer registration form
- Event calendar
- Newsletter signup
- Blog/news section
- Success story gallery
- Contact form
- Social media integration
- Responsive design
- Search functionality

---

## Timeline and Milestones

| Week | Milestone |
|------|-----------|
| Week 1 | Project planning, research, and requirements gathering |
| Week 2 | Content planning and information architecture |
| Week 3 | Low-fidelity wireframes and design approval |
| Week 4 | High-fidelity UI design and branding |
| Week 5 | HTML and CSS development |
| Week 6 | JavaScript functionality and responsive implementation |
| Week 7 | Testing, debugging, and accessibility review |
| Week 8 | Final refinements, documentation, and project submission |

---

## Project Structure

```
project-folder/
├── index.html
├── about.html
├── projects.html
├── initiatives.html
├── gallery.html
├── enquiry.html
├── donate.html
├── contact.html
├── robots.txt
├── sitemap.xml
├── README.md
├── css/
│   └── style.css
├── script/
│   └── script.js
└── images/
    └── (six descriptively named JPEG images)
```

**Technologies used:** HTML5, CSS3 (Grid, Flexbox, media queries), JavaScript (vanilla), Leaflet (interactive map), Netlify (hosting and form handling), Git and GitHub (version control).

**Running locally:** open the project folder in VS Code and start it with the Live Server extension. The map needs an internet connection, and the enquiry form only reaches Netlify once the site is deployed (locally it still validates and shows the response, with a note that it could not send).

---

## Part 1 Details
- Planning project
- Researching and content sourcing
- Creating HTML structure
- Organised files

## Part 2 Details
- Reviewed and implemented corrections from Part 1 marker feedback.
- Created and linked an external stylesheet (`css/style.css`) across all site pages.
- Established a base style / CSS reset for consistent rendering across browsers.
- Applied a typography scale using relative (`rem`) units for headings and body text.
- Restructured page layout using CSS Grid (cards, gallery, footer) and Flexbox (header, navigation, forms).
- Applied visual styling including borders, box-shadows, rounded corners, and interactive `:hover`, `:focus`, and `:active` states.
- Implemented responsive design with two breakpoints (tablet at 900px, mobile at 600px) and relative units (`rem`, `%`) for spacing and sizing.
- Added `srcset` and `sizes` attributes to gallery images in preparation for responsive image delivery.
- Tested and iterated on the design across desktop, tablet, and mobile screen sizes using browser developer tools.

## Part 3 Details
- Reviewed the Part 2 marker feedback (positive overall; the improvement requested was a verifiable Git commit history) and made the corrections and fixes listed in the change log.
- Added search engine optimisation (SEO): unique titles, meta descriptions and meta keywords, descriptive image file names and alt text, `robots.txt` and `sitemap.xml`.
- Added JavaScript interactivity: accordion, gallery lightbox, interactive map, dynamic events content, and search and sort.
- Built validated forms on `enquiry.html` and `contact.html` with error messages, AJAX submission and email compilation.
- Deployed the website on Netlify.

### Part 3 features and where to find them

| Feature | Page | How it works |
|---------|------|--------------|
| Accordion (FAQ) | Donate | Buttons use `aria-expanded` and `aria-controls` to show and hide answers. |
| Gallery lightbox | Gallery | Click or press Enter on an image to enlarge it. Esc closes it; left and right arrow keys move between images. |
| Interactive map | Contact | A Leaflet map with OpenStreetMap tiles and a popup for each outreach area (Johannesburg, Pietermaritzburg, Durban). |
| Dynamic content | Home | "Upcoming Events" cards are generated by JavaScript from a data array and sorted by date. Past events are filtered out. The events are samples for demonstration. |
| Search and sort | Initiatives | A search box filters the cards as you type, and a dropdown sorts titles A to Z or Z to A. A message shows when nothing matches. |
| Enquiry form | Get Involved | Validates every field, sends the data with AJAX (`fetch`), then shows a response covering cost, availability and next steps for the enquiry type. |
| Contact form | Contact | Validates every field, then compiles an email to the correct inbox for the message type, which the visitor sends from their email app. |
| Animations | All pages | Hero entrance on the home page, plus fades on the accordion, lightbox and form responses. Motion is switched off for visitors who prefer reduced motion. |

### Form validation rules
- **Name:** required, at least 2 characters, letters, spaces, hyphens and apostrophes only.
- **Email:** required, must be a valid email format.
- **Phone:** optional, but must be a valid South African number (for example 079 387 1716 or +27 79 387 1716). It becomes required when the visitor chooses phone or WhatsApp as their contact method.
- **Dropdowns:** an option must be chosen.
- **Message:** required, 10 to 500 characters, with a live character counter.
- **CV (enquiry form):** optional, but must be a PDF or Word file of 2 MB or less.
- **Consent checkbox (enquiry form):** required.
- Errors appear under each field, the field is marked with `aria-invalid`, and the first invalid field receives focus.

### Testing carried out (Part 3)
- Submitted both forms empty, with invalid values, and with valid values, and checked the error messages and responses.
- Tested the phone number rule with each contact-method option.
- Tested the lightbox with mouse and keyboard (Enter, Esc, arrow keys).
- Tested the accordion with mouse and keyboard.
- Tested the search and sort on the initiatives page, including a search with no results.
- Checked the map markers and popups.
- Checked all pages at desktop, tablet and mobile widths using browser developer tools.
- Checked every page on the live Netlify site for errors.

---

## Change Log

All notable changes made to the Hope SA Foundation website project are documented below.

### Version 1.0 – Initial Website Development
**Date:** 13 August 2026
- Created the initial project structure.
- Created the homepage (`index.html`).
- Created the About Us page (`about.html`).
- Created the Projects page (`projects.html`).
- Created the Initiatives page (`initiatives.html`).
- Created the Gallery page (`gallery.html`).
- Created the Get Involved / Enquiry page (`enquiry.html`).
- Created the Donate page (`donate.html`).
- Created the Contact Us page (`contact.html`).
- Added a consistent navigation menu across all pages.
- Added working internal links between website pages.
- Added semantic HTML elements including `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>`.
- Added researched content about Hope SA Foundation.
- Added contact and donation information.
- Added project and initiative information.
- Added image placeholders and gallery content.
- Added volunteer, sponsorship and partnership enquiry functionality.

### Version 1.1 – Website Design Improvements
**Date:** 14 August 2026
- Improved spacing, headings and content hierarchy.
- Added call-to-action buttons such as "Donate Now" and "Get Involved".
- Improved the homepage hero section.
- Added impact statistics to highlight Hope SA's community work.
- Improved the presentation of projects and initiatives using cards.
- Improved the footer and quick navigation links.

### Version 1.2 – Wireframe Planning
**Date:** 14 August 2026
- Created low-fidelity wireframes for the website, covering the Home, About Us, Projects, Initiatives, Gallery, Get Involved, Donate, and Contact pages.
- Used the wireframes to establish the website's layout, content hierarchy and user flow.

### Version 1.3 – Testing and Refinement
**Date:** 14 August 2026
- Tested navigation links across all pages.
- Tested forms and input fields.
- Checked website responsiveness on different screen sizes.
- Checked images and alternative text.
- Improved accessibility and readability.
- Made final design and content adjustments.

### Version 2.0 – Part 1 Final Submission
**Date:** 14 August 2026
- Completed all required website pages.
- Completed website navigation.
- Finalised website content.
- Finalised responsive design.
- Completed testing and quality checks.
- Prepared the website for final submission.

### Version 2.1 – Feedback Corrections from Part 1
**Date:** 04 September 2026
- Reviewed marker feedback received for Part 1.

### Version 2.2 – External Stylesheet and Base Styling
**Date:** 05 September 2026
- Added css code to the file that was titled style.css which was already in the css folder, and linked it to all eight HTML pages.
- Added a universal CSS reset (`* { margin: 0; padding: 0; box-sizing: border-box; }`) to ensure consistent rendering across browsers.
- Established base styles for font family, base font size, line height, text colour, and background colour.
- Applied a typography scale using `rem` units across `h1`–`h3`, body text, and small text, so text scales consistently and respects user browser font-size preferences.

### Version 2.3 – Layout Structure and Visual Styling
**Date:** 06 September 2026
- Replaced the original float-based layout with **CSS Grid** for card grids, the image gallery, and the footer columns.
- Used **Flexbox** for the site header, navigation, and form layout.
- Added visual styling including `box-shadow`, `border-radius`, and background colours to cards, buttons, and call-to-action sections.
- Added interactive pseudo-class states (`:hover`, `:focus`, `:active`) to navigation links, buttons, cards, and form fields for improved usability and accessibility.

### Version 2.4 – Navigation Menu Improvements
**Date:** 06 September 2026
- Rebuilt the navigation menu markup from an unordered list (`<ul>`/`<li>`) to a `<nav>` containing a `.nav-links` container of direct `<a>` elements, styled with Flexbox.
- Fixed a bug where the `active` navigation state was incorrectly applied to "Home" on every page; each page now correctly highlights its own navigation link.

### Version 2.5 – Responsive Design Implementation
**Date:** 06 September 2026
- Identified key breakpoints for the website: desktop (default), tablet (max-width: 900px), and mobile (max-width: 600px).
- Implemented media queries so that card grids, the gallery, and footer columns shift from 3 columns → 2 columns → 1 column as screen size decreases.
- Used relative units (`rem`, `%`) for spacing, font sizes, and element widths to support responsiveness.
- Added `srcset` and `sizes` attributes to gallery images so the browser can select an appropriately sized image for the viewport.
- Tested the website at desktop, tablet, and mobile widths using browser developer tools and iterated on the design based on results (see Screenshot Evidence below).

### Version 2.6 – Final Part 2 Submission
**Date:** 06 September 2026
- Finalised CSS styling for the desktop solution.
- Finalised responsive design across desktop, tablet and mobile breakpoints.
- Completed testing and quality checks for Part 2.
- Updated README.md with Part 2 changelog and references.
- Committed and pushed all changes to the remote GitHub repository.

### Version 3.0 – Feedback Corrections from Part 2
**Date:** 03 October 2026
- Reviewed the marker feedback for Part 2. It was positive across the external CSS, responsive images, accessibility states, documentation, changelog and references. The one improvement requested was a verifiable Git commit history.
- Addressed this by committing changes in small, logical steps with descriptive commit messages (one commit per feature or fix) and pushing them to the remote GitHub repository.
- Fixed the active navigation state, which was still highlighting "Home" on every page except Gallery. Each page now highlights itself and also uses `aria-current="page"` for screen readers.
- Moved the footer inside `<body>` on `gallery.html` and `initiatives.html` (it sat outside the body, which is invalid HTML).
- Corrected the "Brach code" typo to "Branch code" on `donate.html`.
- Reorganised the README with a project structure section, a Part 3 features table, form validation rules and a testing summary.

### Version 3.1 – Search Engine Optimisation
**Date:** 04 October 2026
- Added a unique, keyword-focused `<title>`, `<meta name="description">` and `<meta name="keywords">` to all 8 pages, with keywords chosen to match each page's content (for example donation terms on the Donate page and campaign names on the Initiatives page).
- Renamed all image files with descriptive, hyphenated names (for example `children.jpg` became `smiling-children-reaching-towards-camera.jpg`) and updated every reference in the HTML and CSS.
- Rewrote the alt text for every gallery image so it describes what is actually shown (several earlier descriptions were inaccurate).
- Converted the images to genuine JPEG files (they were AVIF files saved with a `.jpg` extension) and corrected the `srcset` width descriptors to the real 900px width.
- Created `robots.txt` to allow crawling and point to the sitemap.
- Created `sitemap.xml` listing all pages.
- Confirmed one `<h1>` per page, with `<h2>` and `<h3>` headings used in order.
- Kept internal links in the navigation and footer on every page; the viewport meta tag and responsive CSS keep the site mobile-friendly.

### Version 3.2 – JavaScript Interactivity
**Date:** 05 October 2026
- Created `script/script.js` and linked it on every page with `defer`.
- Added an accessible accordion (FAQ) on `donate.html`.
- Added a gallery lightbox on `gallery.html` with keyboard support (Enter, Esc and arrow keys), focus return and a caption.
- Added an interactive Leaflet map with OpenStreetMap tiles and popups for the three outreach areas on `contact.html`.
- Added dynamic content: upcoming events generated from a data array and sorted by date on `index.html` (past events are filtered out).
- Added search and sort (A to Z, Z to A) for the initiative cards on `initiatives.html`, using DOM manipulation, with a "no results" message.
- Added CSS animations and transitions: hero entrance, accordion, lightbox fade and form responses, with `prefers-reduced-motion` respected.

### Version 3.3 – Form Functionality and Validation
**Date:** 06 October 2026
- `enquiry.html`: added JavaScript validation (name, email, South African phone format, required selection, message length 10 to 500, CV file type and 2 MB size limit) with inline error messages, `aria-invalid` and a live character counter.
- `enquiry.html`: on valid input the form is submitted with AJAX (`fetch` and `FormData`, using Netlify Forms) and the visitor sees a tailored response covering cost, availability and next steps for their enquiry type.
- `contact.html`: added the same validation and a "type of message" field. Once valid, the message is compiled into an email (recipient chosen by message type) that the visitor can send through their email app.
- Added more form controls: preferred contact method radio buttons and a required consent checkbox (plus an optional updates checkbox) on the enquiry form; a reply-method radio group and a "send me a copy" checkbox on the contact form.
- Added dependent validation: choosing phone or WhatsApp (enquiry) or a phone reply (contact) makes the phone number required.
- When "send me a copy" is ticked, the visitor's email address is added as a CC on the compiled email.
- Set the `action` attribute on both forms and added `novalidate` so JavaScript controls the error messages.

### Version 3.4 – Deployment and Final Submission
**Date:** 07 October 2026
- Deployed the website to Netlify and updated `sitemap.xml` and `robots.txt` with the live URL.
- Tested all pages and features on the live site.
- Updated README.md with Part 3 information, changelog and references.
- Committed and pushed all changes to the remote GitHub repository.

---

## References

Help A Child South Africa, 2025. *Help A Child South Africa*. [online] Available at: https://helpachild.org.za/ [Accessed 06 August 2026].

Hope SA Foundation, 2026. *Hope SA Foundation*. [online] Available at: https://hopesa.org/ [Accessed 06 August 2026].

Smile Foundation, 2025. *Smile Foundation*. [online] Available at: https://smilefoundationsa.org/ [Accessed 06 August 2026].

MDN Web Docs, 2026. *CSS Grid Layout*. Mozilla. [online] Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout [Accessed 05 September 2026].

MDN Web Docs, 2026. *CSS Flexible Box Layout*. Mozilla. [online] Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout [Accessed 05 September 2026].

MDN Web Docs, 2026. *Responsive images*. Mozilla. [online] Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images [Accessed 05 September 2026].

MDN Web Docs, 2026. *Using media queries*. Mozilla. [online] Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries [Accessed 05 September 2026].

Leaflet, 2023. *Leaflet: an open-source JavaScript library for interactive maps*. [online] Available at: https://leafletjs.com/ [Accessed 08 October 2026].

OpenStreetMap contributors, 2026. *OpenStreetMap copyright and license*. [online] Available at: https://www.openstreetmap.org/copyright [Accessed 08 October 2026].

MDN Web Docs, 2026. *Using the Fetch API*. Mozilla. [online] Available at: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch [Accessed 08 October 2026].

MDN Web Docs, 2026. *Client-side form validation*. Mozilla. [online] Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation [Accessed 08 October 2026].

MDN Web Docs, 2026. *ARIA: aria-expanded attribute*. Mozilla. [online] Available at: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded [Accessed 08 October 2026].

Netlify, 2026. *Netlify Forms setup*. [online] Available at: https://docs.netlify.com/manage/forms/setup/ [Accessed 08 October 2026].

Google, 2026. *Search Engine Optimization (SEO) Starter Guide*. [online] Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide [Accessed 08 October 2026].
