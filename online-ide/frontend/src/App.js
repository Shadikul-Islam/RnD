import React, { useState } from "react";
import { ControlledEditor } from "@monaco-editor/react";
import axios from "axios";
import "./App.css";

function App() {
  const [code, setCode] = useState("// Write your code here...");
  const [language, setLanguage] = useState("c");
  const [output, setOutput] = useState("");

  const handleEditorChange = (ev, value) => {
    setCode(value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleRunClick = async () => {
    try {
      const response = await axios.post("http://localhost:3000/compile", {
        code,
        language,
      });
      setOutput(response.data.output);
    } catch (error) {
      setOutput("Error: Unable to compile and execute the code");
    }
  };

  return (
    <div className="App">
      <h1>Online IDE</h1>
      <div className="editor-container">
        <ControlledEditor
          height="50vh"
          language={language}
          value={code}
          onChange={handleEditorChange}
        />
      </div>
      <div className="controls">
        <select value={language} onChange={handleLanguageChange}>
          <option value="c">C</option>
          <option value="java">Java</option>
          <option value="python">Python</option>
        </select>
        <button onClick={handleRunClick}>Run</button>
      </div>
      <div className="output">
        <h2>Output:</h2>
        <pre>{output}</pre>
      </div>
    </div>
  );
}

export default App;

