import React, { useState } from 'react'
import "./header.css"
import CV from "../../assets/Krishna_Resume_2023.docx"


const Header = () => {
    /*Change background header */
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });


    /*Toggle Menu */
    const[Toggle, showMenu] = useState(false);
    const[activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
        <nav className="nav container">

            <a href="index.html" className="nav__logo">Krishna</a>
            
            <div className={Toggle ? "nav__menu show-menu": "nav__menu"}>
                <ul className="nav__list grid">

                    <li className="nav__item">
                        <a href="#home" onClick={() => setActiveNav("#home")} 
                        className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-estate nav__icon"> Home </i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" onClick={() => setActiveNav("#about")} 
                        className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-user nav__icon"> About </i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" onClick={() => setActiveNav("#skills")} 
                        className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-star nav__icon"> Skills </i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#project" onClick={() => setActiveNav("#project")} 
                        className={activeNav === "#project" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-briefcase-alt nav__icon"> Projects </i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#services" onClick={() => setActiveNav("#services")} 
                        className={activeNav === "#services" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-briefcase-alt nav__icon"> Certifications </i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a download="" href={CV} onClick={() => setActiveNav("#portfolio")} 
                        className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-link nav__icon"> Resume </i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" onClick={() => setActiveNav("#contact")} 
                        className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-message nav__icon"> Contact </i>
                        </a>
                    </li>

                </ul>

                <i className="uil uil-times nav__close" onClick={() => showMenu
                (!Toggle)}></i>
            </div>

            <div className="nav__toggle" onClick={() => showMenu
                (!Toggle)}>
                <i className= "uil uil-apps"> </i>
            </div>

        </nav>
    </header>
  )
}

export default Header