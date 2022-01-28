import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Button } from "../components/Button";
import { Divider } from "../components/Divider";
import Layout from "../components/Layout";
import SEOHeader from "../components/SEOHeader";
import { StyledSidebar } from "../components/Sidebar";
import ArrowRightWhiteImage from "../images/icons/arrow-right-white.svg";

const IndexTop = ({ className }: { className?: string }) => {
    return (
        <div className={className}>
            <h1>The <span>Negative Experience Reframing Tool</span></h1>
        </div>
    );
};
const StyledIndexTop = styled(IndexTop)`
display: flex;
justify-content: center;
width: 100%;
margin: 0 0 8px 0;

h1 {
    width: 100%;
    max-width: 800px;
    font-size: 48px;
    line-height: 48px;
    font-weight: 100;
    margin: 5px 48px 16px 48px;
    padding: 0;
    display: inline-block;

    span {
        font-weight: 300;
        display: block;
        text-decoration: underline;
    }
}
`;

const MainDetails = ({ className }: { className?: string }) => {
    return (
        <div className={className}>
            <div className="mainInner">
                <div className="mainInner__left">
                    <p>Closely examining our thoughts and feelings after a negative experience can help us <strong>feel better</strong>.</p>
                    <p>With the NERT as your guide, learn to calm your mind, identify cognitive distortions, and <strong>achieve growth</strong>.</p>
                    <div className="mainInner__buttonContainer">
                        <Button primary={true} borderless={true}>
                            <span>Create New NERT Log</span>
                            <img
                                    src={ArrowRightWhiteImage}
                                    alt="Create new NERT log"
                                    height={13}
                                    width={8}
                                    />
                        </Button>
                        <p>Data remains privately on your device.</p>
                    </div>
                </div>
                <StaticImage
                    className="mainInner__right"
                    src="../images/nert-01.jpg"
                    alt="Feel better with the Negative Experience Reframing Tool"
                    loading="eager"
                />
            </div>
        </div>
    );
};
const StyledMainDetails = styled(MainDetails)`
width: 100%;
background-color: #E4ECEF;
display: flex;
justify-content: center;
font-size: 22px;
font-weight: 400;
margin: 0 0 56px 0;
padding: 0;

p {
    margin: 0 0 24px 0;
}

.mainInner {
    width: 100%;
    max-width: 800px;
    margin: 0 24px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    &__left {
        max-width: 580px;
        padding: 36px 0;
        display: flex;
        flex-direction: column;
    }
    
    &__buttonContainer {
        width: 290px;
        display: flex;
        flex-direction: column;

        p {
            font-size: 14px;
            font-weight: 300;
            margin: 0;
            text-align: center;
        }
    }

    &__right {
        width: 200px;
    }
}
`;

const Bottom = ({className}: {className?: string}) => {
    return (
        <div className={className}>
            <StyledSixSteps />
            <Divider />
            <StyledAbout />
        </div>
    )
}
const StyledBottom = styled(Bottom)`
display: flex;
flex-direction: column;
max-width: 800px;
margin: 0 24px 24px 24px;
`;

const SixSteps = ({ className }: { className?: string }) => {
    return (
        <div className={className}>
            <div className="sixSteps__left">
                <h2>NERT's Six Steps</h2>
                <p>Through a proven, repeatable process, we can better understand ourselves and emerge from an experience with a clearer mind and calmer body.</p>
                <ol>
                    <li><strong>Record</strong> the negative experience.</li>
                    <li><strong>Identify</strong> the related negative feelings.</li>
                    <li><strong>Pinpoint</strong> the related negative thoughts.</li>
                    <li><strong>Recognize</strong> the cognitive distortions.</li>
                    <li><strong>Reframe</strong> the thoughts.</li>
                    <li><strong>Recalibrate</strong> the mind.</li>
                </ol>
                <Button primary={true} borderless={true}>
                    <span>Try Now</span>
                    <img
                            src={ArrowRightWhiteImage}
                            alt="Create new NERT log"
                            height={13}
                            width={8}
                            />
                </Button>
            </div>
            <StaticImage
                className="sixSteps__right"
                src="../images/nert-02.jpg"
                alt="Learn about NERT's six steps"
            />
        </div>
    );
}
const StyledSixSteps = styled(SixSteps)`
width: 100%;
margin: 0 0 48px 0;
display: flex;
flex-wrap: wrap;
justify-content: space-between;

.sixSteps {
    &__left {
        max-width: 580px;

        button {
            margin: 16px 0 0 0;
        }
    }

    &__right {
        width: 200px;
    }
}

h2 {
    font-size: 40px;
    line-height: 40px;
    font-weight: 300;
    margin: 0;
}

p {
    margin: 2px 0 16px 0;
    font-size: 18px;
    font-weight: 400;
}

ol {
    margin: 0 0 8px 0;

    li {
        font-size: 22px;
    }
}
`;

const About = ({ className }: { className?: string }) => {
    return (
        <div className={className}>
            <h2>About NERT</h2>
            <p>Zach Fox created NERT based on psychological tools a therapist taught him which have helped him reframe countless negative experiences.</p>
            <p>His goal is to create therapeutic and mindfulness-based applications to help others through their own challenging times with a focus on user experience, accessibility, and data privacy.</p>
            <p>Zach is not a licensed therapist, and NERT is not a replacement for a therapist. Please contact Zach <a href="https://twitter.com/valefox" target="_blank">on Twitter</a> if you have any suggestions, and please dial 911 if you are having a medical emergency.</p>
        </div>
    );
}
const StyledAbout = styled(About)`
width: 100%;
margin: 48px 0 0 0;
padding: 0;

h2 {
    font-size: 40px;
    line-height: 40px;
    font-weight: 300;
    margin: 0 0 8px 0;
}

p {
    font-size: 22px;
    font-weight: 400;
}
`;

const IndexPage = ({className}: {className?: string}) => {
    const [sidebarExpanded, setSidebarExpanded] = useState(false);

    return (
        <Layout>
            <SEOHeader />
            <StyledSidebar expanded={sidebarExpanded} toggleExpanded={() => { setSidebarExpanded(!sidebarExpanded); }}/>
            <main className={className}>
                <StyledIndexTop />
                <StyledMainDetails />
                <StyledBottom />
            </main>
        </Layout>
    )
}

const StyledIndexPage = styled(IndexPage)`
display: flex;
flex-direction: column;
align-items: center;
flex: 1 0 auto;
`;

export default StyledIndexPage;
