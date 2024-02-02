import React from 'react'

function Education() {
    return (
        <div>
            <section className="education" id="education">
                <h1 className="heading">
                    <i className="fas fa-graduation-cap"></i> My <span>Education</span>
                </h1>
                <p className="quote">
                    Education is not the learning of facts, but the training of the mind to think.
                </p>
                <div className="box-container">
                    <div className="box">
                        <div className="image">
                            <a href="https://hbtu.ac.in/" target="_blank" rel="noopener noreferrer">
                                <img
                                    draggable="false"
                                    src="images/1600689797phpuXotq0.jpeg"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="content">
                            <h3>Bachelor of Engineering in Electronics Engineering</h3>
                            <p>Harcourt Butler Technical University </p>
                            <h4>2020-2024 | Pursuing</h4>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <a href="https://bhagatpublicschool.com/" target="_blank" rel="noopener noreferrer">
                                <img
                                    draggable="false"
                                    src="images/bhagat public.jpeg"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="content">
                            <h3>Intermediate | Science</h3>
                            <p>Bhagat Public Sr. Sec Intermediate School | BPS</p>
                            <h4>2017-2019 | Completed</h4>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Education
