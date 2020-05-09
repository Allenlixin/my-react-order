import React from "react";
import "./style.css";
import Header from "../Header";
import OrderList from "../OrderList";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <OrderList></OrderList>
    </div>
  );
}

export default App;
