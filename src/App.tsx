import styled from "styled-components";
import { AboutSection } from "./pages/landing-page/about-section/About";
import { ContactSection } from "./pages/landing-page/contact-section/Contact";
import { Footer } from "./pages/landing-page/footer-section/Footer";
import { HeaderSection } from "./pages/landing-page/header-page/Header";
import { NavigationBar } from "./pages/landing-page/navigation-bar/NavigationBar";
import { ProjecsSection } from "./pages/landing-page/projects-section/Projects";
import { ServicesSection } from "./pages/landing-page/services-section/Services";
import { SkillsSection } from "./pages/landing-page/skills-section/Skills";

const Wrapper = styled.div`
    background: linear-gradient(to bottom,  #f1fcff, #ffffff);
`;


function App() {
    return (
        <>
            <Wrapper>
                <NavigationBar />
                <HeaderSection />
            </Wrapper>

            <SkillsSection />
            <Wrapper>
                <AboutSection />
                <ServicesSection />
            </Wrapper>

            <ProjecsSection />
            <ContactSection />
            <Footer />
        </>
    );
}

export default App;
