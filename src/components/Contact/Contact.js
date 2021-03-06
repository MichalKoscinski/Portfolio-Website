import React from 'react'
import './contact.css'


const Contact = () => {
    return (
        <section id="contact">
            <h1 className="name_section">
                Contact
                <span className="name_section__background-text"> 4. </span>
            </h1>
            <p>
                <b> E-mail: </b> <a href="mailto:michalkoscinski15@gmail.com">
                <img src="src/img/gmail.png" className="contact_icon" alt="contact_icon" />
                </a>
            </p>
            <p>
                <b> LinkedIn: </b> <a href="https://www.linkedin.com/in/michalkoscinski/"> 
                <img src="src/img/Linkedin.png" className="contact_icon" alt="contact_icon" />
                </a>
            </p>
            <p>
            <b> GitHub: </b> <a href="https://github.com/MichalKoscinski"> 
                <img src="src/img/github.svg" className="contact_icon" alt="contact_icon" />
             </a>
             </p>
        </section>
        
    )
}

export default Contact;
