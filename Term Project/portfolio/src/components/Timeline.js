import React from 'react';
import './Timeline.css';

function Timeline({ events }) {
    return (
        <div className="timeline-container">
            <h2>My Achievements</h2>
            <div className="timeline">
                {events.map((event, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h3>{event.title}</h3>
                            <p>{event.date}</p>
                            <p>{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Timeline;
