import { HeaderSection } from "./pages/landing-page/header-page/Header";
import { NavigationBar } from "./pages/landing-page/navigation-bar/NavigationBar";
import { Skills } from "./pages/landing-page/skills-section/Skills";

function App() {
    return (
        <>
            <NavigationBar />
            <HeaderSection />
            <Skills/>
        </>
    );
}

export default App;
