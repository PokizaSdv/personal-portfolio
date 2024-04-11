import React from "react";
import { InputProps } from "./types";
import { Label } from "../Label";
import { trimWhiteSpaces } from "../../utils";
import "./Input.css";



const Input: React.FC<InputProps> = (props) => {
    const {
        type,
        error,
        id,
        disabled,
        placeholder,
        hintMessage,
        labelText,
        className,
        onChange,
        value,
        name
    } = props;


    const errorClassName = error ? "input-error" : "";
    const textareaClassName = type === "textarea" ? "input-textarea" : "";

    const finalClassNames = trimWhiteSpaces(
        `input ${
            className || ""
        } ${errorClassName} ${textareaClassName}`
    );

    const hintMessageClass = trimWhiteSpaces(`hint-message ${error ? "hint-message--error" : ""}`);

    const handleOnChange = (
        e:
            | React.ChangeEvent<HTMLTextAreaElement>
            | React.ChangeEvent<HTMLInputElement>
    ) => {
        onChange(e.target.value);
    };


    return (
        <div className={`input-wrapper ${className || ""} `}>
            {labelText ? (
                <Label htmlFor={id} disabled={disabled} error={error}>
                    {labelText}
                </Label>
            ) : null}
            {type === "textarea" ? (
                <textarea
                    placeholder={placeholder}
                    className={finalClassNames}
                    disabled={disabled}
                    id={id}
                    onChange={handleOnChange}
                    value={value}
                    name={name}
                />
            ) : (
                <input
                    className={finalClassNames}
                    type={type}
                    placeholder={placeholder}
                    disabled={disabled}
                    id={id}
                    onChange={handleOnChange}
                    value={value}
                    name={name}
                />
            )}

            {hintMessage ? <span className={hintMessageClass}>{hintMessage}</span> : null} 
        </div> 
    );
};

export { Input };