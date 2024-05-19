import React from 'react'
import CV from "../../assets/Krishna_Resume_2023.docx"
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Krishna</h1>

            <ul className="footer__list">
                <li>
                    <a href="#home" className="footer__link">Home</a>
                </li>

                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a download="" href={CV} className="footer__link">Resume</a>
                </li>
            </ul>

            <div className="footer__social">        
                <a href="https://www.instagram.com/" className="footer__social-link" target="_blank">
                <i className="bx bxl-instagram"> </i>
                </a>

                <a href="https://www.linkedin.com/in/krishnainukonda" className="footer__social-link" target="_blank">
                <i className="bx bxl-linkedin"> </i>
                </a>

                <a href="https://www.github.com/krishnaink" className="footer__social-link" target="_blank">
                <i className="bx bxl-github"> </i>
                </a>
            </div>

            <span className="footer__copy">&#169; All rights reserved.</span>
        </div>
    </footer>
  )
}

export default Footer