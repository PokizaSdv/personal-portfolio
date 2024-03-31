import styled from "styled-components";
import { AboutSection } from "./pages/landing-page/about-section/About";
import { ContactSection } from "./pages/landing-page/contact-section/Contact";
import { Footer } from "./pages/landing-page/footer-section/Footer";
import { HeaderSection } from "./pages/landing-page/header-page/Header";
import { NavigationBar } from "./pages/landing-page/navigation-bar/NavigationBar";
import { ProjecsSection } from "./pages/landing-page/projects-section/Projects";
import { ServicesSection } from "./pages/landing-page/services-section/Services";
import { SkillsSection } from "./pages/landing-page/skills-section/Skills";

const TopWrapper = styled.div`
    background: linear-gradient(to bottom, #e2f7ff, #f1fcff, #ffffff);
`;

const MiddleWrapper = styled.div`
    background: linear-gradient(to bottom, #f1fcff, #ebfaff, #ffffff);
`;
function App() {
    return (
        <>
            <TopWrapper>
                <NavigationBar />
                <HeaderSection />
            </TopWrapper>

            <SkillsSection />
            <MiddleWrapper>
                <AboutSection />
                <ServicesSection />
            </MiddleWrapper>

            <ProjecsSection />
            <ContactSection />
            <Footer />
        </>
    );
}

export default App;
