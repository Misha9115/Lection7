import React, { Component } from 'react';
import Display from'./Display';


export default class Task6 extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = { display: true };
      }
    render() {
        return (
            <div>
           
                

                 <Display display={this.state.display}/>
                
            </div>
        )
    }
}



