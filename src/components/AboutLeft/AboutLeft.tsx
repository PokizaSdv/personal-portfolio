import "./AboutLeft.css";
import { Button } from "../../design-system/Button";

const AboutLeft = () => {
    return (
        <div className="header-left">
            <div className="content">
                <p className="display-lg">Hello, I am Pokiza</p>
                <h1 className="heading-1">
                    I am a <span>Fullstack</span> Software Engineer
                </h1>
                <p className="paragraph-lg">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sint eius labore laudantium reprehenderit iure, non fugiat.
                    Minus modi deleniti sunt! 
                </p>
            </div>
            <div className="actions">
                <Button color="primary" className="paragraph-md">
                    Get in Touch
                </Button>
            </div>
        </div>
    );
};

export { AboutLeft };
