import React from "react";

export default class EducationComponent extends React.Component {
    render() {
        return <section className="resume-section" id="education">
            <div className="resume-section-content">
                <h2 className="mb-5">Education</h2>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Belarusian State University of Informatics and Radio electronics</h3>
                        <div className="subheading mb-3">Bachelor of Science</div>
                        <div>
                            Faculty of Radio Engineering and Electronics
                        </div>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">2013 - 2017</span></div>
                </div>
            </div>
        </section>;
    }
}