import { useState } from "react";
import { Input } from "../../design-system/Input";
import "./ContactContent.css";
import { Button } from "../../design-system/Button";

const ContactContent = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

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

    return (
        <div className="contact__content">
            <h2 id="contactme" className="heading-2">Contact Me</h2>
            <p className="paragraph-md contact-text" >
                Interested in working together or just have a question? Let's
                connect and make things happen.
            </p>
            <form className="contact-form">
                <div className="two-inputs__wrapper">
                    <Input
                        labelText="First Name"
                        value={firstName}
                        onChange={onChangeFirstName}
                    />
                    <Input
                        labelText="Last Name"
                        value={lastName}
                        onChange={onChangeLastName}
                    />
                </div>
                <div className="two-inputs__wrapper">
                    <Input
                        type="email"
                        labelText="Email"
                        value={email}
                        onChange={onChangeEmail}
                    />
                    <Input
                        type="tel"
                        labelText="Phone Number"
                        value={phoneNumber}
                        onChange={onChangePhoneNumber}
                    />
                </div>
                <Input
                    type="textarea"
                    labelText="Message"
                    value=""
                    onChange={() => {}}
                    placeholder="Type your message"
                />
                 <div className="actions">
                    <Button color="primary" className="paragraph-md">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
};

export { ContactContent };
