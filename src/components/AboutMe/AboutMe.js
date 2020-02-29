import React from 'react'
import './aboutMe.css'

const AboutMe = () => {
    return (
        <section id="about-me" className="about-me">
            <h1 className="section-name">
                About me
                <span className="section-name__background-text"> 1. </span>
            </h1>
            <div className="description">
                <p>
                    My programming experience started with university coursework in Java and R. Later, I got interested in front-end development and I started learning HTML, CSS and JavaScript
                </p>
                <p>
                   Since then, I try to develop my projects in React given how many possibilities it offers. In the future I plan on developing my skills in data visualistaion to use my statistics degree in practice.
                </p>
            </div>
        </section>
    )
}

export default AboutMe
