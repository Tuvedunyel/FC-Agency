import React from 'react';
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Project from "../components/Project";
import Buttons from "../components/Buttons";

const Project2 = () => {
    return (
        <main>
            <Mouse/>
            <div className="project">
                <Navigation/>
                <Logo/>
                <Project projectNumber={ 1 }/>
                <Buttons left={ '/projet-1' } right={ '/projet-3' }/>
            </div>
        </main>
    );
};

export default Project2;
