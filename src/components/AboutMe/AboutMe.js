import React from 'react'
import './aboutMe.css'

const AboutMe = () => {
    return (
        <section id="about_me" className="about_me">
            <h1 className="name_section">
                About me
                <span className="name_section__background-text"> 1. </span>
            </h1>
            <div className="description">
                <p>
                I am currently a final year student of Mathematics, Operational Research, Statistics and Economics (MORSE) at the University of Warwick. Through my coursework, I'm getting familiar with mathematical methods applied in data science, as well as in databases, algorithms and Machine Learning.
                </p>
                <p>
                My experience started with competitive programming using Java that I've learnt in high school. Later at university, I have studied computer science fundamentals. Subsequently, I got interested in front-end development and started learning HTML, CSS and JavaScript.
                </p>
                <p>
                Since then, I develop my projects using React - I'm fascinated by how many possibilities it offers. In the future, I plan on developing my skills in data visualisation, so that I can apply the skills I learn in my degree in the real world. This summer, I was an intern at Perflo, where I worked on their app, which measures team performance.
                </p>
                <p>
                To broaden my understanding of software development, I have also been learning a range of different technologies, including Django, Docker and AWS.
                </p>
            </div>
        </section>
    )
}

export default AboutMe
