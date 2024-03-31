import React from "react";
import { Skill } from "./types";
import "./SkillsContent.css";
import styled from "styled-components";

type SkillsProps = {
    skills: Skill[];
};

const StyledImg = styled.img`
    width: 5rem;
    height: 5rem;
    margin-bottom: 2rem;
`

const SkillsContent: React.FC<SkillsProps> = ({ skills }) => {
    

    return (
        <div className="skills-content">
            <div className="skills-header">
                <p className="display-lg">My Technological Arsenal</p>
            </div>
                
                <div className="skills-box">
                    {skills.map((skill, idx) => {
                        return (
                            <div
                                key={idx}
                                className="skill_item"
                            >
                               <StyledImg src={skill.imgUrl}/>
                                <p className="paragraph-md">{skill.name}</p>
                            </div>
                        );
                    })}
                </div>
                
            </div>
    );
};

export { SkillsContent };
