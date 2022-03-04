import React from "react";
import resume from "../../assets/resume/klam-resume.png";

function Resume() {
    return (
        <div className="">
            <div className="">
                <p>Resume</p>
                <a
                    className=""
                    href={resume}
                    download
                    target="blank"
                >
                    <span>Download My Resume</span>
                </a>
            </div>
            <div className="">
                <p className="">Skills</p>
                <hr />
                <ul>
                    <li>HTML, CSS, Javascript,</li>
                    <li>JQuery, SQL, Sequalize, NoSQL, IndexedDB,</li>
                    <li>React, Node.js, Express.js</li>
                    <li>Mongo, Mongoose</li>
                    <li>APIs REST / RESTFUL APIs</li>
                    <li>Repositories: Git</li>
                </ul>
            </div>
        </div>
    );
}

export default Resume;