import React from "react";
import styled from "styled-components";

export const Button = styled.button<{
    primary?: Boolean;
    borderless?: Boolean;
    fontSize?: number;
}>`
background: ${props => props.primary ? "#2d6bbd" : "#FFFFFF"};
border: ${props => props.borderless ? "none" : "2px solid #000000"};
color: ${props => props.primary ? "#FFFFFF" : "#000000"};
border-radius: 8px;

display: flex;
align-items: center;
justify-content: center;
gap: 16px;
font-size: ${props => props.fontSize ? `${props.fontSize}px` : "22px"};
font-family: Roboto, Helvetica, Arial, sans-serif;
font-weight: 500;
padding: 8px 16px;
cursor: pointer;
`;
