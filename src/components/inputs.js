import { useState } from "react";
import { Button, Input, InputGroup, InputGroupText } from "reactstrap";

  const Inputs = (props) => {

    const inputInfos = {
        name: "",
        surname: "",
        birthday: "",
        email: "",
        phone: "",
        job: "",
        describe: "",
        graduated: "",
        experience:"",
        linkedin: "",
        
      };

    const [states,setStates]=useState(inputInfos);

     


    return (
      <div style={{ marginTop: 70, marginLeft: 30, marginRight: 30 }}>
        <InputGroup style={input__group}>
          <InputGroupText>Name</InputGroupText>
          <Input onChange={(event)=>{
              let tempStates = {...states,name: event.target.value}
              setStates(tempStates);
               
          }} />
        </InputGroup>
        <InputGroup style={input__group}>
          <InputGroupText>Surname</InputGroupText>
          <Input onChange={(event)=>{
              let tempStates = {...states,surname: event.target.value}
              setStates(tempStates);
             
          }} />
        </InputGroup>
        <InputGroup style={input__group}>
          <InputGroupText>Birthday</InputGroupText>
          <Input
            id="exampleDatetime"
            name="datetime"
            placeholder="datetime placeholder"
            type="date"
            onChange={(event)=>{
                let tempStates = {...states,birthday: event.target.value}
                setStates(tempStates);
                
            }}
          />
        </InputGroup>
        <InputGroup style={input__group}>
          <InputGroupText>Email</InputGroupText>
          <Input onChange={(event)=>{
              let tempStates = {...states,email: event.target.value}
              setStates(tempStates);
              
          }}/>
        </InputGroup>
        <InputGroup style={input__group}>
          <InputGroupText>Phone Number</InputGroupText>
          <Input onChange={(event)=>{
              let tempStates = {...states,phone: event.target.value}
              setStates(tempStates);
          }} />
        </InputGroup>
        <InputGroup style={input__group}>
          <InputGroupText>Job</InputGroupText>
          <Input onChange={(event)=>{
              let tempStates = {...states,job: event.target.value}
              setStates(tempStates);
          }}/>
        </InputGroup>
        <InputGroup style={input__group}>
          <InputGroupText>Describe yourself briefly</InputGroupText>
          <Input type="textarea" onChange={(event)=>{
              let tempStates = {...states,describe: event.target.value}
              setStates(tempStates);
          }} />
        </InputGroup>
        <InputGroup style={input__group}>
          <InputGroupText>
            The last school you graduated from or are studying at?
          </InputGroupText>
          <Input onChange={(event)=>{
              let tempStates = {...states,graduated: event.target.value}
              setStates(tempStates);
          }} />
        </InputGroup>
        <InputGroup style={input__group}>
          <InputGroupText>Work Experience</InputGroupText>
          <Input type="textarea"onChange={(event)=>{
              let tempStates = {...states,experience: event.target.value}
              setStates(tempStates);
          }}/>
        </InputGroup>
        <InputGroup style={input__group}>
          <InputGroupText>Linkedin</InputGroupText>
          <Input onChange={(event)=>{
              let tempStates = {...states,linkedin: event.target.value}
              setStates(tempStates);
          }} />
        </InputGroup>

        <Button
         
          onClick={()=>{
              props.getInputFunction(states);
          }}
          block
          color="success"
          outline
        >
          Complete
        </Button>
      </div>
    );
  }

export default Inputs;
const input__group = {
  padding: 5,
  borderRadius: 10,
};
