import React, { Component } from 'react';


let Profile = props => {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.name} is {props.age} years old and enjoys:</p>
            <h3>Hobbies</h3>
                <ul>
                  {props.hobbies.map(hobby => <li>{hobby}</li>)}
                </ul>
        </div>
    ); 
}

export default Profile
