import { AboutLayout } from "../../../components";
import { AboutLeft } from "../../../components/AboutLeft";
import { AboutRight } from "../../../components/AboutRight";

const AboutSection = () => {
    return (
        <AboutLayout>
            <AboutLeft />
            <AboutRight />
        </AboutLayout>
    );
};

export { AboutSection };
