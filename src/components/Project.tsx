import { FC, useEffect, useState } from 'react';
import { projectsData } from "../data/projectData";
import { motion } from "framer-motion";

const Project: FC< { projectNumber: number } > = ( { projectNumber } ) => {
    const [currentProject, setCurrentProject] = useState(projectsData[projectNumber]);
    const [left, setLeft] = useState<string | number>("");
    const [top, setTop] = useState<string | number>("");
    const [size, setSize] = useState<string>("");

    const transition = {
        ease: [0.03, 0.87, 0.73, .9],
        duration: 0.6
    }

    const variants = {
        initial: {
            opacity: 0,
            transition: { duration: 0.5 },
            x: 200
        },
        animate: {
            opacity: 1,
            x: 0
        },
        exit: {
            opacity: 0.4,
            transition: { duration: 0.35 },
            x: -800,
        }
    }

    const imgAnim = {
        initial: {
            opacity: 0,
            x: Math.random() * 350 * (Math.random() > 0.4 ? 1 : -1),
            y: Math.random() * 120 * (Math.random() > 0.4 ? 1 : -1)
        },
        animate: {
            opacity: 1,
            x: 0,
            y: 0
        }
    }

    useEffect( () => {
        setLeft(Math.floor(Math.random() * 200 + 700) + 'px');
        setTop(Math.floor(Math.random() * 200 + 150) + 'px');
        setSize("scale(" + Math.random() + 0.7 + ")");
    }, [])

    return (
        <motion.div initial="initial" animate="animate" exit="exit" variants={variants} transition={transition} className='project-main'>
            <div className="project-content">
                <h1>{currentProject.title}</h1>
                <p>{ currentProject.date }</p>
                <ul className="languages">
                    { currentProject.languages.map( ( language, index ) => (
                      <li key={index}>{language}</li>
                    ))}
                </ul>
            </div>
            <motion.div initial="initial" animate="animate" variants={imgAnim} transition={{ duration: 1.2 }} className="img-content">
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
            </motion.div>
            <span className="random-circle" style={{ left, top, transform: size }}></span>
        </motion.div>
    );
};

export default Project;
