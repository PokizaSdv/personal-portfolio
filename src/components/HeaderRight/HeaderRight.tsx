import "./HeaderRight.css";
import heroImg from "../../assets/hero3.png";

const HeaderRight = () => {
    return (
        <div className="header-right">
            <div className="img-wrapper">
                <img src={heroImg} alt="Woman" />
            </div>
        </div>
    );
};

export { HeaderRight };
