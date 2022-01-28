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
            <h3>Guidelines:</h3>
            <ul>
                <li><strong>Be objective.</strong></li>
                <li>Describe an event, leaving your thoughts and feelings aside.</li>
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
    margin: 0 0 8px 0;
}
`;
