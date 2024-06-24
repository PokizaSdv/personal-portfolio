import { Container } from "../../../components";
import { ProjectsContent } from "../../../components/ProjectsContent";
import { Project } from "../../../components/ProjectsContent/types";
import projectifyImg from "../../../assets/images/projectify1.jpg";
import restaurantImg from "../../../assets/images/restaurant.jpg";
import furnitureImg from "../../../assets/images/furniture.jpg";

export const projects: Project[] = [
    {
        imgUrl: projectifyImg,
        title: "Projectify App",
        description:
            "Web-based project management platform. Your website is the cornerstone of your online presence. At our agency, we specialize in creating web masterpieces that stand out from the crowd. Our team of expert designers and developers will work closely with you to create a website that not only looks great but also performs at its best.",
        githubLink: "https://github.com/pokizadev/projectify-app-ui",
        demoLink: "https://projectify-app-ui-7hs3.onrender.com"
    },
    {
        imgUrl: restaurantImg,
        title: "Eleganzo Italian Restaurant Website",
        description:
            "he Eleganzo restaurant website, built with React, showcases the restaurant's modern Italian charm with sleek design and seamless functionality. Utilizing HTML, CSS, and JavaScript, the site features intuitive sign-up and sign-in pages, a detailed menu, contact information, and an easy-to-use table reservation system. Enhanced by a captivating hero section and a comprehensive footer, the website offers an engaging and user-friendly experience for all visitors.",
        githubLink: "https://github.com/pokizadev/retaurant-website-react",
        demoLink: "https://retaurant-website-react.onrender.com"
    },
    {
        imgUrl: furnitureImg,
        title: "Furniture Website",
        description:
            "Electronic commerce platform. Your website is the cornerstone of your online presence. At our agency, we specialize in creating web masterpieces that stand out from the crowd. Let us help you bring your vision to life and create a web masterpiece that represents your brand in the best possible light",
        githubLink: "https://github.com/pokizadev/furniture-website-react",
        demoLink: "https://furniture-website-react-4kwn.onrender.com"
    }
];

const ProjectsSection = () => {
    return (
        <Container>
            <ProjectsContent projects={projects} />
        </Container>
    );
};

export { ProjectsSection };
