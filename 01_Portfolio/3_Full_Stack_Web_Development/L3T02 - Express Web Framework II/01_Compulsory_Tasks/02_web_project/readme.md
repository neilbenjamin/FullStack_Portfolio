## Instructions for using the Postman App to check API endpoints.

1.  Navigate to project root directory, open terminal and type `"npm install"` to install dependencies.
2.  In the terminal type `"npm start"` to start the server. The responding message will direct you to the port you need to use.
3.  In the browser, type `http://localhost:8080/api` to view the first task requirement.
4.  For **POST**, open Postman, create a new workspace and in the work space, select **POST** and add this URL data to the form adjacent `http://localhost:8080/api/`. Then underneath the form field input, click on the **4th tab labelled "Body"**, and then look out for the **4th tab labelled RAW** underneath, select **RAW** and then add the following data object:
    ```json
    {
            "id": 3,
            "title": "This is a new section",
            "description": "We're not sure what to add here yet",
            "URL": "https://google.com"
        }
    ```
    Then on the right, on the text dropdown selector, select the **JSON** option, and when that is done, click **Send**. This will then add the new object.

5.  For **PUT**, follow the same instructions as above but selected **PUT** and in the adjacent form, specify the end point with `http://localhost:8080/api/2`. Then in the body, add:
    ```json
    {
            "title": "This is a new'ish section"
        }
    ```
    Make sure **JSON** is selected and push **Send**. This will then update the `id 2`'s title. You can view the changes in the `api.json` file as they update, which is pretty cool to see. This can be done for the `"description"` and `"URL"` values too.

6.  For **DELETE**, select **DELETE** and in the form field add `http://localhost:8080/api/3` and this will delete the last object in the array.