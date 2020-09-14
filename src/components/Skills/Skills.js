import React from 'react'
import './skills.css'
import '../../addons/css/scaleTransition.css'

const Skills = () => {


    const technologies = [
        { name: 'HTML5', icon: 'html5.svg' },
        { name: 'CSS3', icon: 'css3.svg' },
        { name: 'JavaScript', icon: 'javascript.svg' },
        { name: 'NodeJs', icon: 'nodejs.svg' },
        { name: 'React', icon: 'reactjs.svg' },
        { name: 'Java', icon: 'java.png' },
        { name: 'Git', icon: 'git.png' },
        { name: 'Python', icon: 'python.png' },
        { name: 'R', icon: 'R.png' },
        { name: 'Django', icon: 'django.png'}
    ]



    return (
        <section id="skills">
            <h1 className="name_section">
                Skills
                <span className="name_section__background-text"> 2. </span>
            </h1>
             <div className="skills__container">
                <span className="skills__container__name"> Technologies I have used in my projects: </span>
                <div className="skills__container__list">
                    { technologies.map((tech, index) => (
                      <span key={ index }  className="skills__container__list__item">
                         { tech.name } <img src={`src/img/icons/${tech.icon}`} className="skills_container_image"alt="icon" />
                         </span>
                     ))}  
                   </div>
              </div>
         </section>
    )
}

export default Skills
