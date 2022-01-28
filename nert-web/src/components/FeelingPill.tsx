import React, { useState } from "react";
import styled from "styled-components";
import { UserFeeling } from "../constants/thoughtsAndFeelings";

const FeelingPill = ({ className, style, editable, userSelected, feelingName, feelingParent, amountFeelingBefore, onAddClicked, onUpdateClicked, onRemoveClicked }: { className?: string, style?: any, editable: Boolean, userSelected?: Boolean, feelingName: string, feelingParent?: string, amountFeelingBefore?: number, onAddClicked?: any, onUpdateClicked?: any, onRemoveClicked?: any }) => {
    const [expanded, setExpanded] = useState(false);
    const [amount, setAmount] = useState(0);

    React.useEffect(() => {
        setAmount(amountFeelingBefore);
    }, [amountFeelingBefore]);

    if (!editable) {
        return (
            <div className={`${className}`} style={style}>
                <div className="feelingPill__top">
                    <span>{feelingName} ({amountFeelingBefore}%)</span>
                </div>
            </div>
        )
    } else if (userSelected) {
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
export const StyledFeelingPill = styled(FeelingPill)`
display: flex;
font-size: 16px;
font-weight: ${props => props.feelingParent ? "400" : "700"};
padding: ${props => props.editable ? "12px 16px" : "6px 8px"};
border-radius: 8px;
align-items: center;
justify-content: center;
gap: 4px;
flex-direction: column;

.feelingPill {
    &__top {
        display: flex;
        width: 100%;
        cursor: ${props => props.editable ? "pointer" : "normal"};
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
