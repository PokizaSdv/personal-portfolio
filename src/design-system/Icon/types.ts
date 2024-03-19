export type IconName =
    | "html5"
    | "css3"
    | "javascript"
    | "typescript"
    | "react"
    | "node-js"
    | "npm"
    | "yarn"
    | "git"
    | "github"
    | "mongodb"
    | "figma"
    | "styled-components"
    | "netlify"
    | "material-ui"
    | "jira"
    | "google-cloud"
    | "sass"
    | "terminal"
    | "express-js"
    | "vscode"
    | "prisma"
    | "chevron-right"
    | "chevron-left"
    | "frontend"
    | "backend"
    | "design"
    | "development"
    | "postman"
    | "management"
    | "database"

export type IconProps = {
    iconName: IconName;
    className?: string;
    onClick?: () => void;
};
