import React, { Component } from "react";
import OrderItem from "../OrderItem";

const data = [
  {
    id: 1,
    shop: "院落创意菜",
    picture:
      "https://resources.matcha-jp.com/resize/720x2000/2018/05/24-54791.jpeg",
    product: "百香果冷饮",
    price: "19.9",
    ifCommented: true,
  },
  {
    id: 2,
    shop: "院落创意菜",
    picture:
      "https://resources.matcha-jp.com/resize/720x2000/2018/05/24-54791.jpeg",
    product: "百香果冷饮",
    price: "19.9",
    ifCommented: true,
  },
  {
    id: 3,
    shop: "院落创意菜",
    picture:
      "https://resources.matcha-jp.com/resize/720x2000/2018/05/24-54791.jpeg",
    product: "百香果冷饮",
    price: "19.9",
    ifCommented: true,
  },
  {
    id: 4,
    shop: "院落创意菜",
    picture:
      "https://resources.matcha-jp.com/resize/720x2000/2018/05/24-54791.jpeg",
    product: "百香果冷饮",
    price: "19.9",
    ifCommented: true,
  },
];

class OrderList extends Component {
  render() {
    return (
      <div>
        {data.map((item) => {
          return <OrderItem key={item.id} data={item}></OrderItem>;
        })}
      </div>
    );
  }
}

export default OrderList;
