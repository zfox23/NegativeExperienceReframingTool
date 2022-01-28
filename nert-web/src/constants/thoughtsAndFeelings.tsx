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

    constructor({name, amountFeelingBefore, amountFeelingAfter}: {name: string, amountFeelingBefore?: number, amountFeelingAfter?: number}) {
        this.name = name;
        this.amountFeelingBefore = amountFeelingBefore;
        this.amountFeelingAfter = amountFeelingAfter;
    }
}

export class Feeling extends UserFeeling {
    parent?: string;
    pillColorHex: string;

    constructor({name, parent, pillColorHex, amountFeelingBefore, amountFeelingAfter}: {name: string, parent: string, pillColorHex: string, amountFeelingBefore?: number, amountFeelingAfter?: number}) {
        super({name, amountFeelingBefore, amountFeelingAfter});
        this.parent = parent;
        this.pillColorHex = pillColorHex;
    }
}

export const feelingsTable = [
    [
        new Feeling({
            name: "Sad",
            parent: null,
            pillColorHex: "#7f9bf0"
        }),
        new Feeling({
            name: "Depressed",
            parent: "Sad",
            pillColorHex: "#7f9bf0"
        }),
        new Feeling({
            name: "Down",
            parent: "Sad",
            pillColorHex: "#7f9bf0"
        }),
        new Feeling({
            name: "Unhappy",
            parent: "Sad",
            pillColorHex: "#7f9bf0"
        }),
    ],
    [
        new Feeling({
            name: "Hopeless",
            parent: null,
            pillColorHex: "#9194f2"
        }),
        new Feeling({
            name: "Discouraged",
            parent: "Hopeless",
            pillColorHex: "#9194f2"
        }),
        new Feeling({
            name: "Pessimistic",
            parent: "Hopeless",
            pillColorHex: "#9194f2"
        }),
        new Feeling({
            name: "Despairing",
            parent: "Hopeless",
            pillColorHex: "#9194f2"
        }),
    ],
    [
        new Feeling({
            name: "Lonely",
            parent: null,
            pillColorHex: "#967ff0"
        }),
        new Feeling({
            name: "Unloved",
            parent: "Lonely",
            pillColorHex: "#967ff0"
        }),
        new Feeling({
            name: "Unwanted",
            parent: "Lonely",
            pillColorHex: "#967ff0"
        }),
        new Feeling({
            name: "Rejected",
            parent: "Lonely",
            pillColorHex: "#967ff0"
        }),
        new Feeling({
            name: "Alone",
            parent: "Lonely",
            pillColorHex: "#967ff0"
        }),
        new Feeling({
            name: "Abandoned",
            parent: "Lonely",
            pillColorHex: "#967ff0"
        }),
    ],
    [
        new Feeling({
            name: "Inferior",
            parent: null,
            pillColorHex: "#aa6dee"
        }),
        new Feeling({
            name: "Worthless",
            parent: "Inferior",
            pillColorHex: "#aa6dee"
        }),
        new Feeling({
            name: "Inadequate",
            parent: "Inferior",
            pillColorHex: "#aa6dee"
        }),
        new Feeling({
            name: "Defective",
            parent: "Inferior",
            pillColorHex: "#aa6dee"
        }),
        new Feeling({
            name: "Incompetent",
            parent: "Inferior",
            pillColorHex: "#aa6dee"
        }),
    ],
    [
        new Feeling({
            name: "Embarrassed",
            parent: null,
            pillColorHex: "#e76dee"
        }),
        new Feeling({
            name: "Foolish",
            parent: "Embarrassed",
            pillColorHex: "#e76dee"
        }),
        new Feeling({
            name: "Humiliated",
            parent: "Embarrassed",
            pillColorHex: "#e76dee"
        }),
        new Feeling({
            name: "Self-conscious",
            parent: "Embarrassed",
            pillColorHex: "#e76dee"
        }),
    ],
    [
        new Feeling({
            name: "Guilty",
            parent: null,
            pillColorHex: "#e7a2ce"
        }),
        new Feeling({
            name: "Remorseful",
            parent: "Guilty",
            pillColorHex: "#e7a2ce"
        }),
        new Feeling({
            name: "Ashamed",
            parent: "Guilty",
            pillColorHex: "#e7a2ce"
        }),
        new Feeling({
            name: "Bad",
            parent: "Guilty",
            pillColorHex: "#e7a2ce"
        }),
    ],
    [
        new Feeling({
            name: "Anxious",
            parent: null,
            pillColorHex: "#f07fa1"
        }),
        new Feeling({
            name: "Worried",
            parent: "Anxious",
            pillColorHex: "#f07fa1"
        }),
        new Feeling({
            name: "Panicked",
            parent: "Anxious",
            pillColorHex: "#f07fa1"
        }),
        new Feeling({
            name: "Nervous",
            parent: "Anxious",
            pillColorHex: "#f07fa1"
        }),
        new Feeling({
            name: "Scared",
            parent: "Anxious",
            pillColorHex: "#f07fa1"
        }),
    ],
    [
        new Feeling({
            name: "Frustrated",
            parent: null,
            pillColorHex: "#ee6d6d"
        }),
        new Feeling({
            name: "Stuck",
            parent: "Frustrated",
            pillColorHex: "#ee6d6d"
        }),
        new Feeling({
            name: "Thwarted",
            parent: "Frustrated",
            pillColorHex: "#ee6d6d"
        }),
        new Feeling({
            name: "Defeated",
            parent: "Frustrated",
            pillColorHex: "#ee6d6d"
        }),
    ],
    [
        new Feeling({
            name: "Angry",
            parent: null,
            pillColorHex: "#ee966d"
        }),
        new Feeling({
            name: "Mad",
            parent: "Angry",
            pillColorHex: "#ee966d"
        }),
        new Feeling({
            name: "Resentful",
            parent: "Angry",
            pillColorHex: "#ee966d"
        }),
        new Feeling({
            name: "Annoyed",
            parent: "Angry",
            pillColorHex: "#ee966d"
        }),
        new Feeling({
            name: "Irritated",
            parent: "Angry",
            pillColorHex: "#ee966d"
        }),
        new Feeling({
            name: "Upset",
            parent: "Angry",
            pillColorHex: "#ee966d"
        }),
        new Feeling({
            name: "Furious",
            parent: "Angry",
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
