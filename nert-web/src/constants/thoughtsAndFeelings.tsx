export class CognitiveDistortion {
    name: string;
    description: string;
}

export class Thought {
    nameNegative: string;
    amountNegativeBeliefBefore: number;
    amountNegativeBeliefAfter: number;
    distortions: [CognitiveDistortion];
    namesPositive: [string];
    amountPositiveBelief: number;
}

export class UserFeeling {
    name: string;
    amountFeelingBefore?: number;
    amountFeelingAfter?: number;

    constructor({name, amountFeelingBefore = 0, amountFeelingAfter = 0}: {name: string, amountFeelingBefore?: number, amountFeelingAfter?: number}) {
        this.name = name;
        this.amountFeelingBefore = amountFeelingBefore;
        this.amountFeelingAfter = amountFeelingAfter;
    }
}

export class Feeling extends UserFeeling {
    feelingParent?: string;
    pillColorHex: string;

    constructor({name, feelingParent, pillColorHex, amountFeelingBefore = 0, amountFeelingAfter = 0}: {name: string, feelingParent: string, pillColorHex: string, amountFeelingBefore?: number, amountFeelingAfter?: number}) {
        super({name, amountFeelingBefore, amountFeelingAfter});
        this.feelingParent = feelingParent;
        this.pillColorHex = pillColorHex;
    }
}

