# Semantic HTML Web Page (Guitar World)

This project is a static web page built using **Semantic HTML5** elements. It aims to demonstrate how to structure web content meaningfully, improving both readability for developers and accessibility for users (including search engines and screen readers). The page explores "The World of Guitars" with sections on Fender, the Stratocaster, and contact information.

## 🌟 Features

* **Semantic Structure:** Extensive use of HTML5 semantic tags, including:
    * `<header>`: For introductory content and navigation.
    * `<nav>`: For primary navigation links.
    * `<main>`: For the dominant content of the `<body>`.
    * `<article>`: For independent, self-contained content (e.g., "About Fender", "The Stratocaster", "Contact Us").
    * `<aside>`: For content that is tangentially related to the content around it (e.g., a note about the Precision Bass).
    * `<details>` and `<summary>`: For creating interactive, collapsible content sections.
    * `<figure>` and `<figcaption>`: For embedding media (like images) with a descriptive caption.
    * `<section>`: For generic standalone sections of content that don't fit other semantic elements.
    * `<footer>`: For copyright information and other common footer content.
* **Content Hierarchy:** Uses `<h1>`, `<h2>`, `<h3>`, and `<h4>` to establish a clear and logical document outline.
* **Internal Navigation:** Implements `<a>` tags with `href` attributes linking to `id`s on different sections of the same page, allowing for smooth internal navigation.
* **External Links & Citations:** Demonstrates an external link with `target="_blank"` and semantic use of `<cite>` for quoting a source.
* **Basic Text Formatting:** Includes `<b>` for bold text.
* **Ordered Lists:** Uses `<ol>` and `<li>` to present contact numbers in a numbered list.
* **Accessibility & SEO Best Practices:** The use of semantic tags inherently contributes to better accessibility and search engine optimization by providing context to browsers and assistive technologies.

## 🚀 How to Run the Project

This project is a static HTML file and can be opened directly in any modern web browser.

1.  **Clone or Download:** Obtain the project files by cloning this repository or downloading it as a ZIP file.
    ```bash
    git clone [Your Repository URL Here]
    cd semantic-html-guitars # Or whatever your project folder is named
    ```
2.  **Ensure Image Availability:** Note that the image `guitar.jpg` is referenced using an **absolute local file path** (e.g., `/Users/neilbenjamin/.../guitar.jpg`). For the image to display correctly, you will need to:
    * Place a `guitar.jpg` image in the same directory as the