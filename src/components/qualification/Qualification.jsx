import React, {useState} from 'react'
import "./qualification.css"

const Qualification = () => {

  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
      setToggleState(index);
  }

  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Education/Work Experience</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">

            <div className={
              toggleState === 1
              ? "qualification__button qualification__active button--flex" 
              : "qualification__button button--flex"}
              onClick={() => toggleTab(1)}
            >
              <i className="uil uil-graduation-cap qualification__icon"></i> Education
            </div>

            <div className={
              toggleState === 2
              ? "qualification__button qualification__active button--flex" 
              : "qualification__button button--flex"}onClick={() => toggleTab(2)}
              >
              <i className="uil uil-briefcase-alt qualification__icon"></i> Work Experience
            </div>

          </div>

          <div className="qualification__sections">

            <div 
              className={
                toggleState === 1 
                ? "qualification__content qualification__content-active" 
                : "qualification__content"
              }
            >

              <div className="qualification__data">
                <div className="">
                  <h3 className="qualification__title">High School Diploma</h3>
                  <span className="qualification__subtitle">John Champe - High School</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2018 - 2022
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div className="">
                  <h3 className="qualification__title">B.S Computer Science</h3>
                  <span className="qualification__subtitle">George Mason - University</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2022 - Present
                  </div>
                </div>

              </div>

            </div>

            <div 
              className={
                toggleState === 2 
                ? "qualification__content qualification__content-active" 
                : "qualification__content"
              }
            >

              <div className="qualification__data">
                <div className="">
                  <h3 className="qualification__title">Job #1</h3>
                  <span className="qualification__subtitle">Job Description</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2018 - 2022
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div className="">
                  <h3 className="qualification__title">Job #2</h3>
                  <span className="qualification__subtitle">Job Description</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2022 - Present
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
    </section>
  )
}

export default Qualification