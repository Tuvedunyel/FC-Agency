import { FC, useEffect, useState } from 'react';
import { projectsData } from "../data/projectData";

const Project: FC< { projectNumber: number } > = ( { projectNumber } ) => {
    const [currentProject, setCurrentProject] = useState(projectsData[projectNumber]);
    const [left, setLeft] = useState<string | number>("");
    const [top, setTop] = useState<string | number>("");
    const [size, setSize] = useState<string>("");

    useEffect( () => {
        setLeft(Math.floor(Math.random() * 200 + 700) + 'px');
        setTop(Math.floor(Math.random() * 200 + 150) + 'px');
        setSize("scale(" + Math.random() + 0.7 + ")");
    }, [])

    return (
        <div className='project-main'>
            <div className="project-content">
                <h1>{currentProject.title}</h1>
                <p>{ currentProject.date }</p>
                <ul className="languages">
                    { currentProject.languages.map( ( language, index ) => (
                      <li key={index}>{language}</li>
                    ))}
                </ul>
            </div>
            <div className="img-content">
                <div className="img-container hover">
                    <span>
                        <h3>{currentProject.title}</h3>
                        <p>{ currentProject.infos }</p>
                    </span>
                    <img src={currentProject.img} alt={ currentProject.title } className="img" />
                </div>
                <div className="button-container">
                    <a href={currentProject.link} target="_blank" rel="noopener noreferrer" className='hover'>
                        <span className='button'>Voir le site</span>
                    </a>
                </div>
            </div>
            <span className="random-circle" style={{ left, top, transform: size }}></span>
        </div>
    );
};

export default Project;
