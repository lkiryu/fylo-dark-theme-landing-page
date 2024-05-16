import React from "react";
import iconAccessAnywhere from '../../images/icon-access-anywhere.svg'
import iconSecurity from '../../images/icon-security.svg'
import iconCollaboration from '../../images/icon-collaboration.svg'
import iconAnyFile from '../../images/icon-any-file.svg'

import './sectionInfo.css'

const SectionInfo = () => {
    return (
        <section className="info-fylo">
            <div>
                <img src={iconAccessAnywhere} alt="icon access anywhere"></img>
                <h3 className="title">Access your files, anywhere</h3>
                <p className="description">The ability to use a smartphone, tablet, or computer to access your account means your
                    files follow you everywhere.</p>
            </div>
            <div>
                <img src={iconSecurity} alt="icon security"></img>
                <h3 className="title">Security you can trust</h3>
                <p className="description">2-factor authentication and user-controlled encryption are just a couple of the security
                    features we allow to help secure your files.</p>
            </div>
            <div>
                <img src={iconCollaboration} alt="icon collaboration"></img>
                <h3 className="title">Real-time collaboration</h3>
                <p className="description">Securely share files and folders with friends, family and colleagues for live collaboration.
                    No email attachments required.</p>
            </div>
            <div>
                <img src={iconAnyFile} alt="icon any file"></img>
                <h3 className="title">Store any type of file</h3>
                <p className="description">Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all
                    file types to be securely stored and shared.</p>
            </div>
        </section>
    )
}

export default SectionInfo