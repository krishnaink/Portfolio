import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get in Touch</h2>
        <span className="section__subtitle">Contact Me</span>


        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title"></h3>

                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>
                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">krishnakanth4477@gmail.com </span>

                        <a href="mailto:krishnakanth4477@gmail.com" className="contact__button">
                            Email Me <i className="bx bx-right-arrow-alt"></i>
                        </a>
                    </div>
                </div>

            </div>

        </div>
    </section>
  )
}

export default Contact