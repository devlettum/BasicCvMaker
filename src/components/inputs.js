import React, {Component} from 'react';
import {Button, Input, InputGroup, InputGroupText} from "reactstrap";

class Inputs extends Component {
    render() {
        return (
            <div style={{marginTop:70,marginLeft:30,marginRight:30}}>

                <InputGroup style={input__group}>
                    <InputGroupText>
                        Name
                    </InputGroupText>
                    <Input />
                </InputGroup>
                <InputGroup style={input__group}>
                    <InputGroupText>
                        Surname
                    </InputGroupText>
                    <Input />
                </InputGroup>
                <InputGroup style={input__group}>
                    <InputGroupText>
                        Birthday
                    </InputGroupText>
                    <Input
                        id="exampleDatetime"
                        name="datetime"
                        placeholder="datetime placeholder"
                        type="date"
                    />
                </InputGroup>
                <InputGroup style={input__group}>
                    <InputGroupText>
                        Email
                    </InputGroupText>
                    <Input />
                </InputGroup>
                <InputGroup style={input__group}>
                    <InputGroupText>
                        Phone Number
                    </InputGroupText>
                    <Input />
                </InputGroup>
                <InputGroup style={input__group}>
                    <InputGroupText>
                        The last school you graduated from or are studying at?
                    </InputGroupText>
                    <Input />
                </InputGroup>
                <InputGroup style={input__group}>
                    <InputGroupText>
                        Work Experience
                    </InputGroupText>
                    <Input type="textarea" />
                </InputGroup>
                <InputGroup style={input__group}>
                    <InputGroupText>
                        Linkedin
                    </InputGroupText>
                    <Input />
                </InputGroup>
                <Button
                    block
                    color="success"
                    outline

                >
                    Complete
                </Button>

            </div>
        );
    }
}

export default Inputs;
const input__group = {
    padding : 5,
    borderRadius : 10
}
