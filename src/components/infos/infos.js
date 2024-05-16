import React from "react";

const Infos = (props) => {
    return(
        <div className="infos">
            <img src={props.imageSrc} alt={props.alt}></img>
            <h3 className="title">{props.title}</h3>
            <p className="description">{props.description}</p>
        </div>
    )
}

export default Infos