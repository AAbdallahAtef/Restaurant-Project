import React from 'react';
import '../Styles/Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="contact-section">
                <h2>Contact Us</h2>
                <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
                <div className="contact-form">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" placeholder="Enter your name" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Enter email address" />
                    </div>
                    <div className="form-group">
                        <label>Subject</label>
                        <input type="text" placeholder="Write a subject" />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea placeholder="Write your message"></textarea>
                    </div>
                    <button className="send-button">Send</button>
                </div>
                
                <div className="contact-info-section">
                    <div className="info-item">
                        <h3>Call Us:</h3>
                        <p style={{color:'#ad343e',fontWeight:'bold'}}>+1-234-567-8900</p>
                    </div>
                    <div className="info-item">
                        <h3>Hours:</h3>
                        <p>Mon-Fri: 11am - 8pm<br/>Sat, Sun: 9am - 10pm</p>
                    </div>
                    <div className="info-item">
                        <h3>Our Location:</h3>
                        <p>123 Bridge Street<br/>Nowhere Land, LA 12345<br/>United States</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
