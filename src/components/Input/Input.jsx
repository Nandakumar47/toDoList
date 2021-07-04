import React, { useState } from "react";

function Input(props) {
    const [item, setItem] = useState("")
  return (
    <div className="form">
      <input onChange={(e)=>{
          setItem(e.target.value)
      }} type="text" value={item}/>
      <button onClick={()=>{
          props.func(item)
          setItem("")
      }}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default Input;
