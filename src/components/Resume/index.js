import React from "react";
import resume from "../../assets/resume/klam-resume.png";

function Resume() {
    return (
        <div className="flex">
            
            <div className="skill">
                <h1 >Skills</h1>
    
                <ul>
                    <li>HTML, CSS, Javascript,</li>
                    <li>JQuery, SQL, Sequalize, NoSQL, IndexedDB,</li>
                    <li>React, Node.js, Express.js</li>
                    <li>Mongo, Mongoose</li>
                    <li>APIs REST / RESTFUL APIs</li>
                    <li>Repositories: Git</li>
                </ul>
            </div>

            <div className="resume">
                <h1>Resume</h1>
                <a
                    className=""
                    href={resume}
                    download
                    target="blank"
                >
                    <button>Download My Resume</button>
                </a>
            </div>
        </div>
    );
}

export default Resume;