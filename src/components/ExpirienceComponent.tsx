import React from "react";

export default class ExperienceComponent extends React.Component {
    render() {
        return <section className="resume-section" id="experience">
            <div className="resume-section-content">
                <h2 className="mb-5">Experience</h2>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">

                    <div className="flex-grow-1">
                        <h3 className="mb-0">Senior Java SOFTWARE ENGINEER</h3>
                        <div className="subheading mb-0">
                            iSee Innovation
                        </div>
                        <div className="flex-shrink-0 mb-2"><span
                            className="text-primary">March 2023 - August 2023</span></div>

                        <p>Collaborated with a software architect to design and develop an application using
                            Test-Driven
                            Development (TDD) principles and following the Scrum methodology. Implemented robust
                            security
                            measures, including OAUTH 2 JWT for authentication. Designed and established database
                            relations,
                            while also developing the API implementation. Documented the project using Swagger for
                            clear and
                            comprehensive documentation. Took ownership of the majority of the business logic,
                            including API
                            access levels, Amazon S3 related logic and CRUD operations.
                            Actively participated in code reviews to ensure code quality and adherence to best
                            practices.
                        </p>
                        <p>
                            Project technologies: Java 17, Spring Boot, Spring Data, Spring Security, JJwt, Flyway,
                            Amazon
                            S3, Redis, Junit5, Mockito
                        </p>
                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Java Software Engineer</h3>
                        <div className="subheading mb-0">Clarivate</div>
                        <div className="flex-shrink-0 mb-2"><span
                            className="text-primary">August 2021 - February 2023</span>
                        </div>

                        <p>
                            Maintained database calls via jdbc-template and spring data jpa and investigated
                            database relations within legacy code.
                            I also played a key role in implementing new features, including the addition of
                            processing ISSN
                            fields and custom validation for these fields.
                            Additionally, I made valuable contributions by enhancing the existing workflow,
                            addressing
                            technical debt, and improving test coverage. This project involved
                            managing scientific publications through a microservice architecture, utilizing Oracle
                            database.
                        </p>
                        <p>
                            Project technologies: Java 8, Java 11, Spring Boot, Spring Data, Spring JDBC, Spring
                            Security,
                            Liquibase, Amazon S3, AWS EC2, Postgres, OracleDB, Junit5, Mockito
                        </p>
                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Java Software Engineer</h3>
                        <div className="subheading mb-0">Platinum</div>
                        <div className="flex-shrink-0 mb-2">
                            <span className="text-primary">August 2021 - November 2022</span>
                        </div>

                        <p>Successfully implemented the backend for a cryptocurrency application, focusing on user
                            authorization through web3 signature verification and backend message signing for smart
                            contract
                            integration. Led a team in adopting a service-based architecture, overseeing planning
                            and scrum
                            meetings. Played a key role in investigating and addressing a security breach, enhancing
                            application security measures. Designed database relations, ensured comprehensive test
                            coverage,
                            and analyzed blockchain transactions. Additionally, developed the backend for a token
                            vesting
                            system, contributing to the project's overall success.
                        </p>
                        <p>
                            Project technologies: Java 11, Spring Boot, Spring Data, Spring Security, Web3J, Infura,
                            JJwt
                            Liquibase, AWS EC2, Docker, Postgres, Junit5, Mockito
                        </p>
                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Software Designer</h3>
                        <div className="subheading mb-0">Orion Innovation</div>
                        <div className="flex-shrink-0 mb-2">
                            <span className="text-primary">December 2020 - August 2021</span>
                        </div>

                        <p>Led the implementation of authorization through Amazon Cognito and AWS Lambdas, ensuring
                            secure
                            access to project resources. Developed and integrated various microservices for
                            efficient
                            processing of video metadata and APIs. Proficiently utilized CloudFormation YAML for
                            infrastructure management. Contributed to the creation of a custom service for data
                            storage in
                            DynamoDB. Actively participated in Scrum meetings, conducted code reviews, and authored
                            comprehensive technical documentation. Demonstrated commitment to quality by writing and
                            executing unit tests.
                        </p>
                        <p>
                            Project technologies: Java 11, Quarkus, Jackson, DynamoDB, Web3J, AWS Cognito, AWS
                            CloudFormation Liquibase, AWS EC2, Docker, Postgres, Junit5, Mockito, RestAssured
                        </p>
                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Java Developer</h3>
                        <div className="subheading mb-0">Artezio</div>
                        <div className="flex-shrink-0 mb-2">
                            <span className="text-primary">July 2020 - August 2021</span>
                        </div>

                        <p>Led the development of an enhanced time management system, incorporating advanced
                            features such
                            as user calendar management, timeslot availability, task assignment, and vacation
                            tracking.
                            Actively participated in scrum meetings, conducted code reviews, and authored
                            comprehensive
                            technical documentation. Additionally, implemented unit tests to ensure system
                            reliability.
                        </p>
                        <p>Project technologies: Java 8, Spring Boot, Junit4, Mockito, KeyCloak, Docker, Jenkins,
                            Liquibase,
                            Postgres
                        </p>
                    </div>
                </div>

                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Java Developer</h3>
                        <div className="subheading mb-0">Heapix</div>
                        <div className="flex-shrink-0 mb-2">
                            <span className="text-primary">August 2019 - July 2020</span>
                        </div>

                        <p>As a collaborative developer, I played a key role in transforming a large monolithic
                            application
                            into a more efficient system by creating multiple services. Specifically, I developed an
                            asynchronous service dedicated to processing images and videos, resulting in significant
                            improvements in application speed. Additionally, I successfully implemented GitLab CI/CD
                            for
                            both the backend and frontend of the project, ensuring seamless integration and
                            deployment
                            processes. Throughout the project, I actively participated in Scrum meetings, conducted
                            thorough
                            code reviews, and diligently wrote unit tests to ensure the reliability and quality of
                            the
                            codebase. Furthermore, I contributed to the project's technical documentation, providing
                            comprehensive insights for future reference.
                        </p>
                        <p>Project technologies: Kotlin, Spring Boot, Liquibase, Junit4, Mockito, MongoDB, Docker,
                            GitlabCI,
                            GoogleCloud Pub/Sub, GoogleCloud ComputeEngine
                        </p>
                    </div>
                </div>

                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Java Developer</h3>
                        <div className="subheading mb-0">Exposit</div>
                        <div className="flex-shrink-0 mb-2">
                            <span className="text-primary">October 2016 - August 2019</span>
                        </div>
                        <p>
                            Project 1:
                            I was responsible for implementing a backend API for HLS playlist creation for iOS
                            devices.
                            Additionally, I developed an API for playlist operations, leveraging playlists and
                            ffmpeg to
                            enable
                            video editing functionalities.
                            This included tasks such as creating playlists from videos and other related operations.
                        </p>
                        <p>
                            Project technologies: Java 8, Spring MVC, Junit4, Mockito, Liquibase, Postgres, FFMpeg,
                            Swagger
                        </p>
                        <p>
                            Project 2:
                            In this project, I played a key role in improving the existing codebase and implementing
                            new
                            features. Using Spring MVC, AngularJS, and the Flash framework, I successfully enhanced
                            the
                            functionality of the project. This involved incorporating various new features and
                            ensuring the
                            smooth operation of the application.
                        </p>
                        <p>
                            Project 2 technologies: Java 5, Java 8, Spring MVC, Junit4, Mockito, Liquibase,
                            Postgres,
                            Oracle DB, AngularJs 1.5.x, RabbitMQ, Flash
                        </p>
                        <p>
                            Project 3:
                            As a Python and Vue.js developer, I took on the responsibility of re-implementing the
                            reports
                            feature in an existing codebase. The initial process took over 60 minutes, but through
                            the use
                            of
                            parallel processing using Celery and optimizing API calls, I was able to significantly
                            reduce
                            the
                            time required. Ultimately, I achieved the generation of reports for over 10,000 records
                            in less
                            than
                            2 minutes.
                        </p>
                        <p>Project 3 technologies: Python 3, Django, DjangoORM, Postgres, Celery, Redis
                        </p>
                    </div>
                </div>

            </div>
        </section>;
    }
}
