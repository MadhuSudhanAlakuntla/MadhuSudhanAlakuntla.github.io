import React from 'react'
import "./AboutSection.css"
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';


function AboutSection() {
    return (
        <div id='about' className='about section'>
            <h1>Welcome to my portfolio</h1>
            <p id="user-detail-intro">
            I am a passionate Full Stack Web Developer with expertise in <b>MERN</b> Stack. I've completed a comprehensive <b>Full Stack Web Development Course</b> at Masai and have solved 650+ DSA problems. My tech toolkit includes <b>React, Redux, JAVA, Node, Express, Mongoose, MongoDB, HTML, CSS, JavaScript, and Git.</b> I'm passionate about creating efficient, elegant code and have experience in both front-end and back-end development. I thrive on problem-solving and love collaborating with teams to build innovative solutions. Let's connect and turn ideas into reality through technology. You can reach me at <a href="#contact" className='contactMe'>Contact Me</a>.
            </p>
        </div>
    )
}

export default AboutSection