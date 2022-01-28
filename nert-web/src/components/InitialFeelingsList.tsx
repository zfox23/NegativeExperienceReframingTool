import React, { useState } from "react";
import styled from "styled-components";
import { feelingsTable, NERTLogSteps } from "../constants/thoughtsAndFeelings";
import { StyledFeelingPill } from "./FeelingPill";

const InitialFeelingsList = ({ className, currentStep, userInitialFeelingsList, setUserInitialFeelingsList }: { className?: string, currentStep: NERTLogSteps, userInitialFeelingsList: any, setUserInitialFeelingsList: any }) => {

    const onAddClicked = newUserFeeling => {
        setUserInitialFeelingsList(userInitialFeelingsList => [...userInitialFeelingsList, newUserFeeling]);
    }

    const onUpdateClicked = (feelingName, amountFeelingBefore) => {
        setUserInitialFeelingsList(userInitialFeelingsList.map(el => {
            if (el.name === feelingName) {
                el.amountFeelingBefore = amountFeelingBefore;
            }
            return el;
        }));
    }

    const onRemoveClicked = feelingName => {
        setUserInitialFeelingsList(userInitialFeelingsList.filter(el => el.name !== feelingName));
    }

    return (
        <div className={`${className} ${currentStep === NERTLogSteps.IdentifyNegativeFeelings ? "" : "displayNone"}`}>
            <h2>How do you feel right now?<br />How intensely are you feeling those emotions?</h2>
            <div className="initialFeelingsList__top">
                {
                    userInitialFeelingsList.map((node) => {
                        const feeling = feelingsTable.flat().find((el) => { return el.name.toLowerCase() === node.name.toLowerCase(); });

                        if (feeling) {
                            return (
                                <StyledFeelingPill
                                    key={node.name}
                                    feelingName={node.name}
                                    feelingParent={feeling.feelingParent}
                                    amountFeelingBefore={node.amountFeelingBefore}
                                    editable={true}
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
                                        const userFeeling = userInitialFeelingsList.find((el) => { return el.name.toLowerCase() === node.name.toLowerCase(); })

                                        if (userFeeling) {
                                            return null;
                                        } else {
                                            return (
                                                <StyledFeelingPill
                                                    key={node.name}
                                                    feelingName={node.name}
                                                    feelingParent={node.feelingParent}
                                                    amountFeelingBefore={node.amountFeelingBefore}
                                                    editable={true}
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
export const StyledInitialFeelingsList = styled(InitialFeelingsList)`
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
