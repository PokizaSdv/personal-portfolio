import "./HeaderLeft.css";
import { FileViewer } from "../FileViewer";

const HeaderLeft = () => {
    return (
        <div className="header-left">
            <div className="content">
                <p className="display-lg">Hello, It is Pokiza</p>
                <h1 className="heading-1 ">
                    I am a <span>Fullstack</span> <br /> Software Engineer
                </h1>
                <p className="paragraph-lg header-text">
                    I Offer Comprehensive Backend and Frontend Development
                    Services. Let's collaborate and turn your ideas into
                    reality.
                </p>
            </div>
            <FileViewer />
        </div>
    );
};

export { HeaderLeft };
