import React, { useState } from "react";
import styled from "styled-components";
import ArrowLeftBlackImage from "../images/icons/arrow-left-black.svg";
import ArrowRightWhiteImage from "../images/icons/arrow-right-white.svg";
import { Button } from "../components/Button";
import { Feeling, feelingsTable, NERTLogSteps, UserFeeling } from "../constants/thoughtsAndFeelings";

const ExperienceDescription = ({ className, currentStep }: { className?: string, currentStep: NERTLogSteps }) => {
    return (
        <div className={`${className} ${currentStep === NERTLogSteps.RecordNegativeExperience ? "" : "displayNone"}`}>
            <h2>Please briefly describe your negative experience:</h2>
            <input type="text" placeholder="My negative experience..." />
        </div>
    )
}
const StyledExperienceDescription = styled(ExperienceDescription)`
`;

const FeelingPill = ({className, style, userSelected, feelingName, feelingParent, amountFeelingBefore, onAddClicked, onUpdateClicked, onRemoveClicked}: {className?: string, style?: any, userSelected: Boolean, feelingName: string, feelingParent?: string, amountFeelingBefore?: number, onAddClicked?: any, onUpdateClicked?: any, onRemoveClicked?: any}) => {
    const [expanded, setExpanded] = useState(false);
    const [amount, setAmount] = useState(0);

    React.useEffect(() => {
        setAmount(amountFeelingBefore);
    }, [amountFeelingBefore]);

    if (userSelected) {
        return (
            <div className={`${className}`} style={style}>
                <div className="feelingPill__top" onClick={(e) => { setExpanded(!expanded); e.preventDefault(); }}>
                    <button onClick={(e) => { setExpanded(!expanded); e.preventDefault(); }}>{expanded ? "-" : "+"}</button>
                    <span>{feelingName} ({amountFeelingBefore}%)</span>
                </div>
                <div className={`feelingPill__bottom ${expanded ? "" : "displayNone"}`}>
                    <p>Intensity: {amountFeelingBefore}%</p>
                    <input type="range" defaultValue={amountFeelingBefore} min={0} max={100} step={5} onChange={(e) => {
                        onUpdateClicked(feelingName, parseInt(e.target.value));
                    }} />
                    <button onClick={(e) => {
                        setExpanded(false);
                        e.preventDefault();
                    }}>Update</button>
                    <button onClick={(e) => {
                        onRemoveClicked(feelingName);
                        e.preventDefault();
                    }}>Remove</button>
                </div>
            </div>
        );
    } else {
        return (
            <div className={`${className}`} style={style} >
                <div className="feelingPill__top" onClick={(e) => { setExpanded(!expanded); e.preventDefault(); }}>
                    <button onClick={(e) => { setExpanded(!expanded); e.preventDefault(); }}>{expanded ? "-" : "+"}</button>
                    <span>{feelingName}</span>
                </div>
                <div className={`feelingPill__bottom ${expanded ? "" : "displayNone"}`}>
                    <p>Intensity: {amount}%</p>
                    <input type="range" defaultValue={amount} min={0} max={100} step={5} onChange={(e) => {
                        setAmount(parseInt(e.target.value));
                    }} />
                    <button onClick={(e) => {
                        onAddClicked(new UserFeeling({
                            name: feelingName,
                            amountFeelingBefore: amount
                        }));
                        e.preventDefault();
                    }}>Add</button>
                </div>
            </div>
        );
    }
}
const StyledFeelingPill = styled(FeelingPill)`
display: flex;
font-size: 16px;
font-weight: ${props => props.feelingParent ? "400" : "700"};
padding: 12px 16px;
border-radius: 8px;
align-items: center;
justify-content: center;
gap: 4px;
flex-direction: column;

.feelingPill {
    &__top {
        display: flex;
        width: 100%;
        cursor: pointer;
        align-items: center;

        button {
            text-align: left;
            width: 16px;
            height: 24px;
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 0;
        }
    }

    &__bottom {
        display: flex;
        flex-direction: column;
        margin: 8px 0 0 0;

        p {
            margin: 0;
        }

        input {
            margin: 0 0 8px 0;
        }
    }
}
`;

