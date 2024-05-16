import React from "react";
import illustrationIntro from '../../images/illustration-intro.png'

import './hero.css'

const Hero = () => {
    return (
        <section className="hero">
            <img src={illustrationIntro} alt="illustration intro"></img>

            <div className="info">
                <h2 className="title">All your files in one secure location, accessible anywhere.</h2>
                <p className="description">Fylo stores all your most important files in one secure location. Access them wherever
                    you need, share and collaborate with friends family, and co-workers.</p>
                <a href="/">Get Started</a>
            </div>
        </section>
    )
}

export default Hero