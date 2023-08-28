import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#1b1f22';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="TextAlchemy" mode={mode} toggleMode={toggleMode}/>
      <TextForm heading="Enter the text to analyze below" mode={mode}/>
    </>
  );
}

export default App;
