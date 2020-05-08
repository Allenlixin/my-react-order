import React, { Component } from "react";
import OrderItem from "../OrderItem";

const data = {
  id: 1,
  shop: "院落创意菜",
  picture: "",
  product: "百香果冷饮",
  price: "19.9",
  ifCommented: true,
};

class OrderList extends Component {
  render() {
    return (
      <div>
        <OrderItem data={data}></OrderItem>
      </div>
    );
  }
}

export default OrderList;
