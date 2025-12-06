import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            title: 'Software Engineer Intern',
            company: 'INNOVA',
            date: 'September 2025 - December 2025',
            description: 'Worked on full-stack development using Java Spring Boot and Vue.js. Gained hands-on experience with Oracle Database and WebLogic server administration.',
        },
        {
            id: 2,
            title: 'Tech in Banking Intern',
            company: 'QNB Turkiye',
            date: 'Aug 2025 - Aug 2025',
            description: 'Interned in the banking technology division, focusing on data engineering concepts. Learned key financial and banking-sector terminology, strengthening my technical and domain knowledge.',
        },
        {
            id: 3,
            title: 'Test Engineer Intern',
            company: 'HAVELSAN',
            date: 'Jan 2025 - April 2025',
            description: 'Worked as a Test Engineer Intern on a multinational command-and-control export project. Participated in functional manual and automation testing using Selenium, Cucumber, and Java. Developed strong familiarity with military standards and defense-industry workflows.',
        },
        {
            id: 4,
            title: 'Java Developer Intern',
            company: 'AYESAŞ',
            date: 'May 2024 - Aug 2024',
            description: 'Contributed to developing a support application designed for use on a naval platform, using Java and communication protocols within the Java ecosystem.',
        },
    ];

    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <h2 className="title">Experience</h2>
                <p className="subtitle">Next one coming soon</p>
                <div className="timeline">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <span className="timeline-date">{exp.date}</span>
                                <h3>{exp.title}</h3>
                                <h4>{exp.company}</h4>
                                <p>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
