import React, { useState, useEffect } from 'react'
import './nav.css'
import { HashLink } from 'react-router-hash-link'

const Nav = () => {
    const [ isNavBodyActive, setIsNavBodyActive ] = useState( false )
    const [ isNavActive, setIsNavActive ] = useState( false )
    
    const toggleLinks = () => {
        const links = document.querySelectorAll('.nav__body a')
        setIsNavBodyActive( !isNavBodyActive )
        links.forEach((link, index) => {
            setTimeout(() => {
                link.classList.toggle('active')
            }, (index * 40))
        })
    }
    const navScroll = el => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    
    useEffect(() => {
        setTimeout(() => {
            setIsNavActive( true )
        }, 100)
    })

    return (
        <nav className={ isNavActive ? 'active' : '' }>
            <div className="nav__container">
                <div className="nav__button" onClick={ () => toggleLinks() }>
                    <span className="nav__button__line"></span>
                    <span className="nav__button__line"></span>
                    <span className="nav__button__line"></span>
                </div>
                
                <div className={`nav__body ${ isNavBodyActive ? 'active' : '' }`}>
                    <HashLink to="/" scroll={ navScroll }>
                        Main page
                    </HashLink>
                    <HashLink to="/sections#about-me" scroll={ navScroll }>
                        About me
                    </HashLink>
                    <HashLink to="/sections#skills" scroll={ navScroll }>
                        Skills
                    </HashLink>
                    <HashLink to="/sections#projects" scroll={ navScroll }>
                        Projects
                    </HashLink>
                    <HashLink to="/sections#contact" scroll={ navScroll }>
                        Contact
                    </HashLink>
                </div>
            </div>   

        </nav>
    )
}

export default Nav
