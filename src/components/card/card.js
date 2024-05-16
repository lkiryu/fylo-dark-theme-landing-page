import React from "react";

const Card = (props) => {
    return(
        <div className="card">
            <p className="testimonial">{props.testimonial}</p>
            <div className="user-info">
                <img src={props.src} alt="profile illustration"></img>
                <ul>
                    <li className="username">{props.username}</li>
                    <li className="tag">{props.tag}</li>
                </ul>
            </div>
        </div>
    )
}

export default Card