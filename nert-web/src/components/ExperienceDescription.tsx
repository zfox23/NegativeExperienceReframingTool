import React, { useState } from "react";
import styled from "styled-components";
import { NERTLogSteps } from "../constants/thoughtsAndFeelings";

const ExperienceDescription = ({ className, currentStep, userNegativeExperience, setUserNegativeExperience }: { className?: string, currentStep: NERTLogSteps, userNegativeExperience: any, setUserNegativeExperience: any }) => {
    const [experience, setExperience] = useState<string>(null);

    React.useEffect(() => {
        setExperience(userNegativeExperience);
    }, [userNegativeExperience]);

    return (
        <div className={`${className} ${currentStep === NERTLogSteps.RecordNegativeExperience ? "" : "displayNone"}`}>
            <h2>Please briefly describe your negative experience:</h2>
            <input type="text" placeholder="My negative experience..." onChange={(e) => {
                setUserNegativeExperience(e.target.value);
            }} />
            <h3>Guidelines</h3>
            <ul>
                <li><strong>Be objective.</strong> Describe an event, leaving your thoughts and feelings aside as much as possible.</li>
                <li><strong>Examples:</strong></li>
                <ul>
                    <li>My partner and I had our second fight of the week about doing the dishes.</li>
                    <li>I lost all of my lives in Candy Crush and threw my phone across the room.</li>
                    <li>I shared something about myself to a friend and they laughed at me.</li>
                </ul>
            </ul>
        </div>
    )
}
export const StyledExperienceDescription = styled(ExperienceDescription)`
padding: 0 24px;

h2 {
    margin: 0 0 8px 0;
}

input {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 18px;
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
    margin: 0 0 12px 0;
}

h3 {
    margin: 0;
}

ul {
    margin: 0;
    padding: 0 0 0 32px;
}
`;
