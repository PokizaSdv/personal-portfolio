import React, { useState, useEffect} from "react";
import { Skill } from "./types";
import { Icon } from "../../design-system/Icon";
import "./SkillsContent.css";

type SkillsProps = {
    skills: Skill[];
};

const SkillsContent: React.FC<SkillsProps> = ({ skills }) => {
    const [page, setPage] = useState(0);
    const [animate, setAnimate] = useState(false);
    const pageSize = 6;

    const nextPage = () => {
        setPage((prevPageSize) =>
            prevPageSize + pageSize < skills.length
                ? prevPageSize + pageSize
                : prevPageSize
        );
        setAnimate(true)
    };

    const previousPage = () => {
        setPage((prevPageSize) =>
            prevPageSize - pageSize >= 0
                ? prevPageSize - pageSize
                : prevPageSize
        );
        setAnimate(true)
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimate(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [page]);


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
                            <div key={idx} className="skill_item">
                                <Icon
                                    iconName={skill.iconName}
                                    className="skill-icon"
                                />
                                <p className="paragraph-lg">{skill.name}</p>
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
