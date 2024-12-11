import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <h2>Contact Info</h2>
            <div className="contact-content">
                <p>
                    Thank you for visiting my portfolio! If you have any questions, suggestions, or opportunities you'd like to share, please feel free to reach out to me.
                </p>
                <ul>
                    <li>📧 Email: <a href="mailto:qtin28@gmail.com">qtin28@gmail.com</a></li>
                    <li>📞 Phone: (831)-332-1521</li>
                    <li>💼 <a href="https://www.linkedin.com/in/qiuting-zhao-79a212203/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li>🎓 <a href="https://github.com/QtinzIa" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li>📸 <a href="https://www.instagram.com/qtinzia/?next=%2F" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Contact;
