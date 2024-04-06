import { Container } from "../../../components";
import { ProjectsContent } from "../../../components/ProjectsContent";
import { Project } from "../../../components/ProjectsContent/types";
import projectifyImg from "../../../assets/images/projectify1.jpg";
import restaurantImg from "../../../assets/images/restaurant.jpg"
import furnitureImg from "../../../assets/images/furniture.jpg"

export const projects: Project[] = [
    {
        imgUrl: projectifyImg,
        title: "Projectify App",
        description: "Web-based project management platform. Your website is the cornerstone of your online presence. At our agency, we specialize in creating web masterpieces that stand out from the crowd. Our team of expert designers and developers will work closely with you to create a website that not only looks great but also performs at its best.", 
        githubLink: "https://github.com/pokizadev/projectify-app-ui",
        demoLink: "https://www.figma.com/file/e0MYFWFazJ2ImXcjoNm372/Projectify?type=design&node-id=3-178&mode=design&t=CTnHBBT3Dr8OJ02S-0"
    },
    {
        imgUrl: restaurantImg,
        title: "Restaurant Website",
        description: "Informational and promotional website. Your website is the cornerstone of your online presence. At our agency, we specialize in creating web masterpieces that stand out from the crowd. Our team of expert designers and developers will work closely with you to create a website that not only looks great but also performs at its best.",
        githubLink: "https://github.com/pokizadev/retaurant-website-react",
        demoLink: "https://restaurant-website-react-pokiza.netlify.app"

    },
    {
        imgUrl: furnitureImg,
        title: "Furniture Website",
        description: "Electronic commerce platform. Your website is the cornerstone of your online presence. At our agency, we specialize in creating web masterpieces that stand out from the crowd. Let us help you bring your vision to life and create a web masterpiece that represents your brand in the best possible light",
        githubLink: "https://github.com/pokizadev/furniture-website-react",
        demoLink: "furniture-website-react-pokiza.netlify.app"

    },
];

const ProjectsSection = () => {
    return (
        <Container>
            <ProjectsContent projects={projects}/>
        </Container>
    )
}

export {ProjectsSection}
