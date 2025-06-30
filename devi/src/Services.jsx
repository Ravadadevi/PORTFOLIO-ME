// Services.jsx
import React from 'react';
import { FaLaptopCode, FaReact, FaMobileAlt, FaRocket, FaPalette, FaGlobe } from 'react-icons/fa';
const services = [
    {
        title: 'Responsive Web Design',
        description: 'Creating visually appealing and mobile-friendly websites that look great on any device.',
        icon: <FaMobileAlt />,
    },
    {
        title: 'Single Page Applications',
        description: 'Building fast and interactive SPAs using React, Vue, or Angular.',
        icon: <FaReact />,
    },
    {
        title: 'Progressive Web Apps',
        description: 'Building reliable, installable web apps with offline support and native-like features.',
        icon: <FaLaptopCode />,
    },
    {
        title: 'Frontend Development',
        description: 'Developing high-performance web applications with modern JavaScript frameworks.',
        icon: <FaRocket />,
    },
    {
        title: 'UI/UX Development',
        description: 'Designing intuitive user interfaces and seamless user experiences.',
        icon: <FaPalette />,
    },
    {
        title: 'Web Development',
        description: 'Developing high-performance web applications with modern JavaScript frameworks.',
        icon: <FaGlobe />,
    },
];

const Services = () => (
    <section className="services-section">
        <div className="services-container">
            <h2>My Services</h2>
            <p className="services-description">
                I offer a range of services to help you build modern, high-quality web applications.
            </p>
            <div className="services-grid">
                {services.map((service, idx) => (
                    <div key={idx} className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Services;