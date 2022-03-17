import React from 'react';
import Project from "../Project";

const projects = [
    {
        name: 'Professional Work',
        description: 'IT Auditor',
        link: "https://www.pwc.com/us/en/about-us.html",
        repo: "https://www.pwc.com/us/en/about-us.html"
    },
    {
        name: 'Photographer',
        description: 'Studio, Wedding, Event Professional Photography',
        link: "https://www.linkedin.com/in/khanh-lam-739b25172",
        repo: "https://github.com/khanhlam90"
    },
    {
        name: 'Run Buddy',
        description: 'HTML, CSS and Git',
        link: "https://khanhlam90.github.io/run-buddy/",
        repo: "https://github.com/khanhlam90/run-buddy.git"
    },
    {
        name: 'Horiseon',
        description: 'HTML, Advanced CSS',
        link: "https://khanhlam90.github.io/Project-Refactor-Horiseon/",
        repo: "https://github.com/khanhlam90/Project-Refactor-Horiseon.git"
    },
    {
        name: 'Robot Gladiators',
        description: 'Javascript',
        link: "https://github.com/khanhlam90/robot-gladiators.git",
        repo: "https://github.com/khanhlam90/robot-gladiators.git"
    },
    {
        name: 'Password Generator',
        description: 'Javascript',
        link: "https://khanhlam90.github.io/password-generator/",
        repo: "https://github.com/khanhlam90/password-generator.git"
    },
    {
        name: 'Taskinator',
        description: 'HTML, Web API, DOM API',
        link: "https://khanhlam90.github.io/taskinator/",
        repo: "https://github.com/khanhlam90/taskinator.git"
    },
    {
        name: 'Code Quiz',
        description: 'HTML, Web API, DOM API',
        link: "https://khanhlam90.github.io/code-quiz/",
        repo: "https://github.com/khanhlam90/code-quiz.git"
    },
    {
        name: 'Task Master Pro',
        description:'JQuery, Javascript, HTML with Bootstrap vs CSS, DOM',
        link: "https://khanhlam90.github.io/taskmaster-pro/",
        repo: "https://github.com/khanhlam90/taskmaster-pro.git"
    },
    {
        name: 'Workday Scheduler',
        description: 'JQuery, Javascript, HTML with Bootstrap vs CSS, DOM',
        link: "https://khanhlam90.github.io/work-day-scheduler/",
        repo: "https://github.com/khanhlam90/work-day-scheduler.git"
    },
    {
        name: 'Git It Done',
        description: 'Server-side API vs client-side API, client server model and request-response pattern, HTTP GET using XMLHTTPRequest, jQuery AJAX, and the fetch API, fetch API, Parse JSON, asynchronous Javascript',
        link: "https://github.com/khanhlam90/git-it-done.git",
        repo: "https://github.com/khanhlam90/git-it-done.git"
    },
    {
        name: 'Weather Dashboard',
        description: 'Server-side API vs client-side API, client server model and request-response pattern, HTTP GET using XMLHTTPRequest, jQuery AJAX, and the fetch API, fetch API, Parse JSON, asynchronous Javascript',
        link: "https://khanhlam90.github.io/weather-dashboard/",
        repo: "https://github.com/khanhlam90/weather-dashboard.git"
    },
    {
        name: 'Destination Unknown',
        description: 'Front-end project, Javascript, HTML, CSS, Server-side APIs',
        link: "https://khanhlam90.github.io/destination-unknown/",
        repo: "https://github.com/khanhlam90/destination-unknown.git"
    },
    {
        name: 'Portfolio Generator',
        description: 'Node.js, modularization realates to npm and the Node.js, ES6 concepts, Asynchronous woth callbacks and Promises',
        link: "https://github.com/khanhlam90/portfolio-generator.git",
        repo: "https://github.com/khanhlam90/portfolio-generator.git"
    },
    {
        name: 'Professional Readme Generator',
        description: 'Node.js, modularization realates to npm and the Node.js, ES6 concepts, Asynchronous woth callbacks and Promises',
        link: "https://github.com/khanhlam90/professional-readme-generator.git",
        repo: "https://github.com/khanhlam90/professional-readme-generator.git"
    },
    {
        name: 'Jest Another RPG',
        description: 'Object-Oriented Programming (OOP), test-driven development (TDD)',
        link: "https://github.com/khanhlam90/jest-another-RPG.git",
        repo: "https://github.com/khanhlam90/jest-another-RPG.git"
    },
    {
        name: 'Team Profile Generator',
        description: 'Object-Oriented Programming (OOP), test-driven development (TDD)',
        link: "https://github.com/khanhlam90/team-profile-generator.git",
        repo: "https://github.com/khanhlam90/team-profile-generator.git"
    },
    {
        name: 'Zoo Keeper',
        description: '',
        link: "https://guarded-springs-30195.herokuapp.com/",
        repo: "https://github.com/khanhlam90/zookeepr.git"
    },
    {
        name: 'Note Taker',
        description: 'Node.js server framework, Express.js, GET/POST requests, deployed a server-side application to Heroky platform',
        link: "https://expressjs-notetakr.herokuapp.com/",
        repo: "https://github.com/khanhlam90/note-taker.git"
    },
    {
        name: 'U Develop It',
        description: 'Structured Query Language (SQL), Node.js application to a SQL instance, CRUD methods, schema and seed files, primary and secondary keys',
        link: "https://github.com/khanhlam90/u-develop-it.git",
        repo: "https://github.com/khanhlam90/u-develop-it.git"
    },
    {
        name: 'Employee Tracker',
        description: 'Structured Query Language (SQL), Node.js application to a SQL instance, CRUD methods, schema and seed files, primary and secondary keys',
        link: "https://github.com/khanhlam90/employee-tracker.git",
        repo: "https://github.com/khanhlam90/employee-tracker.git"
    },
    {
        name: 'Just Tech News',
        description: 'Back-end, Object-Relational Mapping (ORM), Sequelize ORM in a Node.js application, Models, CRUD methods, Sequelize associations, Heroku deployment using Sequelize and MySQL, bcrypt package to hash passwords',
        link: "https://just-tech-news-klam.herokuapp.com/",
        repo: "https://github.com/khanhlam90/just-tech-news.git"
    },
    {
        name: 'E-Commerce',
        description: 'Back-end, Object-Relational Mapping (ORM), Sequelize ORM in a Node.js application, Models, CRUD methods, Sequelize associations, Heroku deployment using Sequelize and MySQL, bcrypt package to hash passwords',
        link: "https://github.com/khanhlam90/ecommerce-backend.git",
        repo: "https://github.com/khanhlam90/ecommerce-backend.git"
    },
    {
        name: 'Just Tech News',
        description: 'Model-View-Controller (MVC) paradigm, Render dynamic HTML using the Handlebars.js , MVC modularization, Heroku for deployment, separation of concerns and its benefits, authentication',
        link: "https://just-tech-news-klam.herokuapp.com/",
        repo: "https://github.com/khanhlam90/just-tech-news.git"
    },
    {
        name: 'MVC Tech Blog',
        description: 'Model-View-Controller (MVC) paradigm, Render dynamic HTML using the Handlebars.js , MVC modularization, Heroku for deployment, separation of concerns and its benefits, authentication',
        link: "https://just-techblog.herokuapp.com/",
        repo: "https://github.com/khanhlam90/mvc-tech-blog.git"
    },
    {
        name: 'iCocina',
        description: 'Node.js and Express.js to create a RESTful API, Handlebars.js, MySQL and the Sequelize ORM for the database, GET and POST routes, deployed using Heroku, MVC paradigm, authentication (express-session and cookies), Protect API keys and sensitive information',
        link: "https://icocina.herokuapp.com/",
        repo: "https://github.com/khanhlam90/iCocina.git"
    },
    {
        name: 'Pizza Hunt',
        description: 'NoSQL, Execute CRUD ,ethods with MongoDb, Integrate Mongoose in an API, Create query builders to populate documents using refs, Implement client-side NoSQL using IndexedDB',
        link: "https://morning-depths-62714.herokuapp.com/",
        repo: "https://github.com/khanhlam90/pizza-hunt.git"
    },
    {
        name: 'Social Network API',
        description: 'NoSQL, Execute CRUD ,ethods with MongoDb, Integrate Mongoose in an API, Create query builders to populate documents using refs, Implement client-side NoSQL using IndexedDB',
        link: "https://github.com/khanhlam90/nosql-socialnetworkapi.git",
        repo: "https://github.com/khanhlam90/nosql-socialnetworkapi.git"
    },
    {
        name: 'Food Festival',
        description: 'Progressive Web Applications (PWA), service workers to cache assets for offline functionality, web manifest, Lighthouse audit, set up webpack',
        link: "https://github.com/khanhlam90/food-festival.git",
        repo: "https://github.com/khanhlam90/food-festival.git"
    },
    {
        name: 'Budget Tracker',
        description: 'Progressive Web Applications (PWA), service workers to cache assets for offline functionality, web manifest, Lighthouse audit, set up webpack',
        link: "https://yourbudgettracker-pwa.herokuapp.com/",
        repo: "https://github.com/khanhlam90/budget-tracker.git"
    },
    {
        name: 'Photo Port',
        description: 'React, Single-page application (SPA), reusable components and state within React components, pass props to child components, React Hooks, conditional rendering components',
        link: "https://khanhlam90.github.io/photo-port/",
        repo: "https://github.com/khanhlam90/photo-port.git"
    },
    {
        name: 'SoCal Tanzanian Community',
        description: 'React, Single-page application (SPA), reusable components and state within React components, pass props to child components, React Hooks, conditional rendering components, GraphQL Playground, GraphQL with a Node.js, Express.js server, MongoDB and the Mongoose ODM for the database, Stripe for payment submission',
        link: "https://so-cal-community.herokuapp.com/",
        repo: "https://github.com/nelsonRoberts1968/so_cal_web.git"
    },
]

function Portfolio() {
    return (
      <div>
        <h1>Portfolio</h1>
        
        <Project projects={projects} />

      </div>
    );
  }

export default Portfolio;
