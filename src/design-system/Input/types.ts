export type InputType = "text" | "email" | "password" | "tel" | "textarea";


export type InputProps = {
    type?: InputType;
    disabled?: boolean;
    placeholder?: string;
    className?: string;
    id?: string;

    error?: boolean;
    hintMessage?: string;
    labelText?: string;

    onChange: (value: string) => void;
    value: string;
};