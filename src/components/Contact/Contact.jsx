import React from 'react'
import "./Contact.css"
import Phone from './contactImages/Phone.png'
import Email from './contactImages/Email.png'
import LinkedIn from './contactImages/LinkedIn.png'
import Github from './contactImages/Github.png'

function Contact() {

    const sendto = (link) => {
        window.open(
            link,
            "_blank"
        );
    }

    return (
        <div id='contact'>
            <h1>Contact Me</h1>
            <div>
                <div id="contact-github" className='contactCard' onClick={() => { sendto("https://github.com/MadhuSudhanAlukuntla") }}>
                    <img src={Github} alt="" />
                    <h5>Github</h5>
                    <p>MadhuSudhanAlukuntla</p>
                </div>
                <div id="contact-linkedin" className='contactCard' onClick={() => { sendto("https://www.linkedin.com/in/madhu-sudhan-794a91283/") }}>
                    <img src={LinkedIn} alt="LinkedIn" />
                    <h5>Linkedin</h5>
                    <p>madhu-sudhan</p>
                </div>
                <div id="contact-email" className='contactCard' onClick={() => { sendto("mailto:madhusudhan03833@gmail.com") }}>
                    <img src={Email} alt="" />
                    <h5>Email</h5>
                    <p>madhusudhan03833@gmail.com</p>
                </div>
                <div id="contact-phone" className='contactCard'>
                    <img src={Phone} alt="" />
                    <h5>Phone</h5>
                    <p>+91 9347998178</p>
                </div>
            </div>
        </div>
    )
}

export default Contact