import React from 'react'
import './projects.css'
import ProjectItem from '../../components/ProjectItem/ProjectItem'

const Projects = () => {
    const projects = [
        {
            name: 'Portfolio Website',
            imgSrc: 'Portfolio_website.jpg',
            description: 'Portfolio you are looking at right now',
            stack: ['React'], 
            githubUrl: 'https://github.com/MichalKoscinski/Portfolio-Website',
            demoUrl: 'https://michalkoscinski.github.io/Portfolio-Website'
        },
        {
            name: 'Films Searcher',
            imgSrc: 'films_searcher.JPG',
            description: 'Wesbite allowing to search for a film and see its rating',
            stack: ['React'], 
            githubUrl: 'https://github.com/MichalKoscinski/Films_Searcher',
            demoUrl: 'https://michalkoscinski.github.io/Films_Searcher/'
        },
        {
            name: 'Live Currency Converter',
            description: 'Currency Converter using live data from ECB',
            stack: ['Java'],
            githubUrl: 'https://github.com/MichalKoscinski/CurrencyConverter',
        },
        {
            name: 'Online Platform with Art',
            description: '9GAG-like online platform where instead of funny content there would be pieces of art',
            stack: ['React'],
            date: 'Incoming'
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
            <h1 className="section-name">
                Projects
                <span className="section-name__background-text"> 3.  </span>
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
