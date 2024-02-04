import React from 'react'

function Experience() {
    return (
        <div>
            <section className="experience" id="experience">
                <h2 className="heading"><i className="fas fa-briefcase"></i> Experience </h2>

                <div className="timeline">

                    <div className="container left">
                        <div className="content">
                            <div className="tag">
                                <h2>The Sparks Foundation</h2>
                            </div>
                            <div className="desc">
                                <h3>Website Development and Designing | Internship</h3>
                                <p>Sep 2021 - Oct 2021</p>
                                <p>Worked on Banking System.
                                    In this basic history of transaction is stored in the database and users can make transaction.</p>
                            </div>
                        </div>
                    </div>

                    <div className="container right">
                        <div className="content">
                            <div className="tag">
                                <h2>Future Ready Talent | Microsoft </h2>
                            </div>
                            <div className="desc">
                                <h3> Virtual Internship Program</h3>
                                <h2></h2>
                                <p>Dec 2021 - Feb 2022</p>
                                <p>
                                    Got more insights about azure fundamentals, azure developer and security technologies, also learnt how
                                    they are used in the real world through
                                    various modules & created a project using Azure web apps.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="container left">
                        <div className="content">
                            <div className="tag">
                                <h2>Quizzy</h2>
                            </div>
                            <div className="desc">
                                <h3> Content Developer | Internship</h3>
                                <p>July 2022 - Sep 2022</p>
                                <p>Worked as a content developer here. learned about the Content Creation Techniques, search engine
                                    optimization & Collaboration and Communication skills.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="container right">
                        <div className="content">
                            <div className="tag">
                                <h2>Liveasy</h2>
                            </div>
                            <div className="desc">
                                <h3> Software Developer | Internship</h3>
                                <p>April 2023 - July 2023</p>
                                <p>Developed a rest API using SpringBoot for the company to manage the endpoints of the logistics
                                    department.</p>
                                <p>
                                    Worked on the AWS platform to deploy the application for the company.
                                </p>
                                <p>
                                    Learned deeply about the Postgresql Database for storing the data of the customers and the shippers.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Experience
