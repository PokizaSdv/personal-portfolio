import { ColumnLayout } from "../../../components";
import { ServicesContent } from "../../../components/ServicesContent.tsx";
import { Service } from "../../../components/ServicesContent.tsx/types";

export const services: Service[] = [
    {
        iconName: "frontend",
        title: "Frontend",
        description:
            "Enhance user satisfaction through responsive and interactive frontend solutions. Create seamless and intuitive user experiences with cutting-edge frontend technologies."
    },
    {
        iconName: "backend",
        title: "Backend",
        description:
            "Build robust and scalable backend systems to power your applications. Ensure smooth data management and processing with efficient backend development."
    },
    {
        iconName: "design",
        title: "UI/UX design",
        description:
            "Design visually stunning interfaces that reflect your brand identity and values. Iterate quickly and collaboratively to refine and perfect your UI designs."
    },
    {
        iconName: "development",
        title: "Development",
        description:
            "Develop customized solutions tailored to your unique business requirements. Leverage the latest technologies and frameworks to build powerful applications. "
    }
];

const ServicesSection = () => {
    return (
        <ColumnLayout>
            <ServicesContent services={services}></ServicesContent>
        </ColumnLayout>
    );
};

export { ServicesSection };
