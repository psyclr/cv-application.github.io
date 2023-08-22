import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import IconGithub from "../icons/IconGithub";

export default class AboutComponent extends React.Component {

    render() {
        return <section className="resume-section" id="about">
            <div className="resume-section-content">
                <h1 className="mb-0">
                    Abramovich
                    <span className="text-primary m-lg-3">Alexander</span>
                </h1>
                <div className="subheading mb-5">
                    Warsaw · Legionowa 7 · 01-343 · 883778952
                    <a href="mailto:poly.technologyst@gmail.com">poly.technologyst@gmail.com</a>
                </div>
                <p className="lead mb-5">
                    Software developer with 7 years of experience, specialization
                    in creating and maintaining web applications using Java, Spring,
                    Hibernate, REST, and various databases, such as Postgres, Oracle and MongoDB.
                    I also have worked with web3 technologies and blockchains such as: Ethereum, BSC, and Avalanche.
                    I've collaborated with diverse teams, mentored junior developers, and
                    led a small team. My strong problem-solving skills make me
                    effective at implementing solutions, identifying and fixing bugs, while my solid communication
                    abilities ensure smooth teamwork.
                    Passionate about building applications from scratch, I'm committed to
                    delivering quality work and making a lasting impact. Eager to continue
                    learning and growing, I'm confident in my ability to make valuable
                    contributions to any team and project.</p>
                <div className="social-icons">
                    <a className="social-icon"
                       href="https://www.linkedin.com/in/alex-abramovich/" target="_blank"
                       rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'coffee']} />

                    </a>
                    <a className="social-icon" href="https://github.com/psyclr" target="_blank"
                       rel="noopener noreferrer">
                        <IconGithub/>
                    </a>
                </div>
            </div>
        </section>;
    }
}
