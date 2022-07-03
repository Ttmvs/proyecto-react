import React from "react";
import Item from "./item";

export default function ItemList({ Ropa }) {
  return (
    <div>
      {Ropa.map((elem) => {
        return <Item elem={elem} />;
      })}
    </div>
  );
}
