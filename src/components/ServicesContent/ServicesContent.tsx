import React from "react";
import { Service } from "./types";
import "./ServicesContent.css";
import { Icon } from "../../design-system/Icon";
import styled from "styled-components";

type ServiceProps = {
    services: Service[];
};

const StyledIcon = styled(Icon)`
    height: 7rem;
    width: 7rem;
`;

const ServicesContent: React.FC<ServiceProps> = ({ services }) => {
    return (
        <div className="services-content">
            <p className="display-lg">Let's Explore my</p>
            <h2 className="heading-2">Services</h2>
            <div className="services-box__wrapper">
                {services.map((service, idx) => {
                    return (
                        <div key={idx} className="service">
                            <StyledIcon iconName={service.iconName} />
                            <h3 className="heading-3">{service.title}</h3>
                            <p className="paragraph-md">
                                {service.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export { ServicesContent };
