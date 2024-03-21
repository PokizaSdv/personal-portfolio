import { AboutSection } from "./pages/landing-page/about-section/About";
import { ContactSection } from "./pages/landing-page/contact-section/Contact";
import { HeaderSection } from "./pages/landing-page/header-page/Header";
import { NavigationBar } from "./pages/landing-page/navigation-bar/NavigationBar";
import { ProjecsSection } from "./pages/landing-page/projects-section/Projects";
import { ServicesSection } from "./pages/landing-page/services-section/Services";
import { SkillsSection } from "./pages/landing-page/skills-section/Skills";

function App() {
    return (
        <>
            <NavigationBar />
            <HeaderSection />
            <SkillsSection/>
            <AboutSection/>
            <ServicesSection/>
            <ProjecsSection/>
            <ContactSection/>
        </>
    );
}

export default App;
