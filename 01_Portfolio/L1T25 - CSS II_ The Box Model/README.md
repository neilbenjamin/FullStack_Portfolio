# Leo Fender Tribute Page (HTML with Box Model Focus)

This project is an enhanced static web page dedicated to Leo Fender, built with semantic HTML5 and explicitly designed to be styled using an external CSS file (`myStyles.css`). The HTML structure includes various elements with specific `id`s and `class`es, creating ideal targets for applying CSS properties related to the **CSS Box Model** (content, padding, border, margin). The page features a well-organized layout with a header, navigation, main content with articles, an image gallery, and a footer, providing a solid foundation for visual presentation.

## 🌟 Features

* **Semantic HTML5 Structure:** Continues to utilize a wide range of semantic tags for meaningful content organization, including `<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<div>`, `<figure>`, `<figcaption>`, `<footer>`, and various heading levels.
* **CSS Hooking:** Extensive use of `id` and `class` attributes on elements (`figCaptionStyling`, `highlight`, `mainDiv`, `mainP`, `springGreen`, etc.) to provide precise targets for CSS rules, which is crucial for demonstrating box model concepts.
* **Box Model Demonstration Ready:** The addition of a new `div` (`id="mainDiv"`) wrapping paragraphs and `aside` elements, along with specific IDs and classes on other text elements, sets up an excellent environment for applying and visualizing `padding`, `border`, and `margin` via CSS.
* **External CSS Styling:** Links to an external stylesheet (`myStyles.css`), promoting the separation of concerns between content and presentation.
* **Internal Navigation:** Implements smooth in-page navigation using anchor links, allowing users to jump to different sections of the page.
* **Image Integration:** Embeds images with descriptive `alt` text for accessibility and uses relative paths for image sources.
* **Clear Content Organization:** Information is logically segmented using headings, paragraphs, and lists for enhanced readability.
* **Accessibility Focus:** Emphasis on `alt` attributes for images and the use of semantic HTML contribute to better accessibility.
* **Viewport Meta Tag:** Includes `<meta name="viewport" ...>` for responsive design, allowing the page to adapt to various screen sizes.

## 🚀 How to Run the Project

This project consists of an HTML file and an external CSS file. To view it correctly, ensure both files are in the proper relative locations.

1.  **Clone or Download:** Obtain the project files by cloning this repository or downloading it as a ZIP file.
    ```bash
    git clone [Your Repository URL Here]
    cd leo-fender-box-model-tribute # Or whatever your project folder is named
    ```
2.  **Verify File Structure:** Ensure that the `myStyles.css` file is in the same directory as your main HTML file, and that your images (e.g., `LeoFender.png`, `RedFenderLeft.jpg`, `BlueTeleMiddle.jpg`, `PBassRight.jpg`) are located in an `Images` subdirectory relative to your HTML file.
3.  **Open in Browser:** Locate your main HTML file in the project directory.
    * Simply drag and drop the HTML file into an open tab of your web browser (e.g., Google Chrome, Firefox, Edge).
    * Alternatively, you can double-click the HTML file, and it will typically open in your default web browser.
4.  **Explore the Page:** Navigate through the different sections using the top menu and observe how the CSS (from `myStyles.css`) applies styling, particularly how elements interact within the box model.