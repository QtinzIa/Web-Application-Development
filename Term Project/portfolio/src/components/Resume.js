import React from 'react';
import './Resume.css';

function Resume() {
    return (
        <div className="resume-container">
            <h1>My Resume</h1>
            <p>
                Below is a brief summary of my professional and academic journey. You can also download my full resume as a PDF.
            </p>
            <a href="/resume.pdf" download className="download-button">Download Resume</a>

            <div className="timeline">
                <div className="timeline-item">
                    <h2>Education</h2>
                    <p><strong>University of California, Santa Cruz</strong> — Computer Science and Game Design (2019 - 2024)</p>
                    <p>GPA: 3.71/4.0</p>
                    <p>Relevant Courses: Embedded Systems, Analysis of Algorithms, Machine Learning, Computational Models</p>
                </div>

                <div className="timeline-item">
                    <h2>Work Experience</h2>
                    <p><strong>Data Scientist Intern, EMR Technical Solutions (2023 - 2024)</strong></p>
                    <ul>
                        <li>Analyzed Medicaid enrollment data using Python, achieving 91% accuracy in predictions with Prophet models.</li>
                        <li>Designed Tableau dashboards, improving precision for identifying key growth areas by 45%.</li>
                    </ul>
                    <p><strong>Game Development Intern, Perfect World Co., Ltd. (2023)</strong></p>
                    <ul>
                        <li>Tested "One Punch Man: World," documenting software defects and enhancing accuracy with Python scripts.</li>
                    </ul>
                </div>

                <div className="timeline-item">
                    <h2>Projects</h2>
                    <p><strong>Visual Communication Design Project (2022)</strong></p>
                    <ul>
                        <li>Designed and developed a board game with custom artwork and balanced gameplay.</li>
                    </ul>
                    <p><strong>Interactive Storytelling (2022)</strong></p>
                    <ul>
                        <li>Led a team to create a text-based RPG with an 8,000-word narrative using Ink.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Resume;
