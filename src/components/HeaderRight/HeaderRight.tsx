import "./HeaderRight.css";
import heroImg from "../../assets/fixed.png";

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
