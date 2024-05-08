import "./HeaderRight.css";
import heroImg from "../../assets/images/05.png"
const HeaderRight = () => {
    return (
        <div className="header-right">
                <img className="hero-img"  src={heroImg} alt="" />
        </div>
    );
};

export { HeaderRight };
