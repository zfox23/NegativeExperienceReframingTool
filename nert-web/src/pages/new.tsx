import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import SEOHeader from "../components/SEOHeader";
import { StyledSidebar } from "../components/Sidebar";
import { NERTLogSteps } from "../constants/thoughtsAndFeelings";
import { StyledNewLogView } from "../views/NewLogView";

const NewLogPage = ({className}: {className?: string}) => {
    const [sidebarExpanded, setSidebarExpanded] = useState(false);
    const [currentStep, setCurrentStep] = useState<NERTLogSteps>(NERTLogSteps.RecordNegativeExperience);

    return (
        <Layout nofooter={true}>
            <SEOHeader title="New NERT Log" />
            <StyledSidebar expanded={sidebarExpanded} toggleExpanded={() => { setSidebarExpanded(!sidebarExpanded); }}/>
            <StyledNewLogView
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                />
        </Layout>
    )
}
const StyledNewLogPage = styled(NewLogPage)`
display: flex;
flex-direction: column;
align-items: center;
flex: 1 0 auto;
`;

export default StyledNewLogPage;
