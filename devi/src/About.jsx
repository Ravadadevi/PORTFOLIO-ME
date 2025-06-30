import React from "react";


import { FaFacebookF, FaTwitter, FaLinkedinIn, FaDownload } from "react-icons/fa";

const Mainpage = () => {
    return (
      <>
      <div className="about-devi">
        <section className="profile-card"><br />
          <div className="profile-to">
          <img id="to" src="/devi2.jpeg" alt="Ravada Devi's profile photo" />
          </div>
          <h2>RAVADA DEVI</h2>
          <p className="profile-title">FRONTEND DEVELOPER</p>
          <div className="profile-socials">
          <a href="https://www.facebook.com/"><FaFacebookF /></a>
          <a href="https://x.com/?lang=en"><FaTwitter /></a>
          <a href="https://in.linkedin.com/"><FaLinkedinIn /></a>
          <a href="https://github.com/Ravadadevi" target="_blank" rel="noopener noreferrer">
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.76-1.604-2.665-.304-5.466-1.334-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.624-5.475 5.92.43.372.813 1.104.813 2.227 0 1.607-.014 2.903-.014 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          </div> <br />
        </section>

        <section className="about-me">
          <h4 className="about-label">About Me</h4>
          <h1>World leading FRONTEND DEVELOPER</h1>
          <p className="about-desc">
          Passionate and creative frontend developer with expertise in building responsive,
          user-friendly web applications using modern technologies.
          </p>
          <p className="about-detail">
          Experienced in HTML, CSS, JavaScript, and React. Dedicated to delivering
          high-quality code and seamless user experiences. Always eager to learn new tools
          and frameworks to stay ahead in the fast-evolving web development landscape.
          </p>
          <a
          className="download-btn"
          href="/Ravada_Devi_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          >
          <FaDownload /> DOWNLOAD CV
          </a>
          <div className="about-info">
          <div><span>Name:</span> RAVADA DEVI</div>
          <div><span>DOB:</span> 4th June 2004</div>
          </div>
        </section>
        
        </div>
      </>
    );
};

export default Mainpage;