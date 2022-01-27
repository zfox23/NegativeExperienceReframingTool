import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { zIndices } from "../constants/z-indices";
import MenuButtonBlackImage from "../images/icons/menu-button-black.svg";

const Sidebar = ({ className, expanded, toggleExpanded}: { className?: string, expanded: Boolean, toggleExpanded: () => void }) => {    
    return (
        <div className={className}>
            <button className="sidebar__toggleButton" onClick={toggleExpanded}><img src={MenuButtonBlackImage} alt="Toggle sidebar menu" /></button>
            <div className={`sidebar__scrim ${expanded ? "sidebar__scrim--opaque" : "sidebar__scrim--transparent"}`} onClick={toggleExpanded} />
            <div className={`sidebar__mainContainer ${expanded ? "sidebar__expanded" : "sidebar__collapsed"}`}>
                <Link to="/">NERT Home</Link>
                <Link to="/import-export">Log Import/Export</Link>
            </div>
        </div>
    );
};
export const StyledSidebar = styled(Sidebar)`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: ${zIndices.sidebarScrim};
pointer-events: none;

.sidebar__toggleButton {
    z-index: ${zIndices.sidebarButton};
    width: 42px;
    height: 42px;
    background: transparent;
    border: none;
    cursor: pointer;
    position: ${props => (props.expanded ? "fixed" : "absolute")};
    top: 0;
    left: 0;
    pointer-events: all;
}

.sidebar__scrim {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: rgba(0, 0, 0, 0.7);
    overflow: hidden;
    transition: opacity 0.35s ease-in-out;

    &--opaque {
        opacity: 1.0;
        pointer-events: all;
    }

    &--transparent {
        opacity: 0;
    }
}

.sidebar__mainContainer {
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
    background-color: white;
    transition: left 0.35s ease-in-out;
    width: 200px;
    margin: 0;
    padding: 56px 16px 0 16px;
    box-sizing: border-box;
    z-index: ${zIndices.sidebar};
    min-height: 100%;
    pointer-events: all;

    &.sidebar__collapsed {
        left: -200px;
    }
    
    &.sidebar__expanded {
        left: 0;
    }
}

`;