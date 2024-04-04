import { Container } from "../../../components";
import { ServicesContent } from "../../../components/ServicesContent";
import { Service } from "../../../components/ServicesContent/types";
import frontend from "../../../assets/icons/frontend.svg"
import backend from "../../../assets/icons/backend.svg"
import design from "../../../assets/icons/design.svg"
import development from "../../../assets/icons/development.svg"

export const services: Service[] = [
    {
        imgUrl: frontend,
        title: "Frontend Development",
        description:
            "Enhance user satisfaction through responsive and interactive frontend solutions. Create seamless and intuitive user experiences with cutting-edge frontend technologies."
    },
    {
        imgUrl: backend,
        title: "Backend Development",
        description:
            "Build robust and scalable backend systems to power your applications. Ensure smooth data management and processing with efficient backend development."
    },
    {
        imgUrl: design,
        title: "UI / UX Design",
        description:
            "Design visually stunning interfaces that reflect your brand identity and values. Iterate quickly and collaboratively to refine your UI designs. Transforming your vision into user-friendly interfaces."
    },
    {
        imgUrl: development,
        title: "Integration Development",
        description:
            "Develop customized solutions tailored to your unique business requirements. Leverage the latest technologies and frameworks to build powerful applications. "
    }
];

const ServicesSection = () => {
    return (
        <Container>
            <ServicesContent services={services}></ServicesContent>
        </Container>
    );
};

export { ServicesSection };
