import { Container } from "../../../components";
import { SkillsContent } from "../../../components/SkillsContent";
import { Skill } from "../../../components/SkillsContent/types";

import html5 from "../../../assets/icons/html-5.svg"
import css3 from "../../../assets/icons/css3.svg"
import javascript from "../../../assets/icons/javascript.svg"
import typescript from "../../../assets/icons/typescript.svg"
import react from "../../../assets/icons/react.svg"
import nodejs from "../../../assets/icons/node-js.svg"
import npm from "../../../assets/icons/npm.svg"
import yarn from "../../../assets/icons/yarn.svg"
import git from "../../../assets/icons/git.svg"
import github from "../../../assets/icons/github.svg"
import mongodb from "../../../assets/icons/mongo-db.svg"
import postman from "../../../assets/icons/postman.svg"
import prisma from "../../../assets/icons/prisma.svg"
import vscode from "../../../assets/icons/vscode.svg"
import terminal from "../../../assets/icons/terminal.svg"
import express from "../../../assets/icons/express.svg"
import figma from "../../../assets/icons/figma.svg"
import jira from "../../../assets/icons/jira.svg"
import sass from "../../../assets/icons/sass.svg"
import materialui from "../../../assets/icons/material-ui.svg"
import chakraui from "../../../assets/icons/chakraui.svg"
import netlify from "../../../assets/icons/netlify.svg"
import database from "../../../assets/icons/database.svg"
import googlecloud from "../../../assets/icons/google-cloud.svg"



export const skills: Skill[] = [
    { name: "HTML", imgUrl: html5 },
    { name: "CSS", imgUrl: css3 },
    { name: "JavaScript", imgUrl: javascript },
    { name: "TypeScript", imgUrl: typescript },
    { name: "React", imgUrl: react },
    { name: "Node.js", imgUrl: nodejs },
    { name: "Npm", imgUrl: npm },
    { name: "Yarn", imgUrl: yarn },
    { name: "GIT", imgUrl: git },
    { name: "GitHub", imgUrl: github },
    { name: "MongoDB", imgUrl: mongodb },
    { name: "Postman", imgUrl: postman },
    { name: "Prisma", imgUrl: prisma },
    { name: "VS code", imgUrl: vscode },
    { name: "Terminal", imgUrl: terminal },
    { name: "Express-js", imgUrl: express },
    { name: "Figma", imgUrl: figma },
    { name: "Sass", imgUrl: sass },
    { name: "Chakra UI", imgUrl: chakraui },
    { name: "Material UI", imgUrl: materialui },
    { name: "jira", imgUrl: jira },
    { name: "Netlify", imgUrl: netlify },
    { name: "Database", imgUrl: database },
    { name: "Google Cloud", imgUrl: googlecloud }
];

const SkillsSection = () => {
    return (
        <Container>
            <SkillsContent skills={skills} />
        </Container>
    );
};

export { SkillsSection };
