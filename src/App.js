import "./App.css";
import Header from "./components/header";
import Inputs from "./components/inputs";
import { useState } from "react";
import Output from "./components/output";

function App() {
  
  const inputInfos = {
    name: "",
    surname: "",
    birthday: "",
    email: "",
    phone: "",
    job: "",
    describe: "",
    graduated: "",
    experience: "",
    linkedin: "",
  
  };
  
  const [states,setStates]=useState(inputInfos);

  const getInputs = (inputs) =>{
    setStates(inputs);
    
  };


  return (
    <div className="container">
      <Header />
      <Inputs control={inputInfos.control} getInputFunction={getInputs} />
      <Output control={inputInfos.control} InputInfos={{...states}} />
    </div>
  );
}

export default App;

