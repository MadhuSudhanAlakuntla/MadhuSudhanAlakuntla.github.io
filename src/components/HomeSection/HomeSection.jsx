import React from 'react'
import "./HomeSection.css"
import Typewriter from 'typewriter-effect';
import Madhu_Sudhan_Resume from "../Navbar/Madhu_Sudhan_Resume.pdf"

function HomeSection() {
    const downloadHandle = () => {
        const link = document.createElement("a");
        link.download = "Madhu_Sudhan_Resume.pdf";
        link.href = Madhu_Sudhan_Resume;
        link.setAttribute("class", "resume-link-2")
        link.click();

        window.open(
            "https://drive.google.com/file/d/1UEHlg3iJlbGkE2YR4n4AxbCu4Si-l6el/view?usp=sharing",
            "_blank"
        );
    };

    const githubHandle = () => {
        window.open(
            "https://github.com/MadhuSudhanAlukuntla",
            "_blank"
        );
    };
    return (
        <div id='home'>
            <div id='left_home'>
                <div>
                    <h1>Hi, I am</h1>
                    <h1 id="user-detail-name">Madhu Sudhan</h1>
                    {/* <h3>I am a Full Stack Web Developer</h3> */}
                    <h3>
                        <span>
                            <Typewriter
                                options={{
                                    strings: "Full Stack Web Developer",
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </h3>
                    <p> Versatile Full Stack Web Developer, proficient in
                        JavaScript and MERN stack. Collaborative problem-solver
                        with expertise in translating project requirements into
                        scalable web applications. Skilled in Node.js, Express.js,
                        React.js, and MongoDB. Strong attention to detail and
                        proactive attitude to enhance overall software excellence. You can reach me at <a href="#contact" className='contactMe'>Contact Me</a></p>
                    <div className='home_button'>
                        <button id="resume-button-2"
                            onClick={downloadHandle}>
                            Resume
                        </button>
                        <button onClick={githubHandle} >
                            GitHub
                        </button>
                    </div>
                </div>
            </div>
            <div id='right_home' >
                <img src="/Images/hero.jpg" alt="" className="home-img" />
            </div>
        </div>
    )
}

export default HomeSection