import React, { useEffect } from 'react'
import './hero.css'
import { HashLink } from 'react-router-hash-link'
import { TitleComponent } from '../../TitleComponent';

const Hero = () => {    
    const appearAnimation = () => {
        const elements = document.querySelectorAll('.mainpage, .hero')
        const menuListItems = document.querySelectorAll('.menu__list__item')
        const names = document.querySelectorAll('.me__name, .me__as')

        setTimeout(() => {
            menuListItems.forEach( (item, index) => {
                setTimeout(() => {
                    item.classList.add('appear')
                }, (index * 20) )
            })
            names.forEach((name, index) => {
                setTimeout(() => {
                    name.classList.add('appear')
                }, (index * 110))
            })
        }, 500)

        elements.forEach(element => {
            element.classList.add('appear')
        }) 
    }
    
    const navScroll = el => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    
    useEffect(() => {
        appearAnimation()
    })

    return (
        <>
            <div className="mainpage"></div>
            <div className="hero">
                <div className="me">
                    <span className="me__name">Michał Kościński</span>
                    <span className="me__as">Applied Mathematics Student at the University of Warwick</span>
                </div>

                <div className="menu block">
                    <div className="menu__list">
                        <div className="menu__list__item">
                            <HashLink to="sections#about-me" scroll={ el => el}>
                                <div className="menu__list__item__body block-m">
                                    <span> About me </span>
                                    <span> 1. </span>
                                </div>
                            </HashLink>
                        </div>

                        <div className="menu__list__item">
                            <HashLink to="/Portfolio-Website/sections#skills" scroll={ navScroll }>
                                <div className="menu__list__item__body block-m">
                                    <span> Skills </span>
                                    <span> 2. </span>
                                </div>
                            </HashLink>
                        </div>

                        <div className="menu__list__item">
                            <HashLink to="/Portfolio-Website/sections#projects" scroll={ navScroll }>
                                <div className="menu__list__item__body block-m">
                                    <span> Projects </span>
                                    <span> 3. </span>
                                </div>
                            </HashLink>
                        </div>

                        <div className="menu__list__item">
                            <HashLink to="/Portfolio-Website/sections#contact" scroll={ navScroll }>
                                <div className="menu__list__item__body block-m">
                                    <span> Contact </span>
                                    <span> 4. </span>
                                </div>
                            </HashLink>
                        </div>
                    </div>
                </div>
            </div>
            <TitleComponent title="Michał's Portfolio" />
        </>
    )
}

export default Hero
