import React from "react";

import './sectionEarlyAccess.css'

const SectionEarlyAccess = () => {
    return (
        <section className="early-access">
            <h2 className="title">Get early access today</h2>
            <p className="description">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
                questions, our support team would be happy to help you.</p>
            <div className="inputs">
                <div className="email">
                    <input type="email" placeholder="email@example.com" className="emailInput"></input>
                    <p className="error none">Please enter a valid email address</p>
                </div>
                <input type="submit" value='Get Started For Free' className="submitInput"></input>
            </div>
        </section>
    )
}

export default SectionEarlyAccess