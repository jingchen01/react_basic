import React from 'react';

const Greet01 = () => {
    return <h1>Hello React.</h1>
}

const Greet02 = (props) => {
    console.log(props);
    return <h1>Hello {props.name} </h1>
}

export {Greet01, Greet02};