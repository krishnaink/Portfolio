import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i className="bx bxs-graduation about__icon"></i>

            <h3 className="about_title">Education</h3>
            <span className="about__subtitle">B.S. Computer Science</span>
        </div>

        <div className="about__box">
        <i className="bx bxs-award about__icon"></i>

            <h3 className="about_title">Completed</h3>
            <span className="about__subtitle">5+ Projects</span>
        </div>

        <div className="about__box">
        <i className="bx bx-support about__icon"></i>

            <h3 className="about_title">Work Experience</h3>
            <span className="about__subtitle">0+ Years</span>
        </div>

    </div>
  )
}

export default Info