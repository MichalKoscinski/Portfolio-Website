import React, { useEffect } from 'react'
import AboutMe from '../../components/AboutMe/AboutMe'
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';
import Nav from '../../components/Nav/Nav';


const Sections = () => {
    useEffect(() => {
        const projectsSection = document.querySelector('#projects')
        const projectsList = document.querySelectorAll('.projects__list__item')
        let isProjectsAppear = false

        const skillsSection = document.querySelector('#skills')
        const skillContainers = document.querySelectorAll('.skills__container')
        let isSkillsAppear = false

        const contactSection = document.querySelector('#contact')
        const contactElements = document.querySelectorAll('#contact p')
        let isContactAppear = false
        

        const addClassesWithOffset = (elements = [], offset, boolean = null) => {
            if( boolean !== null ) {
                boolean = true
            }
            elements.forEach((element, index) => {
                setTimeout(() => {
                    element.classList.add('active')
                }, ( index * offset ))
            })
        }

        const aboutMeTexts = document.querySelectorAll('.description p')

        const showProjects = () => {
            addClassesWithOffset(projectsList, 100, isProjectsAppear)
        }
        
        const showSkillsContainers = () => {
            addClassesWithOffset(skillContainers, 125, isSkillsAppear)
        }
        
        const showContactElements = () => {
            addClassesWithOffset(contactElements, 125, isContactAppear)
        }
        
        const showDescriptionTexts = () => {
            addClassesWithOffset(aboutMeTexts, 100)
        }

        window.onscroll = () => {
            const screenHeight = window.innerHeight
            if((window.pageYOffset + screenHeight/3) > projectsSection.offsetTop && !isProjectsAppear) {
                showProjects()
            }
            if((window.pageYOffset + screenHeight/3) > contactSection.offsetTop && !isContactAppear) {
                showContactElements()
            }
            if((window.pageYOffset + screenHeight/3) > skillsSection.offsetTop && !isSkillsAppear) {
                showSkillsContainers()
            }
        }
        setTimeout(() => {
            showDescriptionTexts()
        }, 300)
    }, [])

    return (
        <div>
            <Nav />
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default Sections