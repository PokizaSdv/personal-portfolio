import React from "react";
import { Project } from "./types";
import "./ProjectsContent.css";
import { Icon } from "../../design-system/Icon";
import styled from "styled-components";

export type ProjectsProps = {
    projects: Project[];
};

const StyledIcon = styled(Icon)`
    width: 4rem;
    height: 4rem;  
    
    @media (max-width: 62.5em) {
        width: 3rem;
        height: 3rem;
        margin-right: -1rem;
    }
`;

const ProjectsContent: React.FC<ProjectsProps> = ({ projects }) => {
    return (
        <div className="projects-content">
            <p id="portfolio" className="display-lg">My Portfolio</p>
            <h2 className="heading-2">Recent Projects</h2>
            <div className="projects-box">
                {projects.map((project, idx) => {
                    return (
                        <div key={idx} className="project">
                            <img
                                className="project-img"
                                src={project.imgUrl}
                                alt=""
                            />
                            <div className="project_text">
                                <h3 className="heading-3">{project.title}</h3>
                                <p className="paragraph-sm">
                                    {project.description}
                                </p>

                                <div className="icons-wrapper">
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        className="project__icon"
                                    >
                                        <StyledIcon iconName="github-outlined" />
                                    </a>
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        className="project__icon"
                                    >
                                        <StyledIcon iconName="eye" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export { ProjectsContent };
