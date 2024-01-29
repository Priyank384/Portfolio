import React from 'react'

function Navbar() {
    return (
        <div>
            <header>
                <a href="." className="logo"><i className="fab fa-node-js"></i> Priyank</a>
                <div id="menu" className="fas fa-bars"></div>
                <nav className="navbar">
                    <ul>
                        <li><a className="active" href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#work">Work</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
