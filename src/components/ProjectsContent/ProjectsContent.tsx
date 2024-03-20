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
`;

const ProjectsContent: React.FC<ProjectsProps> = ({ projects }) => {
    return (
        <div className="projects-content">
            <p className="display-lg">Recent Projects</p>
            <h2 className="heading-2">My Portfolio</h2>
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
                                <p className="paragraph-md">
                                    {project.description}
                                </p>

                                <div className="icons-wrapper">
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        className="project__icon"
                                    >
                                        <StyledIcon iconName="github-outlined" />
                                        <p className="paragraph-sm hover-text">
                                            GitHub
                                        </p>
                                    </a>
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        className="project__icon"
                                    >
                                        <StyledIcon iconName="eye" />
                                        <p className="paragraph-sm hover-text hover-text-2">
                                            Preview
                                        </p>
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
