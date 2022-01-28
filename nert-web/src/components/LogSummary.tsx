import React, { useState } from "react";
import styled from "styled-components";
import { feelingsTable, UserFeeling } from "../constants/thoughtsAndFeelings";
import { StyledFeelingPill } from "./FeelingPill";

const LogSummary = ({ className, userInitialFeelingsList, userNegativeExperience }: { className?: string, userInitialFeelingsList: UserFeeling[], userNegativeExperience: string }) => {
    return (
        <div className={className}>
            <h2>Log Summary</h2>
            <div className={`summary__experienceContainer ${userNegativeExperience && userNegativeExperience.length ? "" : "displayNone"}`}>
                <h3>Your experience:</h3>
                <p>{userNegativeExperience}</p>
            </div>
            <div className={`summary__feelingsContainer ${userInitialFeelingsList && userInitialFeelingsList.length ? "" : "displayNone"}`}>
                <h3>Initially, you felt...</h3>
                <div className="summary__feelingsPillContainer">
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
                                        editable={false}
                                        style={{ "backgroundColor": feeling.pillColorHex }}
                                    />
                                )
                            } else {
                                return null;
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export const StyledLogSummary = styled(LogSummary)`
position: fixed;
right: 0;
top: 0;
bottom: 58px;
width: 240px;
border: 2px dashed rgba(0, 0, 0, 0.4);
border-width: 0 0 0 2px;
box-sizing: border-box;
padding: 8px 8px 8px 8px;

h2 {
    margin: 0 0 8px 0;
}

h3 {
    margin: 0 0 8px 0;
}

p {
    margin: 0 0 8px 0;
}

.summary {
    &__experienceContainer {
    }

    &__feelingsPillContainer {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
    }
}
`;