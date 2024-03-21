import "./HeaderRight.css";
import heroImg from "../../assets/headerImg.png"
const HeaderRight = () => {
    return (
        <div className="header-right">
            <div className="img-wrapper">
                <img className="hero-img"  src={heroImg} alt="Woman" />
            </div>
        </div>
    );
};

export { HeaderRight };
