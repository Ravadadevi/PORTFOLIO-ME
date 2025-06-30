import React from "react";

const Resume = () => (
    <div className="resume-wrapper" style={{}}>
        {/* Header */}
        <div style={{ background: "#f45d22", color: "#fff", borderTopLeftRadius: 8, borderTopRightRadius: 8, padding: "32px 0 48px 0", position: "relative", textAlign: "center", height:"8vh" }}>
            <div className="head-title" style={{ marginTop: 60 }}>
                <h2 style={{ margin: 0, letterSpacing: 2, marginTop: -50, color:"white", }}>RAVADA DEVI</h2>
                <p style={{ margin: 0, fontWeight: 500, color:"white", }}>Frontend Developer</p>
            </div>
        </div>

        {/* Body */}
        <div className="flex" style={{ display: "flex", padding: 32, gap: 32 }}>
            {/* Left Column */}
            <div style={{ flex: 2 }}>
                {/* About Me */}
                <section style={{ marginBottom: 24 }}>
                    <h3 style={{ color: "#f45d22", marginBottom: 8, fontSize: 18 }}>SUMMARY</h3>
                    <p style={{ fontSize: 14, color: "#444" }}>
                        Passionate frontend developer with 1 year of experience building responsive and user-friendly web applications. Skilled in React, JavaScript, and modern web technologies. Dedicated to creating seamless user experiences and writing clean, maintainable code.
                    </p>
                </section>
                {/* Experiences */}
                <section style={{ marginBottom: 24 }}>
                    <h3 style={{ color: "#f45d22", marginBottom: 8, fontSize: 18 }}>EXPERIENCES</h3>
                    <div style={{ fontSize: 14, color: "#444" }}>
                        <div style={{ marginBottom: 8 }}>
                        <div className="exp">
                            <span className="year" style={{ fontWeight: 700 }}>2024 - 2025</span> <br />
                            <span style={{ fontWeight: 600 }}>Junior Frontend Developer, <br />
                             Lomaa It solutions  pvt ltd</span> <br />
                            <span>Assisted in developing single-page applications and contributed to UI/UX improvements.</span>
                            <span>Built responsive websites using HTML, CSS, JavaScript, and React. </span>

                        </div>
                    </div>
                    </div>
                </section>
                {/* Education */}
                <section>
                    <h3 style={{ color: "#f45d22", marginBottom: 8, fontSize: 18 }}>EDUCATION</h3>
                    <div style={{ fontSize: 14, color: "#444" }}>
                        <div style={{ marginBottom: 8 }}>
                            <span style={{ fontWeight: 700 }}>2021 - 2024</span> <br />
                            <span style={{ fontWeight: 600 }}>B.Sc. in Computer Science</span> <br />
                            <span>Pragathi Degree College</span>
                        </div>
                        <div>
                            <span style={{ fontWeight: 700 }}>2019 - 2021</span> <br />
                            <span style={{ fontWeight: 600 }}>Board of Intermediate education</span> <br />
                            <span>Sri Chaitnya Junior College</span>
                        </div>
                        <div>
                            <span style={{ fontWeight: 700 }}>2018 - 2019</span> <br />
                            <span style={{ fontWeight: 600 }}>Board of Secondary education</span> <br />
                            <span>Z.P.High School(K.P. Rega)</span>
                        </div>
                    </div>
                </section>
            </div>
            {/* Right Column */}
            <div style={{ flex: 1 }}>
                {/* Skills */}
                <section style={{ marginBottom: 24 }}>
                    <h3 style={{ color: "#f45d22", marginBottom: 8, fontSize: 18 }}>SKILLS</h3>
                    <div style={{ fontSize: 14, color: "#444" }}>
                        {[
                            { name: "React", percent: 90 },
                            { name: "JavaScript (ES6+)", percent: 90 },
                            { name: " CSS3", percent: 95 },
                            { name: "HTML5 ", percent: 98 },
                            { name: "Canva", percent: 90 }
                        ].map(skill => (
                            <div key={skill.name} style={{ marginBottom: 10 }}>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <span>{skill.name}</span>
                                    <span>{skill.percent}%</span>
                                </div>
                                <div style={{ background: "#eee", borderRadius: 4, height: 6, marginTop: 2 }}>
                                    <div style={{
                                        width: `${skill.percent}%`,
                                        background: "#f45d22",
                                        height: "100%",
                                        borderRadius: 4
                                    }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                {/* Hobbies */}
                <section style={{ marginBottom: 24 }}>
                    <h3 style={{ color: "#f45d22", marginBottom: 8, fontSize: 18 }}>HOBBIES</h3>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, fontSize: 14 }}>
                        <span>💻 Coding</span>
                        <span>📚 Reading</span>
                        <span>🎵 listening music</span>
                    </div>
                </section>
                {/* Social Links */}
                <section style={{ marginBottom: 24 }}>
                    <h3 style={{ color: "#f45d22", marginBottom: 8, fontSize: 18 }}>SOCIAL LINKS</h3>
                    <div style={{ fontSize: 14 }}>
                        <div>🔗www.linkedin.com/in/ravada-devi-93876b337</div>
                        <div>💻 github.com/Ravadadevi</div>
                    </div>
                </section>
                {/* Address */}
                <section>
                    <h3 style={{ color: "#f45d22", marginBottom: 8, fontSize: 18 }}>ADDRESS</h3>
                    <div style={{ fontSize: 14 }}>
                        <div>🏠 D/O no:1-97 K.P Rega(V), L.kota(M), VZM(D)</div>
                        <div>📍 kothavalasa , Vishakapatnam </div>
                        <div>📞 9505376219 </div>
                        <div>✉️ deviravadadevi@gmail.com</div>
                    </div>
                </section>
            </div>
        </div>
    </div>
);

export default Resume;
