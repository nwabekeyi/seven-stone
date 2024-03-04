import React, { useState } from 'react';
import "../styles/ContactUs.css";

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, you can send formData to your server or handle it as needed.
        console.log(formData);
        // Clear form fields after submission
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-container">
            <h1 className="contact-heading">Contact Us</h1>
           
            <form className="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required style={{width:"100%", maxWidth:"100%"}}></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>

            <div className="contact-section">
                <div className="contact-info">
                    <h3>Nigeria:</h3>
                    <p>MercyDay Close<br />
                        Jakande Estate, Isolo<br />
                        Lagos<br />
                        Phone: 0911 743 2525</p>
                </div>
                <div className="contact-info">
                    <h3>USA:</h3>
                    <p>9603 Ravens Nest Ct<br />
                        Houston Tx. 77083<br />
                        USA.<br />
                        Phone: +1 (346) 203-6312</p>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
