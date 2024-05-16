import React from "react";
import profilePicture1 from '../../images/profile-1.jpg'
import profilePicture2 from '../../images/profile-2.jpg'
import profilePicture3 from '../../images/profile-3.jpg'

import './sectionComments.css'

const SectionComments = () => {
    return (
        <section className="comments">
            <div className="card">
                <p className="comment">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                    become a well-oiled collaboration machine.</p>
                <div className="user-info">
                    <img src={profilePicture1} alt="profile-illustration"></img>
                    <ul>
                        <li className="userName">Satish Patel</li>
                        <li className="tag">Founder & CEO, Huddle</li>
                    </ul>
                </div>
            </div>

            <div className="card">
                <p className="comment">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                    become a well-oiled collaboration machine.</p>
                <div className="user-info">
                    <img src={profilePicture2} alt="profile-illustration"></img>
                    <ul>
                        <li className="userName">Bruce McKenzie</li>
                        <li className="tag">Founder & CEO, Huddle</li>
                    </ul>
                </div>
            </div>
            
            <div className="card">
                <p className="comment">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                    become a well-oiled collaboration machine.</p>
                <div className="user-info">
                    <img src={profilePicture3} alt="profile-illustration"></img>
                    <ul>
                        <li className="userName">Iva Boyd</li>
                        <li className="tag">Founder & CEO, Huddle</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default SectionComments