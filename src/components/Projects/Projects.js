import React from 'react'
import './projects.css'
import ProjectItem from '../../components/ProjectItem/ProjectItem'

const Projects = () => {
    const projects = [
        {
            name: 'Social Media Platform',
            imgSrc: 'Social-media.bmp',
            description: 'I used Django REST framework to build web APIs, React and Bootstrap to make the client-side look better and PostgreSQL to communicate between the backend and the frontend',
            stack: ['React, Django'],
            githubUrl: 'https://github.com/MichalKoscinski/Twitter',
            demoUrl: 'https://social-media-michal.herokuapp.com/'
        
        },
        {
            name: 'Portfolio Website',
            imgSrc: 'Portfolio_website.jpg',
            description: 'Portfolio you are looking at right now.',
            stack: ['React'], 
            githubUrl: 'https://github.com/MichalKoscinski/Portfolio-Website',
            demoUrl: 'https://michalkoscinski.github.io/Portfolio-Website'
        },
        {
            name: 'Film search site',
            imgSrc: 'films_searcher.JPG',
            description: 'Website allowing to search for a film and see its rating. Uses IMDb API.',
            stack: ['React'], 
            githubUrl: 'https://github.com/MichalKoscinski/Films_Searcher',
            demoUrl: 'https://michalkoscinski.github.io/Films_Searcher/'
        },
        {
            name: 'Live Currency Converter',
            description: "Currency Converter build using ECB's API giving real time data about exchange rates.",
            stack: ['Java'],
            githubUrl: 'https://github.com/MichalKoscinski/CurrencyConverter',
        },
        
        {
            name: 'Old Portfolio Website',
            imgSrc: 'Old_Portfolio.jpg',
            description: 'My first project using HTML, CSS and JS',
            stack: ['HTML, CS, JS'],
            githubUrl: 'https://github.com/MichalKoscinski/MyWebsite',
            demoUrl: 'https://michalkoscinski.github.io/MyWebsite/',
        },
    ]

    return (
        <section id="projects">
            <h1 className="name_section">
                Projects
                <span className="name_section__background-text"> 3.  </span>
            </h1>
            <div className="projects__list">
                {
                    projects.map((project, index) => (
                        <ProjectItem key={ index } {...project} />
                    ))
                }
            </div>

        </section>
    )
}

export default Projects
