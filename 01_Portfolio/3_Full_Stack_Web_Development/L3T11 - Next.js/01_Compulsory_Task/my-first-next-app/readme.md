## Next.js Application Example

This code example illustrates the basics of creating an application using Next.js.

In this example you will see:

1.  How file-based routing works. To observe this, notice how the links to the files in `/pages` are linked to in `/components/Header`. Also, check out all the files in `/pages`. Navigate to `http://localhost:3000/test_routing` to see it in action.
2.  How easy it is to access static resources like images. See this demonstrated in `/pages/index.js`.
3.  How to use Next.js' **Link API** (refer to `/components/Header`).
4.  How to use a shared 'Layout' component to apply styles across pages. This includes adding a link to **React-Bootstrap** so that React-Bootstrap components can be used across pages. (See `/components/MyLayout` and `/pages/index.js`).

### How to Run this Code:

1.  Extract this folder (`my-first-next-app`) into your Downloads folder.
2.  Change directory to the project folder:
    ```bash
    cd my-first-next-app
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Start the development server:
    ```bash
    npm run dev
    ```
5.  Access the application in your browser: `http://localhost:3000/` and `http://localhost:3000/test_routing`.