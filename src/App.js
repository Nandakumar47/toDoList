import "./App.css";
import React, { useState } from "react";
import List from "./components/List/List";
import Input from "./components/Input/Input";
import Heading from "./components/Heading/Heading";
function App() {
  const [items, setItems] = useState([]);
  function addItems(item) {
    setItems((prevValue) => {
      return [...prevValue, { id: Date.now(), data: item, status: false }];
    });
  }
  function deleteItem(id) {
    console.log(items);

    setItems(() => {
      return items.filter((value) => {
        return value.id !== id;
      });
    });
  }
  function strike(val, stat) {

    setItems(
      items.filter((value) => {
        if (val === value.id) {
          value.status = !value.status;
        }
        console.log(value)
        return value;
      })
    );
  }

  return (
    <div className="container">
      <Heading />
      <Input func={addItems} />
      {items.map((value, index) => {
        return (
          <List func={deleteItem} func2={strike} value={value} key={index} />
        );
      })}
    </div>
  );
}

export default App;
