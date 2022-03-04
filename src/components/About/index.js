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
                    He is a wedding and studio photographer, and currently he is working as an IT Audior at PricewaterhouseCoopers (PwC) 
                    based in San Jose, California where he concentrated in both internal and external Information Technology (IT) audit.                        
                </p>
                <p>
                    Khanh was able to find himself more interesting in learning and developing himself into the strong career wide.
                    Therefore, he is near his study of becoming a full-stack developer, where he gradually becomes not only a better auditor, 
                    but also a neat developer in HTML, CSS (Bootstrap, HandleBars), JavaScript, jQuery, React.js, IndexedDB,
                    Node.js, Express.js, SQL, Sequelize, MongoDB, Mongoose, NoSQL, APIs, Templating.
                </p>  
                <p>
                    Overall, Khanh enjoys connecting with people, he is always open to interesting work offers, 
                    because he found himself experienced himself in learning both hard and soft skills - 
                    such as working in a long hours, doing what it takes to get things done in appropriate ways, 
                    and handling and transitioning among different team members and different clients at the same period of time!
                </p>
            </div>
        </section>
    );
}

export default About;