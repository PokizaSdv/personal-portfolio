import { useState, useRef } from "react";
import  emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { Input } from "../../design-system/Input";
import "./ContactContent.css";
import { Button } from "../../design-system/Button";

const ContactContent = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");

    const form = useRef<HTMLFormElement | null>(null);

    const [isFormSubmitting, setIsFormSubmitting] = useState(false);
    const [isError, setIsError] = useState<boolean>(false);

    const onChangeFirstName = (value: string) => {
        setFirstName(value);
    };

    const onChangeLastName = (value: string) => {
        setLastName(value);
    };
    const onChangeEmail = (value: string) => {
        setEmail(value);
    };
    const onChangePhoneNumber = (value: string) => {
        setPhoneNumber(value);
    };

    const onChangeMessage = (value: string) => {
        setMessage(value)
    }

    const isFormSubmittable = firstName && lastName && email && phoneNumber && message;

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || "";
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "";
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "";

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsFormSubmitting(true);

        if (form.current) {
            emailjs
                .sendForm(serviceId, templateId, form.current, {
                    publicKey: publicKey
                })
                .then(
                    () => {
                        setIsFormSubmitting(false);

                        toast.success(
                            "Thank you! Your message successfully sent"
                        );
                        setFirstName("");
                        setLastName("");
                        setEmail("");
                        setPhoneNumber("")
                        setMessage("");
                    },
                    () => {
                        setIsFormSubmitting(false);
                        setIsError(true);
                        toast.error(
                            "Oops. Something wrong! Please email me at pokizadev@gmail.com"
                        );
                    }
                );
        }
    };

    return (
        <div className="contact__content">
            <h2 id="contactme" className="heading-2">
                Contact Me
            </h2>
            <p className="paragraph-md contact-text">
                Interested in working together or just have a question? Let's
                connect and make things happen.
            </p>
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
                <div className="two-inputs__wrapper">
                    <Input
                        labelText="First Name"
                        value={firstName}
                        onChange={onChangeFirstName}
                        name="firstName"
                    />
                    <Input
                        labelText="Last Name"
                        value={lastName}
                        onChange={onChangeLastName}
                        name="lastName"

                    />
                </div>
                <div className="two-inputs__wrapper">
                    <Input
                        type="email"
                        labelText="Email"
                        value={email}
                        name="email"
                        onChange={onChangeEmail}
                    />
                    <Input
                        type="tel"
                        labelText="Phone Number"
                        value={phoneNumber}
                        name="phoneNumber"

                        onChange={onChangePhoneNumber}
                    />
                </div>
                <div className="textarea-wrapper">
                    <Input
                        type="textarea"
                        labelText="Message"
                        value={message}
                        name="message"
                        onChange={onChangeMessage}
                        placeholder="Type your message"
                    />
                </div>
                <div className="actions">
                    <Button color="primary" className="paragraph-md" disabled={isFormSubmitting || !isFormSubmittable}>
                        Submit
                    </Button>
                </div>
                <Toaster/>
            </form>
        </div>
    );
};

export { ContactContent };
