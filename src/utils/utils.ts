export const trimWhiteSpaces = (str:string) => {
    return str.split(" ").filter((item) => item !== "").join(" ")
}

export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
