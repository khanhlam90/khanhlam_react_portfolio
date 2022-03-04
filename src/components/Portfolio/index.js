import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {
    const [projects] = useState([
        {
            name: 'Professional Work',
            description: 'IT Auditor',
            link: "https://www.pwc.com/us/en/about-us.html",
            repo: "https://www.pwc.com/us/en/about-us.html"
        },
        {
            name: 'Photographer',
            description: 'Studio/Wedding/Event Professional Photography',
            link: "https://www.linkedin.com/in/khanh-lam-739b25172",
            repo: "https://github.com/khanhlam90"
        },
        {
            name: 'Run Buddy',
            description: 'HTML/CSS',
            link: "https://khanhlam90.github.io/run-buddy/",
            repo: "https://github.com/khanhlam90/run-buddy.git"
        },
        {
            name: 'Horiseon',
            description: 'HTML/CSS',
            link: "https://khanhlam90.github.io/Project-Refactor-Horiseon/",
            repo: "https://github.com/khanhlam90/Project-Refactor-Horiseon.git"
        },
        {
            name: 'Password Generator',
            description: '',
            link: "https://khanhlam90.github.io/password-generator/",
            repo: "https://github.com/khanhlam90/password-generator.git"
        },
        {
            name: 'Code Quiz',
            description: '',
            link: "https://khanhlam90.github.io/code-quiz/",
            repo: "https://github.com/khanhlam90/code-quiz.git"
        },
        {
            name: 'Weather Dashboard',
            description: '',
            link: "https://khanhlam90.github.io/weather-dashboard/",
            repo: "https://github.com/khanhlam90/weather-dashboard.git"
        },
        {
            name: 'Workday Scheduler',
            description: '',
            link: "https://khanhlam90.github.io/work-day-scheduler/",
            repo: "https://github.com/khanhlam90/work-day-scheduler.git"
        },
        {
            name: 'Destination Unknown',
            description: '',
            link: "https://khanhlam90.github.io/destination-unknown/",
            repo: "https://github.com/khanhlam90/destination-unknown.git"
        },
        {
            name: 'iCocina',
            description: '',
            link: "https://icocina.herokuapp.com/",
            repo: "https://github.com/khanhlam90/iCocina.git"
        },
        {
            name: 'Photo Port',
            description: '',
            link: "https://khanhlam90.github.io/photo-port/",
            repo: "https://github.com/khanhlam90/photo-port.git"
        },
        {
            name: 'Budget Tracker',
            description: '',
            link: "https://yourbudgettracker-pwa.herokuapp.com/",
            repo: "https://github.com/khanhlam90/budget-tracker.git"
        },
        {
            name: 'Food Festival',
            description: '',
            link: "https://github.com/khanhlam90/food-festival.git",
            repo: "https://github.com/khanhlam90/food-festival.git"
        },
        {
            name: 'Social Network API',
            description: 'NoSQL',
            link: "https://github.com/khanhlam90/nosql-socialnetworkapi.git",
            repo: "https://github.com/khanhlam90/nosql-socialnetworkapi.git"
        },
        {
            name: 'Pizza Hunt',
            description: 'NoSQL',
            link: "https://morning-depths-62714.herokuapp.com/",
            repo: "https://github.com/khanhlam90/pizza-hunt.git"
        },
        {
            name: 'MVC Tech Blog',
            description: 'MVC',
            link: "https://just-techblog.herokuapp.com/",
            repo: "https://github.com/khanhlam90/mvc-tech-blog.git"
        },
        {
            name: 'Just Tech News',
            description: '',
            link: "https://just-tech-news-klam.herokuapp.com/",
            repo: "https://github.com/khanhlam90/just-tech-news.git"
        },
        {
            name: 'E-Commerce',
            description: '',
            link: "https://github.com/khanhlam90/ecommerce-backend.git",
            repo: "https://github.com/khanhlam90/ecommerce-backend.git"
        },
        {
            name: 'Employee Tracker',
            description: '',
            link: "https://github.com/khanhlam90/employee-tracker.git",
            repo: "https://github.com/khanhlam90/employee-tracker.git"
        },
        {
            name: 'U Develop It',
            description: '',
            link: "https://github.com/khanhlam90/u-develop-it.git",
            repo: "https://github.com/khanhlam90/u-develop-it.git"
        },
        {
            name: 'Note Taker',
            description: '',
            link: "https://expressjs-notetakr.herokuapp.com/",
            repo: "https://github.com/khanhlam90/note-taker.git"
        },
        {
            name: 'Zoo Keeper',
            description: '',
            link: "https://guarded-springs-30195.herokuapp.com/",
            repo: "https://github.com/khanhlam90/zookeepr.git"
        },
        {
            name: 'Team Profile Generator',
            description: '',
            link: "https://github.com/khanhlam90/team-profile-generator.git",
            repo: "https://github.com/khanhlam90/team-profile-generator.git"
        },
        {
            name: 'Jest Another RPG',
            description: '',
            link: "https://github.com/khanhlam90/jest-another-RPG.git",
            repo: "https://github.com/khanhlam90/jest-another-RPG.git"
        },
        {
            name: 'Professional Readme Generator',
            description: '',
            link: "https://github.com/khanhlam90/professional-readme-generator.git",
            repo: "https://github.com/khanhlam90/professional-readme-generator.git"
        },
        {
            name: 'Portfolio Generator',
            description: '',
            link: "https://github.com/khanhlam90/portfolio-generator.git",
            repo: "https://github.com/khanhlam90/portfolio-generator.git"
        },
        {
            name: 'Git It Done',
            description: '',
            link: "https://github.com/khanhlam90/git-it-done.git",
            repo: "https://github.com/khanhlam90/git-it-done.git"
        },
        {
            name: 'Task Master Pro',
            description: '',
            link: "https://khanhlam90.github.io/taskmaster-pro/",
            repo: "https://github.com/khanhlam90/taskmaster-pro.git"
        },
        {
            name: 'Taskinator',
            description: '',
            link: "https://khanhlam90.github.io/taskinator/",
            repo: "https://github.com/khanhlam90/taskinator.git"
        },
        {
            name: 'Robot Gladiators',
            description: '',
            link: "https://github.com/khanhlam90/robot-gladiators.git",
            repo: "https://github.com/khanhlam90/robot-gladiators.git"
        },
    ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
