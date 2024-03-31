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
        description: "Web-based Project management platform", 
        githubLink: "https://github.com/pokizadev/projectify-app-ui",
        demoLink: "https://www.figma.com/file/e0MYFWFazJ2ImXcjoNm372/Projectify?type=design&node-id=3-178&mode=design&t=CTnHBBT3Dr8OJ02S-0"
    },
    {
        imgUrl: restaurantImg,
        title: "Restaurant Website",
        description: "Informational and promotional Website",
        githubLink: "https://github.com/pokizadev/retaurant-website-react",
        demoLink: "https://restaurant-website-react-pokiza.netlify.app"

    },
    {
        imgUrl: furnitureImg,
        title: "Furniture Website",
        description: "Commercial website",
        githubLink: "https://github.com/pokizadev/furniture-website-react",
        demoLink: "furniture-website-react-pokiza.netlify.app"

    },
];

const ProjecsSection = () => {
    return (
        <Container>
            <ProjectsContent projects={projects}/>
        </Container>
    )
}

export {ProjecsSection}
