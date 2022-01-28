import React, { useState } from "react";
import styled from "styled-components";
import ArrowLeftBlackImage from "../images/icons/arrow-left-black.svg";
import ArrowRightWhiteImage from "../images/icons/arrow-right-white.svg";
import { Button } from "../components/Button";
import { NERTLogSteps, UserFeeling } from "../constants/thoughtsAndFeelings";
import { StyledLogSummary } from "../components/LogSummary";
import { StyledInitialFeelingsList } from "../components/InitialFeelingsList";
import { StyledExperienceDescription } from "../components/ExperienceDescription";

const NewLogView = ({ className, currentStep, setCurrentStep }: { className?: string, currentStep: NERTLogSteps, setCurrentStep: (number) => void }) => {
    const [userNegativeExperience, setUserNegativeExperience] = useState<string>(null);
    const [userInitialFeelingsList, setUserInitialFeelingsList] = useState<UserFeeling[]>([]);

    return (
        <div className={className}>
            <header>
                <h1>NERT Log · Step {currentStep + 1}/{NERTLogSteps.Completed + 1}</h1>
            </header>
            <form className="logView__form">
                <StyledExperienceDescription currentStep={currentStep} userNegativeExperience={userNegativeExperience} setUserNegativeExperience={setUserNegativeExperience} />
                <StyledInitialFeelingsList currentStep={currentStep} userInitialFeelingsList={userInitialFeelingsList} setUserInitialFeelingsList={setUserInitialFeelingsList} />
            </form>
            <StyledLogSummary userInitialFeelingsList={userInitialFeelingsList} userNegativeExperience={userNegativeExperience} />
            <div className="logView__bottom">
                <Button primary={false} borderless={true} fontSize={18} disabled={currentStep <= NERTLogSteps.RecordNegativeExperience} onClick={(e) => { e.preventDefault(); setCurrentStep(Math.max(NERTLogSteps.RecordNegativeExperience, currentStep - 1)); }}>
                    <img
                        src={ArrowLeftBlackImage}
                        alt='A black left arrow, designating "back"'
                        height={13}
                        width={8}
                    />
                    <span>Back</span>
                </Button>
                <Button primary={true} borderless={true} fontSize={18} disabled={currentStep >= NERTLogSteps.Completed} onClick={(e) => { e.preventDefault(); setCurrentStep(Math.min(NERTLogSteps.Completed + 1, currentStep + 1)); }}>
                    <span>Save &amp; Continue</span>
                    <img
                        src={ArrowRightWhiteImage}
                        alt='A white right arrow, designating "continue"'
                        height={13}
                        width={8}
                    />
                </Button>
            </div>
        </div>
    );
}
export const StyledNewLogView = styled(NewLogView)`
min-height: 100vh;
display: flex;
flex-direction: column;

header {
    margin: 5px 248px 8px 48px;

    h1 {
        width: 100%;
        max-width: 800px;
        font-size: 32px;
        line-height: 32px;
        font-weight: 100;
        padding: 0;
        margin: 0;
    }
}

.logView {
    &__form {
        flex: 1;
        margin: 0 240px 58px 0;
    }

    &__bottom {
        box-sizing: border-box;
        height: 58px;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: flex-end;
        gap: 24px;
        padding: 8px 8px;
        background-color: rgba(0, 0, 0, 0.7);
    }
}
`;
