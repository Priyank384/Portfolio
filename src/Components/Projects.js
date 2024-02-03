import React from 'react'

function Projects() {
    return (
        <div>
            <section className="work" id="work">
                <h2 className="heading"><i className="fas fa-laptop-code"></i> Projects <span>Made</span></h2>
                <div className="box-container">
                    {/* Project 1: Sorting Visualizer */}
                    <div className="box tilt">
                        <img draggable="false" src="images/Screenshot 2023-07-28 at 1.12.02 AM.png" alt="" />
                        <div className="content">
                            <div className="tag">
                                <h3>Sorting Visualizer</h3>
                            </div>
                            <div className="desc">
                                <p>An app that visualizes every sorting algorithm.</p>
                                <div className="btns">
                                    <a href="https://github.com/Priyank384/sorting_visualizer" className="btn" target="_blank">Code <i className="fas fa-code"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 2: Portfolio Website */}
                    <div className="box tilt">
                        <img draggable="false" src="images/portfolio site image.png" alt="" />
                        <div className="content">
                            <div className="tag">
                                <h3>Portfolio Website</h3>
                            </div>
                            <div className="desc">
                                <p>Personal portfolio website. Don't need much info about it, just scroll down. You're here only!</p>
                                <div className="btns">
                                    <a href="https://priyank384.github.io/portfolio-website/" className="btn" target="_blank"><i className="fas fa-eye"></i> View</a>
                                    <a href="https://github.com/Priyank384/portfolio-website" className="btn" target="_blank"><i className="fas fa-code"></i>Code</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 3: Sign-in page */}
                    <div className="box tilt">
                        <img draggable="false" src="images/sign in page.png" alt="" />
                        <div className="content">
                            <div className="tag">
                                <h3>Sign-in page</h3>
                            </div>
                            <div className="desc">
                                <p>This is an app made using react js. This project has an otp based login as well and the data is securely stored in firebase.</p>
                                <div className="btns">
                                    <a href="https://priyank384.github.io/sign-in-page/" className="btn" target="_blank"><i className="fas fa-eye"></i> View</a>
                                    <a href="https://github.com/Priyank384/sign-in-page" className="btn" target="_blank">Code <i className="fas fa-code"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 4: Online Video Upload */}
                    <div className="box tilt">
                        <img draggable="false" src="images/online video.png" alt="" />
                        <div className="content">
                            <div className="tag">
                                <h3>Online Video Uplaod </h3>
                            </div>
                            <div className="desc">
                                <p>This project is made using the Express.js. Through this anyone can upload and download any file i.e., audio, video, or text file.</p>
                                <div className="btns">
                                    <a href="https://priyank384.github.io/Online_Video_uploads/" className="btn" target="_blank"><i className="fas fa-eye"></i> View</a>
                                    <a href="https://github.com/Priyank384/Online_Video_uploads" className="btn" target="_blank">Code <i className="fas fa-code"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects
