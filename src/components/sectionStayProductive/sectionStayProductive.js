import React from "react";
import illustrationStayProductive from '../../images/illustration-stay-productive.png'

import './sectionStayProductive.css'

const SectionStayProductive = () => {
    return (
        <section className="stay-productive">
            <img src={illustrationStayProductive} alt="illustration stay productive"></img>
            <div className="info">
                <h2 className="title">Stay productive, wherever you are</h2>
                <p className="description">Never let location be an issue when accessing your files. Fylo has you covered for all of your file
                    storage needs.</p>
                <p className="description">Securely share files and folders with friends, family and colleagues for live collaboration. No email
                    attachments required.</p>

                <a href="/">See how Fylo works <i className="fa-solid fa-right-long"></i></a>
            </div>
        </section>
    )
}

export default SectionStayProductive