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
                I am currently a second year student of Mathematics, Operational Research, Statistics and Economics (MORSE) at the University of Warwick. 
                The coursework mostly includes mathematical methods applied in data science, as well as in game theory and algorithms.
                
                </p>
                <p>
                My programming experience started with Java and R taught at Warwick. Later, I got interested in front-end development and started learning HTML, CSS and JavaScript.
                
                </p>
                <p>
                Since then, I try to develop my projects in React given how many possibilities it offers. In the future I plan on developing my skills in data visualistaion to use my degree in practice.
                
                </p>
            </div>
        </section>
    )
}

export default AboutMe
