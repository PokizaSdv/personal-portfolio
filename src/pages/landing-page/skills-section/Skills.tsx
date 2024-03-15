import { ColumnLayout } from "../../../components";
import { SkillsContent } from "../../../components/SkillsContent.tsx";
import { Skill } from "../../../components/SkillsContent.tsx/types";

export const skills: Skill[] = [
    { name: "HTML", iconName: "html5" },
    { name: "CSS", iconName: "css3" },
    { name: "JavaScript", iconName: "javascript" },
    { name: "TypeScript", iconName: "typescript" },
    { name: "React", iconName: "react" },
    { name: "Node.js", iconName: "node-js" },
    { name: "Npm", iconName: "npm" },
    { name: "Yarn", iconName: "yarn" },
    { name: "GIT", iconName: "git" },
    { name: "GitHub", iconName: "github" },
    { name: "MongoDB", iconName: "mongodb" },
    { name: "Prisma", iconName: "prisma" },
    { name: "VS code", iconName: "visual-studio-code" },
    { name: "Terminal", iconName: "terminal" },
    { name: "Express-js", iconName: "express-js" },
    { name: "Figma", iconName: "figma" },
    { name: "Sass", iconName: "sass" },
    { name: "Styled components", iconName: "styled-components" },
    { name: "jira", iconName: "jira" },
    { name: "Material UI", iconName: "material-ui" },
    { name: "Netlify", iconName: "netlify" },
    { name: "Google Cloud", iconName: "google-cloud" }
];

const SkillsSection = () => {
    return (
        <ColumnLayout>
            <SkillsContent skills={skills} />
        </ColumnLayout>
    );
};

export { SkillsSection };
