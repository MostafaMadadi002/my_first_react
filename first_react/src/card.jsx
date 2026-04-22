import React from "react";

function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt="" className="images" />
            <p className="name">{props.name}</p>
            <p className="name">{props.email}</p>
        </div>
    )
}

export default Card;