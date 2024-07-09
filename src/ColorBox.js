import React from 'react';

function ColorBox(props){
    const {color}  = props;
    return (
      <div className="box" style={{width:100,height:100,backgroundColor:color}}></div>
    );
  }
  
  export default ColorBox;