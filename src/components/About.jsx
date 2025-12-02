import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <h2 className="title">About Me</h2>
                <p className="subtitle">Get to know me better</p>
                <div className="about-content">
                    <div className="about-card">
                        <p>
                            I’m a Computer Engineering graduate with experience across several well-established organizations, including AYESAŞ, QNB Finansbank, HAVELSAN, and Innova.
                            Working in diverse environments has helped me develop strong adaptability, clear communication skills
                            and a solid understanding of how large teams collaborate toward a common goal.
                        </p>
                        <p>
                            Outside of work, I’m always exploring new ideas, improving myself, and staying curious.
                            I believe in continuous learning, disciplined teamwork, and creating value wherever I am.
                        </p>
                        <p>
                            My goal is to contribute to meaningful projects that have a positive impact—both today and in the future.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
