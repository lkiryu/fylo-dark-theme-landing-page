import React from "react";
import Infos from "../infos/infos";

import './sectionInfo.css'

const infosdata = [
    {
        imageSrc: "./images/icon-access-anywhere.svg",
        alt: "icon access anywhere",
        title: "Access your files, anywhere",
        description: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    },
    {
        imageSrc: "./images/icon-security.svg",
        alt: "icon security",
        title: "Security you can trust",
        description: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    },
    {
        imageSrc: "./images/icon-collaboration.svg",
        alt: "icon collaboration",
        title: "Real-time collaboration",
        description: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    },
    {
        imageSrc: "./images/icon-any-file.svg",
        alt: "icon any file",
        title: "Store any type of file",
        description: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    }
]

const SectionInfo = () => {
    return (
        <section className="info-fylo">
            {
                infosdata.map((item, index) => {
                    return (
                        <Infos
                            key={index}
                            imageSrc={item.imageSrc}
                            alt={item.alt}
                            title={item.title}
                            description={item.description}
                        />
                    )
                })
            }
        </section>
    )
}

export default SectionInfo