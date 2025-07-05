# Capstone Project: DigitalBlend Website

This project is a comprehensive, multi-page front-end website designed to showcase various web development functionalities. It features user authentication (registration/login/logout), content saving, user feedback mechanisms, and interactive elements, all built with HTML, CSS, and JavaScript, leveraging client-side data persistence with `localStorage`.

## 🌟 Features

### User Management
* **User Registration:** Allows new users to register with a username and email via a modal pop-up.
* **Persistent Login:** Keeps users "logged in" across different pages and browser sessions using `localStorage`.
* **Personalized Welcome:** Displays a welcome message with the logged-in user's name.
* **Logout Functionality:** Clears user login data from `localStorage`, effectively logging the user out.

### Content & Interaction
* **"Save For Later" Feature:** Users can save specific images (from the homepage) and external links (from the gallery page, inferred) to a "Saved Items" section.
* **Saved Items Display:** A dedicated "Saved" page dynamically lists all items saved by the user during their session.
* **Saved Item Count Pop-up:** Provides an alert indicating the total number of items saved for later.
* **Interactive "Likes":** Heart icons on various content modules can be "liked" (turned red) by clicking, and their state persists across sessions.
* **User Comments:** A dedicated form allows users to submit comments (name, surname, email, message), which are then displayed dynamically on the page.

### Forms & Data Handling
* **Contact Form:** Collects detailed user contact information (name, surname, contact number, email, gender, message).
    * **Note:** This data is stored locally in `localStorage` and logged to the console, but is *not* sent to a server. A "Thank you" message replaces the form upon submission.
* **Client-Side Persistence:** Extensively uses `localStorage` to store user registration details, saved items, user comments, and "liked" states, ensuring data persists even after closing and reopening the browser.

### Design & Structure
* **Multi-Page Navigation:** Includes a responsive navigation bar linking to Home, About, Gallery, Saved, and Contact pages.
* **Responsive Design:** Utilizes Bootstrap 5 for a mobile-first, responsive layout and styling of elements like navigation, buttons, and form components.
* **Dynamic Content:** Content is dynamically loaded and updated based on user interactions and stored `localStorage` data.
* **Parallax Effect:** Features a background image with a parallax scrolling effect on the homepage banner.
* **External Assets:** Integrates Google Fonts for custom typography and Font Awesome for icons.

## 📁 Project Structure

The project is structured as a multi-page website, with content distributed across several HTML files and centralized JavaScript logic.

* `index.html`: The main homepage of the website, featuring the hero banner, content modules, testimonials, SEO advertisement, newsletter sign-up, and integration of user registration/login elements.
* `about.html`: (Implied) - Likely contains information about the "DigitalBlend" company/service.
* `gallery.html`: (Implied) - Expected to contain a collection of images or links that users can "save for later."
* `savedItems.html`: (Implied) - The page where users can view the images and links they have saved.
* `contact.html`: (Implied) - Contains the user comment and contact forms.
* `digitalScript.js`: The primary JavaScript file containing all the client-side logic for user authentication, saving content, comments, contact forms, and interactive elements.
* `stylesheet.css`: (Implied) - The custom CSS file for specific styling and overrides beyond Bootstrap.
* `_media/`: (Implied) - A folder containing images and other media assets used throughout the website.

## 🚀 How to Run the Project

This is a static, front-end web application. To run it, simply open the `index.html` file in your web browser.

1.  **Ensure Project Files and Structure are Present:**
    Make sure you have all the HTML files (`index.html`, `about.html`, `gallery.html`, `savedItems.html`, `contact.html`), `digitalScript.js`, `stylesheet.css`, and the `_media` folder (with its contents) correctly organized in your project directory. All HTML files should link to `digitalScript.js` and `stylesheet.css`.

2.  **Open in Browser:**
    Navigate to the root directory of your project. Double-click `index.html` or drag-and-drop it into an open web browser tab (e.g., Google Chrome, Firefox, Edge).

3.  **Explore Functionality:**
    * **Registration/Login:** Click the "REGISTER" button to open the registration form. Fill it out and submit. Refresh the page or navigate to other pages to see the persistent login. Click "Log Out" to clear your session.
    * **Save For Later:** On the homepage, hover over and click images (like "Laptop on desk") to save them. Navigate to the "Saved" page to view your saved items.
    * **Likes:** Click the heart icon below images to toggle their "liked" state.
    * **Comments:** Navigate to the "Contact" page (if implemented) and use the comment form. Your comments will appear below.
    * **Contact Form:** On the "Contact" page, fill out the contact form. Check your browser's console (`F12` > `Console` tab) to see the submitted contact data.

## 💡 Notes & Potential Improvements

* **`localStorage.clear()` on Logout:** The current logout function clears *all* `localStorage` data for the domain. This means saved items and comments will also be cleared upon logout. For a more robust application, consider clearing only user-specific login data while retaining other preferences or data.
* **ID and Class Best Practices:** Some HTML elements use the same `id` multiple times (e.g., `id="registration-popup"`, `id="image-hover"`). While modern browsers are often forgiving, `id` attributes should ideally be unique for valid HTML and more predictable JavaScript targeting. Using classes for repeated elements is preferred.
* **Contact Form Data Handling:** The contact form data is currently only stored in `localStorage` and logged to the console. For a real-world application, this data would typically be sent to a server-side endpoint for processing (e.g., via `fetch` API to an email service or database).
* **Newsletter Signup:** The JavaScript does not appear to implement functionality for the "Sign up to our newsletter" form. This would require integration with a mailing list service.
* **Missing Pages:** While the navigation links suggest `about.html`, `gallery.html`, `savedItems.html`, and `contact.html`, only `index.html` was provided in the code. Users would need to create these additional HTML files to have a fully navigable website.