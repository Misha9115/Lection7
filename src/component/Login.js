import'./../App.css';
//import './App.css';

import React from 'react';
function Login(props) {
    const click = () => {
        props.onToggleButtonClick();
    }
    const mass = [
        { login: 'login', text: "you are not logged in" },
        { login: 'logout', text: "you are  logged in" }
    ]
    return (
        <div className="App">

            <h3>{mass[props.num].text}</h3>
            <button onClick={click}>{mass[props.num].login}</button>


        </div>
    );
}

export default Login;
