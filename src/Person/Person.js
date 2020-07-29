import React from "react";

const person = (props) => {
return (
    <div>
        <p> i am a person {props.name}</p>
        <p> i am a person {props.children}</p>
    </div>
)
};
export default person;