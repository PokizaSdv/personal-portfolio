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
                <p className="display-md reach-out_title">Feel free to reach out at</p>
                <div className="email-phone">
                    
                    <div className="wrapper">
                        <Icon iconName="email" />
                        <a className="paragraph-md" href="mailto:pokizadev@gmail.com">pokizadev@gmail.com</a>
                    </div>
                   
                    <div className="wrapper">
                        <Icon iconName="phone" />
                        <a className="paragraph-md" href="tel:+19293347203">347-889-8848</a>
                    </div>

                    <div className="wrapper">
                    <Icon iconName="github-primary" /> 
                        <a className="paragraph-md" href="https://github.com/pokizadev">github.com/pokizadev</a>
                    </div>

                    <div className="wrapper">
                    <Icon iconName="linkedin-primary" />
                        <a className="paragraph-md" href="https://www.linkedin.com/feed/">linkedin.com/in/pokizadev</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { AboutContent };
