export type ButtonColor = "primary" | "secondary" | "dribble" | "success";

export type ButtonProps = {
    color?: ButtonColor;
    disabled?: boolean;
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
    buttonRef?: React.ForwardedRef<HTMLButtonElement>;
}