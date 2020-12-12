import React, { Component } from 'react';
import './index.css';

const todos = [
    {
        key: 1,
        status: 'start',
        text: 'Learn english'
    },
    {
        key: 2,
        status: 'done',
        text: 'Watch a new movie'
    },
    {
        key: 3,
        status: 'inProgress',
        text: 'Make a post on Instagram'
    },
    {
        key: 4,
        status: 'done',
        text: 'Learn React'
    },
    {
        key: 5,
        status: 'inProgress',
        text: 'Do home task'
    },
    {
        key: 6,
        status: 'start',
        text: 'Go shopping'
    },
];

const Todo = (props) => {
    /* =============== TASK 2 ====================
      Check the status of the todo, if it is 'done' use className="done", if it is 'start' then use className="start" and if it is 'inProgress' then use className="inProgess"
    */
    return (
        <ul>
            {/*console.log(props.index)*/}
            {(props.status === 'start') && (<li className="start">{props.text}</li> )}
            {(props.status === 'inProgress') && ( <li className="inProgress">{props.text}</li> )}
            {(props.status === 'done') && ( <li className="done">{props.text}</li> )}
        </ul>
    );
}

export default class Task5 extends React.Component {
    render() {
        return (
            <div>
                <h2>Todo</h2>
                

                    { /* =============== TASK 1 ====================
             Loop over array of todos and pass them as props into <Todo />
             */
                        todos.map((e) =>
                            <Todo key={e.key} status={e.status} text={e.text} />
                        )
                    }
                
            </div>
        )
    }
}



