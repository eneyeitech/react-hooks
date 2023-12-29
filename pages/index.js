import React, { useState } from "react";

const InputElement = () => {
  const results = useState("");
  const inputText = results[0]; // data model
  const setInputText = results[1];

  //destructuring
  const [historyList, setHistoryList] = useState([]);
  

  return (
    <div>
      <input
        onChange={(e) => {
          setInputText(e.target.value);
          setHistoryList([...historyList, e.target.value]);
        }}
        placeholder="Enter Some Text"
      />
      <br />
      {inputText}
      <hr/><br/>
      <ul>
        {historyList.map((list)=>{
            return <li>{list}</li>
        })
        }
        </ul>
    </div>
  );
};

export default InputElement;
