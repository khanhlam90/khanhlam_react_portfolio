import React from "react";

function Project(props) {

  return (
        <div>
            <div className="flex-row">

                {props.projects.map((project) => (

                    <div className="flex-row card">

                        <a className="card-item" href={project.link} target="_blank" rel="noreferrer">
                            <img className="port-img" src={require(`../../assets/projects/${project.name}.png`)} alt={project.name}/>
                        </a>

                        <h4 className="card-item port-name" key={project.name}>{project.name}
                        </h4>

                        <p className="card-item port-desc">
                                {project.description}
                        </p>

                        <div className="flex-row card-item">
                            <a
                                className="port-link"
                                href={project.repo}
                                target="_blank" rel="noreferrer"
                            >
                            Github Repository
                            </a>
                                
                            <a
                                className="port-link"
                                href={project.link}
                                target="_blank" rel="noreferrer"
                            >
                                Deployed Application
                            </a>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
