// import React from 'react';

// function Project({ project }) {

//     const { name, repo, link, description } = project;

//     return (
//         <div className="project" key={name}>
//             <img
//                 src={require(`../../assets/projects/${name}.png`)}
//                 alt={name}
//                 className="project-bg"
//             />
//             <div className="project-text">
//                 <h3>
//                 <a href={link}>{name}</a>{' '}
//                 <a href={repo}>
//                     <i className="fab fa-github"></i>
//                 </a>
//                 </h3>
//                 <p>{description}</p>
//             </div>
//         </div>
//     );
// }

// export default Project;

import React from "react";

function Project(props) {

  return (
        <div>
            <div className="">

                {props.projects.map((project) => (

                    <div className="">
                        <div className="">
                            <div className="">
                                <figure className="">
                                    <a href={project.link} target="_blank" rel="noreferrer">
                                        <img src={require(`../../assets/projects/${project.name}.png`)} alt={project.name}/>
                                    </a>
                                </figure>
                            </div>
                        <div className="">
                            <div className="">
                                <div className=""></div>
                                <div className="">
                                    <p className="" key={project.name}>{project.name}
                                    </p>
                                </div>
                            </div>

                            <div className="">
                                {project.description}
                            </div>
                            <div className="">
                                <footer className="">
                                    <a
                                        href={project.repo}
                                        className=""
                                        target="_blank" rel="noreferrer"
                                    >
                                        Github Repository
                                    </a>
                                
                                    <a
                                        href={project.link}
                                        className=""
                                        target="_blank" rel="noreferrer"
                                    >
                                        Deployed Application
                                    </a>
                                </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
