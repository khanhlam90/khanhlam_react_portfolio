import React from 'react';
import portrait from "../../assets/small/kl_portrait.jpg"


function About() {
    return (
        <section className="container">
            <h1 id="about">Who am I?</h1>
            <div>
                <img 
                    src={portrait} 
                    id ="avatar"
                    className="mb-5" 
                    alt="portrait" 
                />
                <p>
                   Khanh Lam graduated from San Jose State University in 2016 with a bachelor degree in Accounting Information Systems. 
                </p>       
                <p>
                    He is a wedding and studio photographer, and currently he is working at PricewaterhouseCoopers (PwC) based in San Jose, California where he concentrated in both internal and external Information Technology (IT) audit.
                    He has more than 3 years of experience in SOX audit programs where he assisted clients and performed internal controls to achieve the overall requirements by SEC. Some of his clients were Trimble Navigation located n Sunnyvale, California - where he assisted clients to perform the SOX audit programs and recommended remedy solutions and controls for the years of 2017 and 2018. 
                    Another client was Cloudflare where its state was in the pre-IPO. Khanh and his PwC team colaborated to assist Cloudflare which is based in San Francisco, California to get ready for its IPO where he performed learning and modeling about the company's current state, assisted in outlinng the business processes, such as Order to Cash (OTC), Procure to Pay (PTP), Human Resource (HR).
                    Hence, he and his team succeeded modeling the overall busniess processes and intergrating the controls that should be put in place.                         
                </p>
                <p>
                    After a year and half, Khanh began his journey to work on IT audit. In this field, he learned and performed tasks on testing Information Techonolofy General Controls (ITGCs), Information Technology Automated Controls (ITACs), Key Reports (KRs), and Segeration of Duty (SoD).
                    One of his client was Intuitive Surgical based in Sunnyvale, California where he performed such mentionded tasks and succeeded for the year of 2019.
                    Khanh was able to find himself more interesting in learning and developing himself into the strong career wide.
                </p>  
                <p>
                    As of current time, Khanh Lam is near his study of becoming a full-stack developer, where he gradually becomes mastering in HTML, CSS (Bootstrap, HandleBars), JavaScript, jQuery, React.js, IndexedDB,
                    Node.js, Express.js, SQL, Sequelize, MongoDB, Mongoose, NoSQL, APIs, Templating.
                </p>
                <p>
                    Overall, Khanh enjoys connecting with people, he is always open to interesting work offers, because he found himself experienced himself in learning both hard and soft skills - such as working in a long hours, doing what it takes to get things done in appropriate ways, and handling and transitioning among different team members and different clients at the same period of time!
                </p>
            </div>
        </section>
    );
}

export default About;