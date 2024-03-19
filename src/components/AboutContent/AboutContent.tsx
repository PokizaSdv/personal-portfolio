import aboutImg from "../../assets/about1.png";
import "./AboutContent.css"


const AboutContent = () => {
    return (
        <div className="about-container">
            <div className="about-right">
                <img className="about-img" src={aboutImg} alt="me" />
            </div>
            <div className="about-left">
                <p className="display-md">A few words</p>
                <h2 className="heading-2">About me</h2>
                <p className="paragraph-md"> I am a full stack web developer currently based in Philadelphia with 1 year of experience. I have a passion for solving coding challenges and expanding my knowledge through reading books. Outside of work, I enjoy spending quality time with my family and exploring new hobbies. Let's connect and create something incredible together!</p>
            </div>
        </div>
    );
};

export { AboutContent };
