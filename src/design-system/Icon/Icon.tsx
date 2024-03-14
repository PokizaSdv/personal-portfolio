import sprite from "./sprite.svg";
import { IconProps } from "./types";

const Icon: React.FC<IconProps> = ({ iconName, className, onClick }) => {
    const handleOnClick = () => {
        onClick && onClick();
    };

    return (
        <svg
            height="7rem"
            width="7rem"
            className={className || ""}
            onClick={onClick}
        >
            <use xlinkHref={`${sprite}#${iconName}`} />
        </svg>
    );
};

export { Icon };
