import React from 'react'

function About() {
  return (
    <div>
      <section className="about" id="about">
      <h2 className="heading">
        <i className="fas fa-user-alt"></i> About <span>Me</span>
      </h2>

      <div className="row">
        <div className="image">
          <img
            draggable="false"
            className="tilt"
            src="images/20220919_141124.jpg"
            alt=""
          />
        </div>
        <div className="content">
          <h3>I'm Priyank</h3>
          <span className="tag">Passionate software Developer | Web Developer</span>
          <p>
            Energetic and passionate college student looking for a place to start a life-long career. Knowledgeable in the
            Software field as well as performance-driven and detail-oriented. Possess well-developed communication and
            team working skills.
          </p>

          <div className="box-container">
            <div className="box">
              <p><span> age: </span> 20</p>
              <p>
                <span> college : </span> Harcourt Butler Technical University.
              </p>
            </div>
            <div className="box">
              <p><span> email : </span> priyankgupta384@gmail.com</p>
              <p><span> place : </span> Kanpur, Uttar Pradesh</p>
            </div>
          </div>

          <div className="resumebtn">
            <a href="Priyank_Resume.pdf" className="btn">
              <span>Resume</span>
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default About
