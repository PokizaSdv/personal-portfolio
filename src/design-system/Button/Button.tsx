import { ButtonProps } from "./types";
import { trimWhiteSpaces } from "../../utils";
import "./Button.css";

const colorClassNames = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    dribble: "btn-dribble",
    success: "btn-success"
};

const Button: React.FC<ButtonProps> = (props) => {
    const { color, disabled, className, children, onClick, buttonRef } = props;

    const colorClassName = color !== undefined ? colorClassNames[color] : "";
    const finalClassName = `btn ${colorClassName} ${className || ""}`;
    return (
        <button
            className={trimWhiteSpaces(finalClassName)}
            disabled={disabled}
            onClick={onClick}
            ref={buttonRef}
        >
            {children}
        </button>
    );
};

export { Button };
