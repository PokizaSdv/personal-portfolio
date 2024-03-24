import React, { useState } from "react";
import { Skill } from "./types";
import { Icon } from "../../design-system/Icon";
import "./SkillsContent.css";
import styled from "styled-components";

type SkillsProps = {
    skills: Skill[];
};

const StyledImg = styled.img`
    width: 7rem;
    height: 7rem;
    margin-bottom: 2rem;
`

const SkillsContent: React.FC<SkillsProps> = ({ skills }) => {
    const [page, setPage] = useState(0);
    const pageSize = 6;

    const nextPage = () => {
        setPage((prevPageSize) =>
            prevPageSize + pageSize < skills.length
                ? prevPageSize + pageSize
                : prevPageSize
        );
    };

    const previousPage = () => {
        setPage((prevPageSize) =>
            prevPageSize - pageSize >= 0
                ? prevPageSize - pageSize
                : prevPageSize
        );
    };

    return (
        <div className="skills-content">
            <div className="skills-header">
                <p className="display-lg">My Skills</p>
                <h2 className="heading-2">My Expertise</h2>
            </div>

            <div className="skills-box__wrapper">
                <div className="chevron-left__wrapper">
                    {page > 0 && (
                        <Icon
                            className="chevron-left"
                            iconName={"chevron-left"}
                            onClick={previousPage}
                        />
                    )}
                </div>

                <div className="skills-box">
                    {skills.slice(page, page + pageSize).map((skill, idx) => {
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
                <div className="chevron-left__wrapper">
                    {page + pageSize < skills.length && (
                        <Icon
                            className="chevron-right"
                            iconName={"chevron-right"}
                            onClick={nextPage}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export { SkillsContent };
