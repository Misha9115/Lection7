import React, { Component } from 'react';


export default class Task7 extends React.Component {
    constructor(props) {
        super(props);

        this.state = { score: 0 };
    }
    kliker=()=> {
if(this.state.score===10){
    this.setState({ score: 0})
}
if(this.state.score!=10){
    this.setState({ score: this.state.score+1})
}
    }
    render() {
        return (
            <div>

                <div>{this.state.score}</div>
{this.state.score>-1&&this.state.score<5&&<p>Your result is poor</p>}
{this.state.score>4&&this.state.score<8&&<p>Your result is average</p>}
{this.state.score>7&&this.state.score<11&&<p>Your result is excellent</p>}
                <button onClick={this.kliker}>Clik me</button>



            </div>
        )
    }
}



