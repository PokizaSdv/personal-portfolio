import "./HeaderLeft.css";
import { Button } from "../../design-system/Button";

const HeaderLeft = () => {
    return (
        <div className="header-left">
            <div className="container">
                <div className="content">
                    <p className="display-lg">Hello, I am Pokiza</p>
                    <h1 className="heading-1">
                        I am a <span>Fullstack</span> <br /> Software Engineer
                    </h1>
                    <p className="paragraph-lg">
                        I Offer Comprehensive Backend and Frontend Development
                        Services. From crafting robust backend architectures to
                        designing captivating user interfaces, I'm committed to
                        helping businesses thrive in the digital landscape.
                        Let's collaborate and turn your ideas into reality.
                    </p>
                </div>
                <div className="actions">
                    <Button color="primary" className="paragraph-md">
                        Get in Touch
                    </Button>
                </div>
            </div>
        </div>
    );
};

export { HeaderLeft };
