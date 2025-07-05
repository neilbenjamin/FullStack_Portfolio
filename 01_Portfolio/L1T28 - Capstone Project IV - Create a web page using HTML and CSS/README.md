# DigitalBlend - Capstone Website

This project represents a modern and responsive "Capstone Website" for "DigitalBlend," a company blending life with technology. Built with a strong emphasis on contemporary web development practices, this website leverages popular frameworks and libraries to deliver an engaging user experience across all devices. It serves as a comprehensive demonstration of front-end development skills, integrating responsive design, interactive components, and appealing aesthetics.

## 🌟 Features

* **Responsive Web Design (RWD):**
    * Fully optimized for all devices, from mobile phones to large desktop monitors, using **Bootstrap 5**'s powerful grid system (`container`, `row`, `col-*-*`) and responsive utility classes (`d-flex`, `justify-content-center`, `align-items-center`).
    * The `viewport` meta tag ensures proper scaling and rendering on different screen sizes.
* **Modern UI/UX with Bootstrap 5:**
    * **Navbar:** A sleek, responsive navigation bar that collapses into a toggler menu on smaller screens, ensuring intuitive navigation (`navbar`, `navbar-expand-sm`, `navbar-toggler`).
    * **Hero Banner:** An engaging hero section featuring a background (likely with a parallax effect implemented via `parallax-background` in CSS) and a prominent company logo.
    * **Content Modules:** Structured content areas using Bootstrap's grid for showcasing services (Custom Design, Fully Responsive, Online Store solutions) with images and descriptive text.
    * **Testimonials:** Integrated testimonial sections (`card`, `blockquote`, `img-fluid`) to build credibility, including star ratings.
    * **Promotional Sections:** Dynamic advertising blocks like the SEO feature, using Bootstrap's card overlays (`card text-bg-dark`, `card-img-overlay`).
    * **Newsletter Sign-Up:** A well-designed form (`form-label`, `form-control`, `btn`) for newsletter subscriptions, featuring a visually appealing layout with an image.
* **Enhanced Typography & Iconography:**
    * **Google Fonts:** Utilizes custom fonts like "Roboto" and "Orbitron" from Google Fonts to enhance brand identity and readability.
    * **Font Awesome 6:** Incorporates Font Awesome icons for social media links, contact information, and other decorative elements, providing a professional and consistent visual language.
* **Clean Code & Maintainability:**
    * **Semantic HTML5:** Employs meaningful HTML5 elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`) for better document structure, accessibility, and SEO.
    * **External Styling:** Separates HTML content from styling using an external `stylesheet.css` file, alongside Bootstrap's pre-defined classes.
    * **CDN Integration:** Links to Bootstrap and Font Awesome via CDNs for efficient loading and ease of setup.
* **Interactive Elements:**
    * Bootstrap's JavaScript bundle (`bootstrap.bundle.min.js`) enables interactive components like the responsive navbar toggler.
* **Multi-Page Structure (Implied):** The navigation links (`about.html`, `gallery.html`, `contact.html`) indicate that this project is part of a multi-page website, designed for comprehensive business presentation.

## 🚀 How to Run the Project

This project requires an internet connection to load external resources (Bootstrap, Font Awesome, Google Fonts from CDNs) and should be viewed in a web browser.

1.  **Clone or Download:** Obtain the project files by cloning this repository or downloading it as a ZIP file.
    ```bash
    git clone [Your Repository URL Here]
    cd digitalblend-capstone-website # Or whatever your project folder is named
    ```
2.  **Verify File Structure:** Ensure the following:
    * `index.html` (the provided file) is in the root directory.
    * `stylesheet.css` is in the same directory as `index.html`.
    * All image assets (e.g., `DigitalBlendLogo.png`, `laptop-code-plant.jpg`, `sign-up.webp`, `stars_small.webp`) are located within an `_media` subdirectory relative to `index.html`.
    * (Optional, but recommended for full site functionality) `about.html`, `gallery.html`, and `contact.html` files exist if you intend to navigate beyond the home page.
3.  **Open in Browser:** Locate the `index.html` file in your project directory.
    * Simply drag and drop the `index.html` file into an open tab of your web browser (e.g., Google Chrome, Firefox, Edge).
    * Alternatively, you can double-click the `index.html` file, and it will typically open in your default web browser.
4.  **Explore the Website:** Interact with the navigation, observe the responsive layout by resizing your browser window, and explore the different content sections of the DigitalBlend home page.