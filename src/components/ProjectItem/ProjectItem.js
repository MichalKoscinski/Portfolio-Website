import React from 'react'
import './projectItem.css'

const ProjectItem = ({name, stack, imgSrc, githubUrl, demoUrl, date, description}) => {
    return (
        <div className="projects__list__item">
            { imgSrc ?
                <img src={`src/img/projects/${ imgSrc }`} alt={ `${name} miniature` } /> : null
            }
            <div className="project-body">
                <span className="project-body__name"> { name } </span>

                <div className="project-body__stack">
                    {
                        stack.map((item, index) => (
                            <span key={ index }> { item } </span>
                        ))
                    }
                </div>

                <div className="project-body__description">
                    { description }
                </div>

                <div className="project-body__buttons">
                    { githubUrl ?
                        <a href={ githubUrl }>
                            <button className="button button--white"> Github </button>
                        </a> : null}
                    { demoUrl ?
                        <a href={ demoUrl }>
                            <button className="button button--white"> Demo </button>
                        </a> : null
                    }
                </div>
                <span className="project-body__date">
                    { date }
                </span>
            </div>
        </div>
    )
}

export default ProjectItem
