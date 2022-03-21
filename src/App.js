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
    console.log(inputs);

  };


  return (
    <div className="container">
      <Header />
      <Inputs getInputFunction={getInputs} />
      <Output InputInfos={{...states}} />
    </div>
  );
}

export default App;

