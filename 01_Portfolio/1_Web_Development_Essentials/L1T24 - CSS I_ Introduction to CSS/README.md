# Leo Fender Tribute Page (HTML & CSS Structure)

This project is a static web page dedicated to Leo Fender, built using modern HTML5 for semantic structure and designed to be styled with an external CSS file (`myStyles.css`). It showcases a well-organized layout with a header, navigation, main content featuring articles, an image gallery, and a footer, demonstrating best practices for web content presentation and separation of concerns.

## 🌟 Features

* **Semantic HTML5 Structure:** Utilizes a wide range of semantic tags to provide meaningful structure to the content:
    * `<header>`: For the page title and main navigation.
    * `<nav>`: Specifically for navigation links.
    * `<main>`: Encapsulates the primary content unique to this page.
    * `<article>`: Used for self-contained pieces of content (e.g., the banner image, facts list, and each guitar feature).
    * `<figure>` and `<figcaption>`: To associate images with their captions semantically.
    * `<aside>`: For content that is tangentially related to the surrounding content.
    * `<footer>`: For copyright and other bottom-of-page information.
    * `<h1>`, `<h2>`, `<h3>`: For structuring content hierarchy.
    * `<ul>`, `<li>`: For unordered lists.
    * `<hr>`: For thematic breaks.
* **External CSS Styling:** Links to an external stylesheet (`myStyles.css`) to manage visual presentation, ensuring a clear separation between content (HTML) and style (CSS).
* **Internal Navigation:** Implements smooth in-page navigation using anchor links (`<a>` tags with `href` attributes pointing to `id` selectors on different sections).
* **Image Integration:** Embeds images with descriptive `alt` text for accessibility and uses relative paths for image sources, promoting portable project structure.
* **Clear Content Organization:** Information is logically segmented using headings, paragraphs, and lists for enhanced readability.
* **Accessibility Focus:** Emphasis on `alt` attributes for images and the use of semantic HTML contribute to better accessibility for screen readers and other assistive technologies.
* **Viewport Meta Tag:** Includes `<meta name="viewport" ...>` for responsive behavior, allowing the page to adapt to different screen sizes, which is crucial for modern web development.

## 🚀 How to Run the Project

This project consists of an HTML file and an external CSS file. To view it correctly, ensure both files are in the proper relative locations.

1.  **Clone or Download:** Obtain the project files by cloning this repository or downloading it as a ZIP file.
    ```bash
    git clone [Your Repository URL Here]
    cd leo-fender-tribute # Or whatever your project folder is named
    ```
2.  **Verify File Structure:** Ensure that the `myStyles.css` file is in the same directory as the `index.html` (or your main HTML file), and that your images (e.g., `LeoFender.png`, `RedFenderLeft.jpg`) are located in an `Images` subdirectory relative to your HTML file.
3.  **Open in Browser:** Locate the `index.html` file (or your main HTML file) in the project directory.
    * Simply drag and drop the HTML file into an open tab of your web browser (e.g., Google Chrome, Firefox, Edge).
    * Alternatively, you can double-click the HTML file, and it will typically open in your default web browser.
4.  **Explore the Page:** Navigate through the different sections using the top menu and observe the content and styling.

## 💡 Note on `main` vs. `section`

The question in your HTML comment regarding the use of `main` versus `section` is a great one!

* The `<main>` element is specifically for the **dominant content** of the `<body>`. There should only be one `<main>` element per document, and it should contain content unique to that document. Your use of `<main>` to wrap the primary information about Leo Fender and the guitars is semantically correct.
* The `<section>` element is a generic standalone section of a document, which doesn't have a more specific semantic element to represent it. It is typically used for grouping related content, and it's recommended that `section` elements have a heading. You could, for instance, have used a `<section>` within your `<article>` elements if there were sub-groups of content within them that weren't self-contained enough to be their own `article`.

Your current usage of `main` to encapsulate all the `article` elements is appropriate and follows best practices.