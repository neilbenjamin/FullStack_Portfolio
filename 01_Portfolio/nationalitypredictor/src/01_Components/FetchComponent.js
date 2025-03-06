import { useState, useRef, useEffect } from "react";

//Set component
function FetchComponent() {
  //Set username State
  const [username, setUsername] = useState("");
  // Set Api State
  const [apiResult, setApiResult] = useState("");
  //Assign useRef
  const inputRef = useRef();

  //Fetch async function courtesy of Hyerion notes and OpenAI
  //for assistance in calling the correct objects within the main object.

  async function getApiInfo() {
    const apiUrl = `https://api.nationalize.io?name=${username}`;

    try {
      const response = await fetch(apiUrl);
      const result = await response.json();
      //Update api State variable and call first element in the country object.
      setApiResult(result.country[0]);
    } catch (error) {
      console.error(error);
    }
  }
  //onClick function calling api state
  const handleSubmit = () => {
    getApiInfo();
  };

  //useEffect on reload, autofocos on the input field.
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  //JSX
  return (
    <div>
      <input
        //Assigned to useRef hook.
        ref={inputRef}
        //Assigned to username hook.
        value={username}
        //Built in event handler onChange updatign the State of the username variable.
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      {/* Call the Fetch function */}
      <button onClick={handleSubmit}>SUBMIT</button>
      <div>
        {/* Display API. Display assistance courtesy of Open AI*/}
        {apiResult.country_id && (
          <>
            <p>Country ID: {apiResult.country_id}</p>
            <p>Probability: {apiResult.probability}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default FetchComponent;
