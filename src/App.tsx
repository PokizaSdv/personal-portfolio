import { AboutSection } from "./pages/landing-page/about-section/About";
import { HeaderSection } from "./pages/landing-page/header-page/Header";
import { NavigationBar } from "./pages/landing-page/navigation-bar/NavigationBar";
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
        </>
    );
}

export default App;
