import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCloud,
    faDatabase,
    faLaptopCode,
    faCode,
    faCodeBranch,
} from '@fortawesome/free-solid-svg-icons';
import { faCss3Alt, faHtml5, faJs } from '@fortawesome/free-brands-svg-icons'

const SkillsSection = () => {
    return (
        <div>
            <section className="skills" id="skills">
                <h2 className="heading">
                    <FontAwesomeIcon icon={faLaptopCode} /> Skills & <span>Abilities</span>
                </h2>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <SkillBar icon={faCode} label="C/C++" percentage={98} />
                            <SkillBar icon={faCode} label="Object-oriented programming" percentage={92} />
                            <SkillBar icon={faHtml5} label="HTML" percentage={90} />
                            <SkillBar icon={faJs} label="Javascript" percentage={60} />
                            <SkillBar icon={faCloud} label="Azure" percentage={80} /> 
                        </div>
                        <div className="col">
                            <SkillBar icon={faCode} label="Data Structure and Algorithm" percentage={98} />
                            <SkillBar icon={faCodeBranch} label="Git & GitHub | VCS" percentage={88} />
                            <SkillBar icon={faCss3Alt} label="CSS" percentage={70} />
                            <SkillBar icon={faCode} label="Spring Boot" percentage={75} />
                            <SkillBar icon={faDatabase} label="PostgreSQL" percentage={70} /> 
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const SkillBar = ({ icon, label, percentage }) => {
    return (
        <div className="bar">
            <div className="info">
                <FontAwesomeIcon icon={icon} /> <span>{label}</span>
                <span>{percentage}%</span>
            </div>
            <div className={`line ${label.toLowerCase().replace(/\s+/g, '-')}`}></div>
        </div>
    );
};

export default SkillsSection
