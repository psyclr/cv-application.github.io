import React from 'react';
import {NavigationComponent} from "../components/NavigationComponent";
import InterestsComponent from "../components/InterestsComponent";
import AboutComponent from "../components/AboutComponent";
import ExperienceComponent from "../components/ExpirienceComponent";
import EducationComponent from "../components/EducationComponent";
import SkillsComponent from "../components/SkillsComponent";

function ResumeScreen() {
    return (
        <body id="page-top">
        <NavigationComponent/>
        <div className="container-fluid p-0">
            <AboutComponent/>
            <hr className="m-0"/>
            <ExperienceComponent/>
            <hr className="m-0"/>
            <EducationComponent/>
            <hr className="m-0"/>
            <SkillsComponent/>
            <hr className="m-0"/>
            <InterestsComponent/>
            <hr className="m-0"/>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="js/scripts.js"></script>
        </body>
    );
}

export default ResumeScreen;
