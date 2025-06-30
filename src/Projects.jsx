import React from "react";

const cardData = [
    {
        title: "Mohan-Kannuru Portfolio Website",
        image: "/photo-1461749280684-dccba630e2f6.avif",
        description:
            "A personal portfolio website built with React to showcase my projects, skills, and experience as a frontend developer.",
        button: "View Project",
        link: "https://github.com/Ravadadevi/client-portfolio",
    },
    {
        title: "  Silom Christ Ministries - church website",
        image: "/church1.jpeg",
        description:
            "A modern e-commerce web app with product listings, shopping cart, and checkout functionality using React and Redux.",
        button: "View Project",
        link: "https://github.com/Ravadadevi/church-website",
    },
    {
        title: "Calculator",
        image: "/cal.avif",
        description:
            "A full-featured blog platform with markdown support, comments, and user authentication, built with Next.js.",
        button: "View Project",
        link: "https://github.com/Ravadadevi/calculator",
    },
    {
        title: "Farenheit-Celsius",
        image: "/thermomert4.jpg",
        description:
            "A responsive weather dashboard that fetches real-time weather data from an API and displays it with interactive charts.",
        button: "View Project",
        link: "https://github.com/Ravadadevi/farenheit",
    },
    {
        title: "O.P.Jindal School Website",
        image: "/school.jpg",
        description:
            "A productivity app to manage daily tasks, featuring drag-and-drop, filtering, and persistent storage using localStorage.",
        button: "View Project",
        link: "https://github.com/Ravadadevi/school-website",
    },
        {
        title: "Calender",
        image: "/2024-new-year-.jpg",
        description:
            "A productivity app to manage daily tasks, featuring drag-and-drop, filtering, and persistent storage using localStorage.",
        button: "View Project",
        link: "https://github.com/Ravadadevi/calender",
    },

];

const Projects = () => (
    <div>
            <h1 className="projects-title">My Projects</h1>

    <div className="projects-container">
        {cardData.map((card, idx) => (
            <div key={idx} className="project-card">
                <img src={card.image} alt={card.title} className="project-image" />
                <div className="project-content">
                    <div className="project-title">{card.title}</div>
                    <div className="project-description">{card.description}</div>
                </div>
                <a href={card.link} target="_blank" rel="noopener noreferrer">
                    <button className="project-button">{card.button}</button>
                </a>
            </div>
        ))}
    </div>
    </div>
);

export default Projects;
