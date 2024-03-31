import React from "react";
import { Service } from "./types";
import "./ServicesContent.css";
import { Icon } from "../../design-system/Icon";



import styled from "styled-components";

type ServiceProps = {
    services: Service[];
};

const StyledImg = styled.img`
    height: 4rem;
    width: 4rem;
`;

const ServicesContent: React.FC<ServiceProps> = ({ services }) => {
    return (
        <div className="services-content">
            <p id="services" className="display-lg">Check out my</p>
            <h2 className="heading-2">Services</h2>
            <div className="services-box__wrapper">
                {services.map((service, idx) => {
                    return (
                        <div key={idx} className="service">
                            <div className="img-wrapper"> <StyledImg src={service.imgUrl} /></div>
                           
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
