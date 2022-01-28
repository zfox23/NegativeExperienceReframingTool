import React from "react"
import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";
import { zIndices } from "../constants/z-indices";
import TwitterImage from "../images/icons/twitter-white.svg";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: Roboto, Helvetica, Arial, sans-serif;
        font-weight: normal;
        word-wrap: break-word;
        font-kerning: normal;
        position: relative;
    }

    .displayNone {
        display: none !important;
    }
`

const Footer = ({ className }: { className?: string }) => (
    <footer className={className}>
        <p>Created by Zach Fox <span>·</span></p>
        <a href="https://twitter.com/valefox" target="_blank" rel="noreferrer">
            <img
                src={TwitterImage}
                alt="@Valefox on Twitter" />
        </a>
    </footer>
);
const StyledFooter = styled(Footer)`
width: 100%;
background: #1B1B1B;
position: relative;
display: flex;
justify-content: center;
align-items: center;
color: white;
padding: 0 24px;
box-sizing: border-box;
z-index: ${zIndices.mainContent};

p {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 18px;
    margin: 0 8px 0 0;
    padding: 0;
}

span {
    margin: 0 0 0 8px;
}

a {
    width: 42px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
}

img {
    width: 24px;
    height: 24px;
}
`;

const layoutStyle = {
    "minHeight": "100vh",
    "display": "flex",
    "flexDirection": "column"
};

export default function Layout({ children, nofooter }) {
    return (
        <React.Fragment>
            <div style={layoutStyle as React.CSSProperties}>
                <GlobalStyle />
                {children}
                {nofooter ? null : <StyledFooter />}
            </div>
        </React.Fragment>
    )
}
