//Solution courtesy of https://jestjs.io/docs/asynchronous#promises, OpenAI, https://www.freecodecamp.org/news/how-to-write-unit-tests-in-react-redux/ and Hyperion Dev.

//Import dependencies from react
import React from "react";
//testing dependencies
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
//Fetch component
import FetchComponent from "./FetchComponent";

test("fetch data successfully", async () => {
  // Creating a jest mock fetch function that replaces the real fetch function.
  // That will enact a real fetch function by returning the json country array with an object
  // when invoked. This simulates the real fetch function when called.
  global.fetch = jest.fn().mockResolvedValue({
    json: async () => ({
      country: [
        {
          country_id: "US",
          probability: 0.9,
        },
      ],
    }),
  });

  // Render the component
  render(<FetchComponent />);

  // Simulate user input and click the submit button
  const input = screen.getByRole("textbox");
  const submitButton = screen.getByText("SUBMIT");
  //react DOM methods to handle the field change and button click simulation.
  fireEvent.change(input, { target: { value: "Neil" } });
  fireEvent.click(submitButton);

  // Wait for the async operation to complete
  await waitFor(() => {
    // Assert that the 'Country ID' text is in the document
    expect(screen.getByText("Country ID: US")).toBeInTheDocument();
  });

  await waitFor(() => {
    // Assert that the 'Probability' text is in the document
    expect(screen.getByText("Probability: 0.9")).toBeInTheDocument();
  });
});
