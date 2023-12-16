import React from 'react'
import bewakoof from "./projectImages/bewakoof.png"
import green_paradise from "./projectImages/green_paradise.png"
import nyka from "./projectImages/nyka.png"
import skin_store from "./projectImages/skin_store.png"
import "./Project.css"
import { motion } from "framer-motion"

const data = [

    {
        img: bewakoof,
        projectTitle: "Bewakoof",
        techStack: ["HTML", "JavaScript", "CSS"],
        description: "Bewakoof.com is an Indian e-commerce platform known for its trendy and quirky fashion, offering a wide range of casual clothing, accessories, and merchandise.",
        githubLink: "https://github.com/MadhuSudhanAlukuntla/bewakoof",
        appLink: "https://brilliant-mooncake-93c8ae.netlify.app/"
    },
    {
        img: green_paradise,
        projectTitle: "Green Paradise",
        techStack: ["HTML", "JavaScript", "CSS", "Firebase", "Rozorpay"],
        description: "Green Paradise is a fully functional e-commerce website designed for plant enthusiasts.",
        githubLink: "https://github.com/MadhuSudhanAlakuntla/Green-Paradise",
        appLink: "https://geenparadise.netlify.app/"
    },
    {
        img: nyka,
        projectTitle: "Nyka",
        techStack: ["HTML", "CSS", "JavaScript"],
        description: "Premier online beauty and wellness destination.Comprehensive selection of makeup, skincare,haircare, fragrances, and wellness products",
        githubLink: "https://github.com/MadhuSudhanAlakuntla/Nyka",
        appLink: "https://nykastore.netlify.app/"
    },
    {
        img: skin_store,
        projectTitle: "Skin Store",
        techStack: ["HTML", "CSS", "CSS", "JavaScript"],
        description: "Developed a premium online website for beauty products.Skincare, haircare, fragrances, and wellness products",
        githubLink: "https://github.com/Jageshwar2000/SkinStore",
        appLink: "https://skinstore1.netlify.app/"
    },

]




function Projects() {
    return (
        <div id='projects'>
            <h1>Projects</h1>

            {
                data.map((e, index) => {
                    return (

                        index % 2 == 0 ? (
                            <div className="project-card proCard1" key={index}>
                                <div className='projectImg'>
                                    <img src={e.img} alt="" />
                                </div>
                                <div className='projectDetails'>
                                    <h2 className="project-title">{index + 1 + ". " + e.projectTitle}</h2>
                                    <div className="project-tech-stack">
                                        {
                                            e.techStack.map((ele, ind) => {
                                                return (
                                                    <span key={ind}>{ele}</span>
                                                )
                                            })
                                        }
                                    </div>
                                    <p className="project-description">{e.description}</p>
                                    <div className='projectButtons'>
                                        <a href={e.githubLink} target="_blank" className="project-github-link">View Code</a>
                                        <a href={e.appLink} target="_blank" className="project-deployed-link">View Live App</a>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="project-card proCard2" key={index}>
                                <div className='projectDetails'>
                                    <h2 className="project-title">{index + 1 + ". " + e.projectTitle}</h2>
                                    <div className="project-tech-stack">
                                        {
                                            e.techStack.map((ele, ind) => {
                                                return (
                                                    <span key={ind}>{ele}</span>
                                                )
                                            })
                                        }
                                    </div>
                                    <p className="project-description">{e.description}</p>
                                    <div className='projectButtons'>
                                        <a href={e.githubLink} target="_blank" className="project-github-link">View Code</a>
                                        <a href={e.appLink} target="_blank" className="project-deployed-link">View Live App</a>
                                    </div>
                                </div>
                                <div className='projectImg'>
                                    <img src={e.img} alt="" />
                                </div>
                            </div>
                        )
                    )
                })
            }
        </div>
    )
}

export default Projects