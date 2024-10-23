import "./App.css";
import { useState } from "react";

function App() {
  const [greetingInputText, setgreetingInputText] = useState("");
  const [greetingText, setGreetingText] = useState("Greeting Message");

  const updateGreetingInputText = (event) => {
    setgreetingInputText(event.target.value);
  };
  const updateGreetingText = () => {
    setGreetingText(greetingInputText);
  };

  return (
    <>
    <div className="App">
      <div className="greeting-container">{" "}{greetingText}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" type="text" value={greetingInputText} onChange={updateGreetingInputText} />
      </div>

      <div className="buttons">
        <button onClick={updateGreetingText}>Update text</button>
      </div>
    </div>
    </>
  );
}

export default App;
