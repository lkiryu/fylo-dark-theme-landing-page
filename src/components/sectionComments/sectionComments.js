import React from "react";
import Card from "../card/card";

import './sectionComments.css'

const cardData = [
    {
        testimonial: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
        src: "./images/profile-1.jpg",
        username: "Satish Patel",
        tag: "Founder & CEO, Huddle",
    },
    {
        testimonial: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
        src: "./images/profile-2.jpg",
        username: "Bruce McKenzie",
        tag: "Founder & CEO, Huddle",
    },
    {
        testimonial: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
        src: "./images/profile-3.jpg",
        username: "Iva Boyd",
        tag: "Founder & CEO, Huddle",
    }
]

const SectionComments = () => {
    return (
        <section className="comments">
            {
                cardData.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            testimonial={item.testimonial}
                            src={item.src}
                            username={item.username}
                            tag={item.tag}
                        />
                    )
                })
            }
        </section>
    )
}

export default SectionComments