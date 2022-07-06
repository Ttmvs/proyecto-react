import React from "react";
import Item from "./item"

export default function ItemDetail({ProductOne}) {
    return (
        <div>
            {ProductOne.map((elem) =>{
                return <Item elem={elem}/>
            })}
        </div>
    )
}