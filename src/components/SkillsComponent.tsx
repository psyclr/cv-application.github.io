import React from "react";

export default class SkillsComponent extends React.Component {
    render() {
        return <section className="resume-section" id="skills">
            <div className="resume-section-content">
                <h2 className="mb-5">Skills</h2>
                <div className="subheading mb-3">Programming Languages & Tools</div>
                <ul className="list-inline dev-icons">
                    <li className="list-inline-item">
                        <img src="https://www.vectorlogo.zone/logos/java/java-vertical.svg" className="logo java"
                             alt="img"/>
                    </li>
                    <li className="list-inline-item">
                        <img src="https://www.svgrepo.com/show/303206/javascript-logo.svg" className="logo js"
                             alt="img"/>
                    </li>
                    <li className="list-inline-item">
                        <img src="https://www.svgrepo.com/show/452091/python.svg" className="logo js" alt="img"/>
                    </li>
                    <li className="list-inline-item">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             viewBox="-100 0 1600 400"
                             className="logo">
                            <g>
                                <path className="st0"
                                      d="M366.9,29c-5.8,14.1-13.3,26.6-21.6,37.8c-36.6-37.3-87.8-61-144.3-61C90,5.8-0.7,96-0.7,207.4 c0,58.2,24.9,110.6,64.4,147.6l7.5,6.7c34.9,29.5,80.3,47.4,129.7,47.4c106,0,193.3-82.7,200.8-187.1 C407.7,171.3,392.3,106.4,366.9,29z M92.9,356.7c-5.8,7.5-16.6,8.3-24.1,2.5s-8.3-16.6-2.5-24.1s16.6-8.3,24.1-2.5 C97.5,338.4,98.7,349.2,92.9,356.7z M365.7,296.4c-49.5,66.1-155.9,43.7-223.7,47c0,0-12.1,0.8-24.1,2.5c0,0,4.6-2.1,10.4-4.2 c47.8-16.6,70.3-20,99.4-34.9c54.5-27.9,108.9-89,119.8-152.2c-20.8,60.7-84,113.1-141.4,134.3c-39.5,14.6-110.6,28.7-110.6,28.7 l-2.9-1.7c-48.2-23.7-49.9-128.5,38.3-162.2c38.7-15,75.3-6.7,117.3-16.6c44.5-10.4,96.1-43.7,116.8-87.3 C388.1,120.1,416.4,229,365.7,296.4z"></path>
                                <g>
                                    <path className="st1"
                                          d="M516.2,286.4c-5-2.5-8.3-8.3-8.3-15.4c0-10,7.9-18.3,18.3-18.3c3.7,0,7.1,1.2,9.6,2.5 c18.7,12.5,38.7,18.7,56.1,18.7c19.1,0,30.4-8.3,30.4-21.2v-0.8c0-15.4-20.8-20.4-43.7-27.4c-28.7-8.3-61.1-20-61.1-57.4v-0.8 c0-37,30.8-59.5,69.4-59.5c20.8,0,42.4,5.8,61.5,15.8c6.2,3.3,10.8,9.1,10.8,17c0,10.4-8.3,18.3-18.7,18.3c-3.7,0-5.8-0.8-8.7-2.1 c-15.8-8.3-32-13.3-45.7-13.3c-17.5,0-27.4,8.3-27.4,19.1v0.8c0,14.6,21.2,20.4,44.1,27.9c28.7,8.7,60.7,22,60.7,57v0.8 c0,41.2-32,61.5-72.3,61.5C565.7,309.7,538.6,301.8,516.2,286.4z"></path>
                                    <path className="st1"
                                          d="M680,129.7c0-12.5,9.6-22.5,22-22.5s22.5,10,22.5,22.5V143c14.6-20.4,34.9-36.6,66.5-36.6 c45.7,0,90.6,36.2,90.6,101.5v0.8c0,64.9-44.5,101.5-90.6,101.5c-32.4,0-52.8-16.2-66.5-34.5v69c0,12.5-10,22.5-22.5,22.5 c-12.1,0-22-9.6-22-22.5V129.7z M836.8,208.7v-0.8c0-37.8-25.4-62.4-55.7-62.4c-30.4,0-57,25.4-57,62.4v0.8 c0,37.4,26.6,62.4,57,62.4C811.4,271.5,836.8,247.3,836.8,208.7z"></path>
                                    <path className="st1"
                                          d="M899.1,129.7c0-12.5,9.6-22.5,22-22.5s22.5,10,22.5,22.5v10.8c2.1-16.6,29.5-33.3,49.1-33.3 c14.1,0,22,9.1,22,22c0,11.6-7.9,19.5-17.9,21.6c-32,5.4-53.6,33.3-53.6,71.9v64.4c0,12.1-10,22-22.5,22c-12.1,0-22-9.6-22-22 V129.7H899.1z"></path>
                                    <path className="st1"
                                          d="M1032.6,130.1c0-12.5,9.6-22.5,22-22.5s22.5,10,22.5,22.5v157.6c0,12.5-10,22-22.5,22c-12.1,0-22-9.6-22-22 V130.1z"></path>
                                    <path className="st1"
                                          d="M1100,130.1c0-12.5,9.6-22.5,22-22.5s22.5,10,22.5,22.5v9.1c12.5-18.3,30.8-32,61.1-32 c44.1,0,69.4,29.5,69.4,74.8v105.2c0,12.5-9.6,22-22,22s-22.5-9.6-22.5-22v-91.5c0-30.4-15-47.8-42-47.8 c-25.8,0-44.1,18.3-44.1,48.6v91.1c0,12.5-10,22-22.5,22c-12.1,0-22-9.6-22-22L1100,130.1L1100,130.1z"></path>
                                    <path className="st1"
                                          d="M1472.1,106.8c-12.5,0-22.5,10-22.5,22.5v13.3c-14.6-20.4-34.9-36.6-66.5-36.6c-45.7,0-90.6,36.2-90.6,101.5 v0.8c0,64.9,44.5,101.5,90.6,101.5c32.4,0,52.8-16.2,66.5-34.1c-2.1,35.3-23.7,53.6-61.5,53.6c-22.5,0-42-5.4-59.9-15.4 c-2.1-1.2-5-1.7-7.9-1.7c-10.4,0-19.1,8.3-19.1,18.3c0,8.7,5,15,12.5,17.9c23.7,11.6,48.2,17.5,75.7,17.5 c35.3,0,62.8-8.3,80.3-26.2c16.2-16.2,24.9-40.7,24.9-73.6V129.7C1494.6,116.8,1484.6,106.8,1472.1,106.8z M1393.5,271 c-30.8,0-55.7-24.1-55.7-62.8v-0.8c0-37.8,25.4-62.4,55.7-62.4s57,25.4,57,62.4v0.8C1450.9,245.7,1424.3,271,1393.5,271z"></path>
                                    <path className="st1"
                                          d="M1077.5,53.6c0,12.5-10,22.5-22.5,22.5s-22.5-10-22.5-22.5s10-22.5,22.5-22.5 C1067.1,30.7,1077.5,40.7,1077.5,53.6z"></path>
                                </g>
                                <g>
                                    <path className="st1"
                                          d="M1545.7,153.8c-12.5,0-22.9-10.4-22.9-22.9c0-12.9,10.4-22.9,22.9-22.9c12.9,0,22.9,10.4,22.9,22.9 S1558.6,153.8,1545.7,153.8z M1545.7,111.4c-10.8,0-19.5,8.7-19.5,19.5s8.7,19.5,19.5,19.5s19.5-8.7,19.5-19.5 C1565.2,119.7,1556.5,111.4,1545.7,111.4z M1551.9,143.8l-6.7-10.4h-4.6v10.4h-3.7v-26.2h10.8c4.6,0,8.7,3.3,8.7,7.9 c0,5.8-5.4,7.9-6.7,7.9l7.1,10.4H1551.9L1551.9,143.8z M1547.4,120.9h-6.7v9.1h7.1c2.1,0,4.6-1.7,4.6-4.6 C1552.4,122.6,1549.9,120.9,1547.4,120.9z"></path>
                                </g>
                            </g>
                            <path className="st1"
                                  d="M92.9,356.7c-5.8,7.5-16.6,8.3-24.1,2.5s-8.3-16.6-2.5-24.1s16.6-8.3,24.1-2.5 C97.5,338.4,98.7,349.2,92.9,356.7z"></path>
                            <path className="st3"
                                  d="M365.7,296.4c-49.5,66.1-155.9,43.7-223.7,47c0,0-12.1,0.8-24.1,2.5c0,0,4.6-2.1,10.4-4.2 c47.8-16.6,70.3-20,99.4-34.9c54.5-27.9,108.9-89,119.8-152.2c-20.8,60.7-84,113.1-141.4,134.3c-39.5,14.6-110.6,28.7-110.6,28.7 l-2.9-1.7c-48.2-23.7-49.9-128.5,38.3-162.2c38.7-15,75.3-6.7,117.3-16.6c44.5-10.4,96.1-43.7,116.8-87.3 C388.1,120.1,416.4,229,365.7,296.4z"></path>
                        </svg>
                    </li>

                    <li className="list-inline-item">
                        <img src="https://www.svgrepo.com/show/354244/quarkus.svg" className="logo quarkus"
                             alt="img"/>
                    </li>
                    <li className="list-inline-item">
                        <img src="https://hibernate.org/images/hibernate-logo.svg" className="logo hibernate"
                             alt="img"/>
                    </li>
                    <li className="list-inline-item">
                        <img src="https://www.svgrepo.com/show/353661/docker.svg" className="logo docker"
                             alt="img"/>
                    </li>
                    <li className="list-inline-item">
                        <img src="https://www.svgrepo.com/show/448266/aws.svg" className="logo" alt="img"/>
                    </li>
                    <li className="list-inline-item">
                        <img src="	https://www.svgrepo.com/show/303232/mongodb-logo.svg" className="logo quarkus"
                             alt="img"/>
                    </li>

                </ul>
                <div className="subheading mb-3">Workflow</div>
                <ul className="fa-ul mb-0">
                    <li>
                        <span className="fa-li"><i className="fas fa-check"></i></span>
                        Cross Functional Teams
                    </li>
                    <li>
                        <span className="fa-li"><i className="fas fa-check"></i></span>
                        Agile Development & Scrum
                    </li>
                    <li>
                        <span className="fa-li"><i className="fas fa-check"></i></span>
                        DRY, KISS, OOP, SOLID, TDD, CI/CD
                    </li>
                    <li>
                        Java from 8 to 17
                        JavaScript on basic level
                        Python on basic level
                        Spring framework including SpringBoot, SpringData, SpringSecurity, SpringCloud
                        Sql and NoSQL databases: Oracle, Postgres, Mysql, MongoDB, DynamoDB
                        AWS: EC2, Lambda, Cognito, CloudFormation
                        Tests: JUnit, Mockito, Powermock, Rest-assured
                    </li>
                </ul>
            </div>
        </section>;
    }
}
