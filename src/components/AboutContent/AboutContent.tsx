import aboutImg from "../../assets/3.png";
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
                <p className="paragraph-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam error dolorum tempora adipisci necessitatibus quia reiciendis, ad, sed sapiente ex consectetur. Officiis nostrum eveniet quos distinctio nam quaerat vitae saepe?</p>
            </div>
        </div>
    );
};

export { AboutContent };