const InitialFeelingsList = ({ className, currentStep }: { className?: string, currentStep: NERTLogSteps }) => {
    const [userFeelingsList, setUserFeelingsList] = useState<UserFeeling[]>([]);

    const onAddClicked = newUserFeeling => {
        setUserFeelingsList(userFeelingsList => [...userFeelingsList, newUserFeeling]);
    }

    const onUpdateClicked = (feelingName, amountFeelingBefore) => {
        setUserFeelingsList(userFeelingsList.map(el => {
            if (el.name === feelingName) {
                el.amountFeelingBefore = amountFeelingBefore;
            }
            return el;
        }));
    }

    const onRemoveClicked = feelingName => {
        setUserFeelingsList(userFeelingsList.filter(el => el.name !== feelingName));
    }

    return (
        <div className={`${className} ${currentStep === NERTLogSteps.IdentifyNegativeFeelings ? "" : "displayNone"}`}>
            <h2>How do you feel right now?<br />How intensely are you feeling those emotions?</h2>
            <div className="initialFeelingsList__top">
                {
                    userFeelingsList.map((node) => {
                        const feeling = feelingsTable.flat().find((el) => { return el.name.toLowerCase() === node.name.toLowerCase(); });

                        if (feeling) {
                            return (
                                <StyledFeelingPill
                                    key={node.name}
                                    feelingName={node.name}
                                    feelingParent={feeling.feelingParent}
                                    amountFeelingBefore={node.amountFeelingBefore}
                                    userSelected={true}
                                    style={{ "backgroundColor": feeling.pillColorHex }}
                                    onUpdateClicked={onUpdateClicked}
                                    onRemoveClicked={onRemoveClicked}
                                />
                            )
                        } else {
                            return null;
                        }
                    })
                }
            </div>
            <div className="initialFeelingsList__bottom">
                {
                    feelingsTable.map((outer) => {
                        return (
                            <div className="initialFeelingsList__categoryContainer" key={outer[0].name}>
                                {
                                    outer.map((node) => {
                                        const userFeeling = userFeelingsList.find((el) => { return el.name.toLowerCase() === node.name.toLowerCase(); })

                                        if (userFeeling) {
                                            return null;
                                        } else {
                                            return (
                                                <StyledFeelingPill
                                                    key={node.name}
                                                    feelingName={node.name}
                                                    feelingParent={node.feelingParent}
                                                    amountFeelingBefore={node.amountFeelingBefore}
                                                    userSelected={false}
                                                    style={{ "backgroundColor": node.pillColorHex }}
                                                    onAddClicked={onAddClicked}
                                                />
                                            )
                                        }
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
const StyledInitialFeelingsList = styled(InitialFeelingsList)`
display: flex;
flex-direction: column;
padding: 0 24px;

h2 {
    margin: 0 0 12px 0;
}

.initialFeelingsList {
    &__top {
        flex: 1;
        background-color: rgba(0, 0, 0, 0.2);
        margin: 0;
        padding: 8px;
        box-shadow: inset 15px 15px 15px -10px rgba(0, 0, 0, 0.9);
        box-sizing: border-box;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: flex-start;
    }

    &__bottom {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-wrap: wrap;
        gap: 16px;
        padding: 12px 0;
    }

    &__categoryContainer {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 4px;
        align-items: flex-start;
    }
}
`;

const NewLogView = ({ className, currentStep, setCurrentStep }: { className?: string, currentStep: NERTLogSteps, setCurrentStep: (number) => void }) => {
    return (
        <div className={className}>
            <header>
                <h1>NERT Log · Step {currentStep + 1}/{NERTLogSteps.Completed + 1}</h1>
            </header>
            <main>
                <form className="logView__form">
                    <ExperienceDescription currentStep={currentStep} />
                    <StyledInitialFeelingsList currentStep={currentStep} />
                </form>
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
            </main>
        </div>
    );
}
export const StyledNewLogView = styled(NewLogView)`
min-height: 100vh;
display: flex;
flex-direction: column;

header {
    margin: 5px 48px 16px 48px;

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
        margin-bottom: 58px;
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
