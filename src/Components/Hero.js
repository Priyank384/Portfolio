import React from 'react';

function Hero() {
    return (
        <div>
            <section className="home" id="home">
                <div id="particles-js"></div>

                <div className="content">
                    <h3>
                        Hi There,<br />
                        I'm Priyank <span>Gupta</span>
                    </h3>
                    <p style={{ color: 'orange' }}>I am into <span className="typing-text"></span></p>
                    <a href="#about" className="btn">
                        <span>About Me</span>
                        <i className="fas fa-arrow-circle-down"></i>
                    </a>
                    <div className="socials">
                        <ul className="social-icons">
                            <li>
                                <a className="linkedin" href="https://www.linkedin.com/in/priyank-gupta-2a1075207/" target="_blank" rel="noreferrer">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a className="github" href="https://github.com/Priyank384" target="_blank" rel="noreferrer">
                                    <i className="fab fa-github"></i>
                                </a>
                            </li>
                            <li>
                                <a className="twitter" href="https://twitter.com/Priyank_384" target="_blank" rel="noreferrer">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a className="instagram" href="https://www.instagram.com/priyank_384/" target="_blank" rel="noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a className="kaggle" href="https://www.kaggle.com/priyank384" target="_blank" rel="noreferrer">
                                    <i className="fab fa-kaggle"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="image">
                    <img draggable="false" className="tilt" src="images/avatar.jpg" alt="" />
                </div>
            </section>
        </div>
    );
}

export default Hero;
