import aboutImg from "../../assets/images/about1.png";
import { Icon } from "../../design-system/Icon";
import "./AboutContent.css";

const AboutContent = () => {
    return (
        <div id="aboutme" className="about-content">
            <div className="about-right">
                <p className="display-md">A Quick Summary</p>
                <h2 className="heading-2">About me</h2>
                <p className="paragraph-md">
                    I am a full stack web developer currently based in
                    Philadelphia with 1 year of experience. I have a passion for
                    solving coding challenges and expanding my knowledge through
                    reading books. Outside of work, I enjoy spending quality
                    time with my family and exploring new hobbies. Let's connect
                    and create something incredible together!
                </p>
            </div>
            <div className="about-left">
                <p className="display-md">Feel free to reach out at</p>
                <div className="email-phone">
                <p className="display-md">Email</p>
                <div className="wrapper">
                    <Icon iconName="email" />
                    <p className="paragraph-md">pokizadev@gmail.com</p>
                </div>
                <p className="display-md">Phone</p>
                <div className="wrapper">
                    <Icon iconName="phone" />
                    <p className="paragraph-md">347-889-8848</p>
                </div>
                </div>
                
            </div>
        </div>
    );
};

export { AboutContent };
