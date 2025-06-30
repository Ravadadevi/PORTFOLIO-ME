import { useState, useEffect } from "react";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Services from "./Services";
import Contact from "./Contact";
import profileImage from "../public/devi2.jpeg"; // Replace with your image path

import {
  FaUser,
  FaFileAlt,
  FaFolderOpen,
  FaCogs,
  FaEnvelope,
} from "react-icons/fa";

const TypewriterRoles = ({ roles, typingSpeed = 150, pause = 1500 }) => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typingSpeed / 2);
    } else {
      timeout = setTimeout(() => {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    }

    if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles, typingSpeed, pause]);

  return <span className="typewriter-role">{text}</span>;
};



const projects = [
  {
    title: 'Age Calculator',
    description: 'Calculates age from date of birth.',
    tools: 'React, JavaScript, HTML, CSS'
  },
  {
    title: 'Calendar',
    description: 'Interactive monthly calendar view.',
    tools: 'React, JavaScript, CSS'
  },
  {
    title: 'Digital Clock',
    description: 'Real-time updating clock.',
    tools: 'React, JavaScript'
  },
  {
    title: 'Payroll System',
    description: 'Manages employee salaries and attendance.',
    tools: 'React, Node.js, MongoDB, Express'
  }
];

const Home = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [bgColor, setBgColor] = useState("");

  const handleColorChange = (color) => {
    setBgColor(color);
  };

  const [activeTab, setActiveTab] = useState("education");

  const renderContent = () => {
    switch (activeTab) {
      case "education":
        return (
          <div className="tab-content">
            <div>
              <span style={{ fontWeight: 700 }}>2021 - 2024</span> <br />
              <span style={{ fontWeight: 600 }}>B.Sc. in Computer Science</span> <br />
              <span>Pragathi Degree College</span>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <span style={{ fontWeight: 700 }}>2019 - 2021</span> <br />
              <span style={{ fontWeight: 600 }}>Board of Intermediate education</span> <br />
              <span>Sri Chaitnya Junior College</span>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <span style={{ fontWeight: 700 }}>2018 - 2019</span> <br />
              <span style={{ fontWeight: 600 }}>Board of Secondary education</span> <br />
              <span>Z.P.High School(K.P. Rega)</span>
            </div>
          </div>
        );
      case "experience":
        return (
          <div className="tab-content">
            <h3 className="tab-title">Frontend Developer</h3>
            <p>Lomaa IT Solutions - Present</p>
            <p>Developed responsive UI, optimized components, and collaborated with team.</p>
          </div>
        );
      case "skills":
        return (
          <div className="tab-content">
            <h3 className="tab-title">Technical Skills</h3>
            <p>HTML, CSS, JavaScript, React, Git, Responsive Design, Tailwind</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="home-container">
      {/* Hamburger Button for Mobile */}
      <button
        className="hamburger-btn"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        aria-label="Toggle sidebar"
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="logo">
          <span className="logo-icon">P</span>
          <span className="logo-text">ORTFOLIO</span>
        </div>
        {(isSidebarOpen ||
         window.innerWidth > 768) && (
          <nav>
            <ul>
              <li className={activeSection === "home" ? "active" : ""} onClick={() => { setActiveSection("home"); setIsSidebarOpen(false); }}>
                <FaUser /> Home
              </li>
              <li className={activeSection === "about" ? "active" : ""} onClick={() => { setActiveSection("about"); setIsSidebarOpen(false); }}>
                <FaUser /> About
              </li>
              <li className={activeSection === "projects" ? "active" : ""} onClick={() => { setActiveSection("projects"); setIsSidebarOpen(false); }}>
                <FaFolderOpen /> Projects
              </li>
              <li className={activeSection === "services" ? "active" : ""} onClick={() => { setActiveSection("services"); setIsSidebarOpen(false); }}>
                <FaCogs /> Services
              </li>
              <li className={activeSection === "contact" ? "active" : ""} onClick={() => { setActiveSection("contact"); setIsSidebarOpen(false); }}>
                <FaEnvelope /> Contact
              </li>
            </ul>
          </nav>
        )}
      </aside>

      {/* Main Content Section */}

      <main className="main-content">
        
{activeSection === "home" && (
          <div className="mainpage" style={{ backgroundColor: bgColor }}>
            {/* Left Section */}
            <div className="mainpage-left">
              <h2>
                Hello, my name is <span>Ravada Devi</span>
              </h2>
              <h1>
                I'm a{" "}
                <TypewriterRoles
                  roles={[
                    "Frontend Developer",
                    "Web Designer",
                    "UI/UX Designer"
                  ]}
                  typingSpeed={100}
                  pause={1200}
                />
              </h1>
              <p>
                I'm a web Designer with extensive experience for 1 year.
                My expertise is to create and website design, graphic design, and many more...
              </p>
              <button
                className="more-about-btn"
                onClick={() => setActiveSection("resume")}
              >
                More About Me
              </button>
            </div>
            <div className="mainpage-right">
              <img
                src="public/devi2.jpeg"
                alt="profile"
                className="profile-img"
              />
            </div>
            <div className="theme-box">
              <div className="theme-box-title">Theme Colors</div>
              <div className="theme-colors">
                <span className="color-dot color1" onClick={() => handleColorChange("#fff")}></span>
                <span className="color-dot color2" onClick={() => handleColorChange("lightpink")}></span>
                <span className="color-dot color3" onClick={() => handleColorChange("#e1c0f7")}></span>
                <span className="color-dot color4" onClick={() => handleColorChange("lightcyan")}></span>
                <span className="color-dot color5" onClick={() => handleColorChange("lightblue")}></span>
              </div>
            </div>
            {/* Settings Button */}
          </div>
        )}
       `  
        {activeSection === "home" && (
    <div className="about-containerrr">
      {/* Left Image */}
      <div className="about-image">
        <img src={profileImage} alt="Profile" />
      </div>

      {/* Right Content */}
      <div className="about-content">
       
        <p className="about-description">
          I’m a passionate frontend developer skilled in HTML, CSS, JavaScript,
          and React, currently working at Lomaa IT Solution Company. I create
          responsive, user-friendly applications while continuously learning new
          tools to stay ahead. Beyond coding, I enjoy exploring tech trends and
          sharing my insights through content creation.
        </p>

        {/* Tabs */}
        <div className="tab-buttons">
          <button
            className={activeTab === "education" ? "active" : ""}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
          <button
            className={activeTab === "experience" ? "active" : ""}
            onClick={() => setActiveTab("experience")}
          >
            Experience
          </button>
          <button
            className={activeTab === "skills" ? "active" : ""}
            onClick={() => setActiveTab("skills")}
          >
            Skills
          </button>
        </div>

        <hr className="divider" />

        {/* Tab Content */}
        {renderContent()}
      </div>
    </div>
  )
};`

{activeSection === "home" && (
  <section className="tools-section">
    <h2 className="tools-title">Essential Tools I use</h2>
    <p className="tools-desc">
      Discover the powerful tools and technologies I use to create exceptional, high-performing websites &amp; applications.
    </p>
    <div className="tools-grid">
      <div className="tool-card">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="tool-icon" />
        <div>
          <div className="tool-name">HTML</div>
          <div className="tool-type">User Interface</div>
        </div>
      </div>
      <div className="tool-card">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="tool-icon" />
        <div>
          <div className="tool-name">CSS</div>
          <div className="tool-type">User Interface</div>
        </div>
      </div>
      <div className="tool-card">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="tool-icon" />
        <div>
          <div className="tool-name">JavaScript</div>
          <div className="tool-type">Interaction</div>
        </div>
      </div>
      <div className="tool-card">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="tool-icon" />
        <div>
          <div className="tool-name">React</div>
          <div className="tool-type">Framework</div>
        </div>
      </div>
      <div className="tool-card">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="TailwindCSS" className="tool-icon" />
        <div>
          <div className="tool-name">TailwindCSS</div>
          <div className="tool-type">User Interface</div>
        </div>
      </div>
    </div>
  </section>
)}

        {activeSection === "about" && <About />}
        {activeSection === "resume" && <Resume />}
        {activeSection === "projects" && <Projects />}
        {activeSection === "services" && <Services />}
        {activeSection === "contact" && <Contact />}
      </main>
      
      
    </div>



  );
};

export default Home;