export const feelingsTable = [
    [
        new Feeling({
            name: "Sad",
            feelingParent: null,
            pillColorHex: "#7f9bf0"
        }),
        new Feeling({
            name: "Depressed",
            feelingParent: "Sad",
            pillColorHex: "#7f9bf0"
        }),
        new Feeling({
            name: "Down",
            feelingParent: "Sad",
            pillColorHex: "#7f9bf0"
        }),
        new Feeling({
            name: "Unhappy",
            feelingParent: "Sad",
            pillColorHex: "#7f9bf0"
        }),
    ],
    [
        new Feeling({
            name: "Hopeless",
            feelingParent: null,
            pillColorHex: "#9194f2"
        }),
        new Feeling({
            name: "Discouraged",
            feelingParent: "Hopeless",
            pillColorHex: "#9194f2"
        }),
        new Feeling({
            name: "Pessimistic",
            feelingParent: "Hopeless",
            pillColorHex: "#9194f2"
        }),
        new Feeling({
            name: "Despairing",
            feelingParent: "Hopeless",
            pillColorHex: "#9194f2"
        }),
    ],
    [
        new Feeling({
            name: "Lonely",
            feelingParent: null,
            pillColorHex: "#967ff0"
        }),
        new Feeling({
            name: "Unloved",
            feelingParent: "Lonely",
            pillColorHex: "#967ff0"
        }),
        new Feeling({
            name: "Unwanted",
            feelingParent: "Lonely",
            pillColorHex: "#967ff0"
        }),
        new Feeling({
            name: "Rejected",
            feelingParent: "Lonely",
            pillColorHex: "#967ff0"
        }),
        new Feeling({
            name: "Alone",
            feelingParent: "Lonely",
            pillColorHex: "#967ff0"
        }),
        new Feeling({
            name: "Abandoned",
            feelingParent: "Lonely",
            pillColorHex: "#967ff0"
        }),
    ],
    [
        new Feeling({
            name: "Inferior",
            feelingParent: null,
            pillColorHex: "#aa6dee"
        }),
        new Feeling({
            name: "Worthless",
            feelingParent: "Inferior",
            pillColorHex: "#aa6dee"
        }),
        new Feeling({
            name: "Inadequate",
            feelingParent: "Inferior",
            pillColorHex: "#aa6dee"
        }),
        new Feeling({
            name: "Defective",
            feelingParent: "Inferior",
            pillColorHex: "#aa6dee"
        }),
        new Feeling({
            name: "Incompetent",
            feelingParent: "Inferior",
            pillColorHex: "#aa6dee"
        }),
    ],
    [
        new Feeling({
            name: "Embarrassed",
            feelingParent: null,
            pillColorHex: "#e76dee"
        }),
        new Feeling({
            name: "Foolish",
            feelingParent: "Embarrassed",
            pillColorHex: "#e76dee"
        }),
        new Feeling({
            name: "Humiliated",
            feelingParent: "Embarrassed",
            pillColorHex: "#e76dee"
        }),
        new Feeling({
            name: "Self-conscious",
            feelingParent: "Embarrassed",
            pillColorHex: "#e76dee"
        }),
    ],
    [
        new Feeling({
            name: "Guilty",
            feelingParent: null,
            pillColorHex: "#e7a2ce"
        }),
        new Feeling({
            name: "Remorseful",
            feelingParent: "Guilty",
            pillColorHex: "#e7a2ce"
        }),
        new Feeling({
            name: "Ashamed",
            feelingParent: "Guilty",
            pillColorHex: "#e7a2ce"
        }),
        new Feeling({
            name: "Bad",
            feelingParent: "Guilty",
            pillColorHex: "#e7a2ce"
        }),
    ],
    [
        new Feeling({
            name: "Anxious",
            feelingParent: null,
            pillColorHex: "#f07fa1"
        }),
        new Feeling({
            name: "Worried",
            feelingParent: "Anxious",
            pillColorHex: "#f07fa1"
        }),
        new Feeling({
            name: "Panicked",
            feelingParent: "Anxious",
            pillColorHex: "#f07fa1"
        }),
        new Feeling({
            name: "Nervous",
            feelingParent: "Anxious",
            pillColorHex: "#f07fa1"
        }),
        new Feeling({
            name: "Scared",
            feelingParent: "Anxious",
            pillColorHex: "#f07fa1"
        }),
    ],
    [
        new Feeling({
            name: "Frustrated",
            feelingParent: null,
            pillColorHex: "#ee6d6d"
        }),
        new Feeling({
            name: "Stuck",
            feelingParent: "Frustrated",
            pillColorHex: "#ee6d6d"
        }),
        new Feeling({
            name: "Thwarted",
            feelingParent: "Frustrated",
            pillColorHex: "#ee6d6d"
        }),
        new Feeling({
            name: "Defeated",
            feelingParent: "Frustrated",
            pillColorHex: "#ee6d6d"
        }),
    ],
    [
        new Feeling({
            name: "Angry",
            feelingParent: null,
            pillColorHex: "#ee966d"
        }),
        new Feeling({
            name: "Mad",
            feelingParent: "Angry",
            pillColorHex: "#ee966d"
        }),
        new Feeling({
            name: "Resentful",
            feelingParent: "Angry",
            pillColorHex: "#ee966d"
        }),
        new Feeling({
            name: "Annoyed",
            feelingParent: "Angry",
            pillColorHex: "#ee966d"
        }),
        new Feeling({
            name: "Irritated",
            feelingParent: "Angry",
            pillColorHex: "#ee966d"
        }),
        new Feeling({
            name: "Upset",
            feelingParent: "Angry",
            pillColorHex: "#ee966d"
        }),
        new Feeling({
            name: "Furious",
            feelingParent: "Angry",
            pillColorHex: "#ee966d"
        }),
    ],
];

export enum NERTLogSteps {
    RecordNegativeExperience = 0,
    IdentifyNegativeFeelings = 1,
    PinpointNegativeThoughts = 2,
    RecognizeCognitiveDistortions = 3,
    ReframeThoughts = 4,
    RecalibrateMind = 5,
    Completed = 6
}

export class NERTLog {
    startTimestamp: number = Date.now();
    // currentStep: NERTLogSteps = NERTLogSteps.RecordNegativeExperience;
    currentStep: NERTLogSteps = NERTLogSteps.IdentifyNegativeFeelings;
    negativeExperience: string;
    feelings: [Feeling];
    thoughts: [Thought];
}
