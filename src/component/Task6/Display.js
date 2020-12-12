import React from 'react';

function Display(props) {
  return (
    <div className="App">
      {props.display===true&&<p>You are in</p>}
  
    </div>
  );
}

export default Display;
