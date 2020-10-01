import { CONSTANTS } from '../../constants';
import TechPersona01 from './TechPersona/TechPersona-01.gif';
import TechPersona02 from './TechPersona/TechPersona-02.gif';
import TechPersona03 from './TechPersona/TechPersona-03.gif';
import TechPersona04 from './TechPersona/TechPersona-04.gif';
import TechPersona05 from './TechPersona/TechPersona-05.gif';
import TechPersona06 from './TechPersona/TechPersona-06.gif';
import TechPersona07 from './TechPersona/TechPersona-07.gif';
import TechPersona08 from './TechPersona/TechPersona-08.gif';
import TechPersona09 from './TechPersona/TechPersona-09.gif';
import TechPersona10 from './TechPersona/TechPersona-10.gif';
import TechPersona11 from './TechPersona/TechPersona-11.gif';
import TechPersona12 from './TechPersona/TechPersona-12.gif';
import TechPersona13 from './TechPersona/TechPersona-13.gif';

import TechPersona01webm from './TechPersona/TechPersona-01.webm';
import TechPersona02webm from './TechPersona/TechPersona-02.webm';
import TechPersona03webm from './TechPersona/TechPersona-03.webm';
import TechPersona04webm from './TechPersona/TechPersona-04.webm';
import TechPersona05webm from './TechPersona/TechPersona-05.webm';
import TechPersona06webm from './TechPersona/TechPersona-06.webm';
import TechPersona07webm from './TechPersona/TechPersona-07.webm';
import TechPersona08webm from './TechPersona/TechPersona-08.webm';
import TechPersona09webm from './TechPersona/TechPersona-09.webm';
import TechPersona10webm from './TechPersona/TechPersona-10.webm';
import TechPersona11webm from './TechPersona/TechPersona-11.webm';
import TechPersona12webm from './TechPersona/TechPersona-12.webm';
import TechPersona13webm from './TechPersona/TechPersona-13.webm';
export default [
    {
        img: TechPersona01,
        webm: TechPersona01webm,
        statement: `I don't do anything fancy with technology`,
        color: CONSTANTS.STYLES.BLUE,
        type: CONSTANTS.TYPES.FACT,
        blurb: `Nearly half the world's population has never made a phone call.`,
        // answerValues: [-3.31, -2.39, -0.08, 1.45, 2.24, 5.91, 6.55],
        weights: { enthusiast: 0, skeptic: 0, passenger: 0, nearly: 0, diyer: 0 },
        calculatedValues: {},
    },
    {
        img: TechPersona02,
        webm: TechPersona02webm,
        statement: `I enjoy figuring out how to make electronics do what I want`,
        color: CONSTANTS.STYLES.PURPLE,
        type: CONSTANTS.TYPES.DID_YOU_KNOW,
        blurb: `It took Thomas Edison thousands of failed attempts to develop the light bulb.`,
        // answerValues: [-2.9, -2.76, -2.51, -0.39, 1.72, 7.07, 7.54],
        weights: { enthusiast: 1.73, skeptic: -1.799, passenger: -1.72, nearly: 0.341, diyer: 0.692 },
        calculatedValues: {},
    },
    {
        img: TechPersona03,
        webm: TechPersona03webm,
        statement: `I'm not interested in setting up, troubleshooting, or tinkering with the electronics I own`,
        color: CONSTANTS.STYLES.GREEN,
        type: CONSTANTS.TYPES.FACT,
        blurb: `In the past, the term "troubleshooter" has taken the form of "trouble hunter" and "troublemen." Both were used to describe those who diagnosed or fixed telephone lines in the early 20th century.`,
        // answerValues: [-6.14, -4.51, -3.05, -2.45, 3.3, 3.67, 4.42],
        weights: { enthusiast: -0.039, skeptic: -1.116, passenger: -0.75, nearly: 0.242, diyer: -0.913 },
        calculatedValues: {},
    },
    {
        img: TechPersona04,
        webm: TechPersona04webm,
        statement: `I'd rather put up with a cracked screen than worry about relearning how to perform tasks on a new phone`,
        color: CONSTANTS.STYLES.BLUE,
        type: CONSTANTS.TYPES.DID_YOU_KNOW,
        blurb: `In 1983, the first mobile phones went on sale in the US for nearly $4000.`,
        // answerValues: [-5.0, -4.51, -4.48, -3.71, -1.13, 2.49, 3.4],
        weights: { enthusiast: -0.8, skeptic: -1.563, passenger: -2.098, nearly: 0.326, diyer: -1.392 },
        calculatedValues: {},
    },
    {
        img: TechPersona05,
        webm: TechPersona05webm,
        statement: `More features mean more things that can go wrong`,
        color: CONSTANTS.STYLES.PURPLE,
        type: CONSTANTS.TYPES.FACT,
        blurb: `In 2015, Apple briefly considered adding a joystick inside the iPhone's home button.`,
        // answerValues: [-4.76, -2.58, -1.44, -1.18, 2.48, 2.59, 5.46],
        weights: { enthusiast: 0.352, skeptic: 0.139, passenger: -0.355, nearly: 0.167, diyer: 0.251 },
        calculatedValues: {},
    },
    {
        img: TechPersona06,
        webm: TechPersona06webm,
        statement: `Most new tech I adopt or purchase makes my  life easier or better in some way`,
        color: CONSTANTS.STYLES.GREEN,
        type: CONSTANTS.TYPES.DID_YOU_KNOW,
        blurb: `Some people are afraid of new technology—it's called technophobia.`,
        // answerValues: [-3.96, -3.3, -0.72, -0.08, 4.0, 6.09, 7.35],
        weights: { enthusiast: 2.802, skeptic: -1.129, passenger: 0.351, nearly: 0.294, diyer: 1.631 },
        calculatedValues: {},
    },
    {
        img: TechPersona07,
        webm: TechPersona07webm,
        statement: `I've been guilted into buying new devices by friends  who tell me I need to join the 21st century`,
        color: CONSTANTS.STYLES.BLUE,
        type: CONSTANTS.TYPES.FACT,
        blurb: `The very first iPhone was released to the public in June 2007.`,
        // answerValues: [-6.73, -2.72, -1.41, 1.7, 2.66, 5.69, 6.64],
        weights: { enthusiast: -1.381, skeptic: -3.641, passenger: -3.565, nearly: 0.556, diyer: -2.495 },
        calculatedValues: {},
    },
    {
        img: TechPersona08,
        webm: TechPersona08webm,
        statement: `I can fix it myself`,
        color: CONSTANTS.STYLES.PURPLE,
        type: CONSTANTS.TYPES.DID_YOU_KNOW,
        blurb: `Many early 20th century household radios were home made, thanks to a handy set of instructions published by the U.S. government in 1922.`,
        // answerValues: [-6.36, -5.5, -1.73, -1.7, -1.57, 0.93, 7.27],
        weights: { enthusiast: 0.616, skeptic: -0.2038, passenger: -3.05, nearly: 0.358, diyer: 0.185 },
        calculatedValues: {},
    },
    {
        img: TechPersona09,
        webm: TechPersona09webm,
        statement: `I'd call tech support to get help with electronics before working on them myself`,
        color: CONSTANTS.STYLES.GREEN,
        type: CONSTANTS.TYPES.FACT,
        blurb: `More than 400,000 NASA staff worked on the Apollo moon landing mission.`,
        // answerValues: [-6.24, -6.02, -1.2, 0.58, 3.98, 4.35, 7.74],
        weights: { enthusiast: -0.517, skeptic: -1.926, passenger: -1.519, nearly: 0.329, diyer: -1.459 },
        calculatedValues: {},
    },
    {
        img: TechPersona10,
        webm: TechPersona10webm,
        statement: `They say technology can save you so much time, but it often ends up wasting time`,
        color: CONSTANTS.STYLES.BLUE,
        type: CONSTANTS.TYPES.DID_YOU_KNOW,
        blurb: `The digital pocket watch was invented in 1883.`,
        // answerValues: [-6.56, -4.95, -4.51, -2.52, -1.13, 4.67, 5.51],
        weights: { enthusiast: 0.347, skeptic: -0.252, passenger: -0.838, nearly: 0.375, diyer: 0.256 },
        calculatedValues: {},
    },
    {
        img: TechPersona11,
        webm: TechPersona11webm,
        statement: `I have a tough time trusting smart devices - they are too easy to hack`,
        color: CONSTANTS.STYLES.PURPLE,
        type: CONSTANTS.TYPES.FACT,
        blurb: `In 1989 hackers pulled off the first-ever large scale ransomware attack by mailing out 20,000 floppy disks that contained a trojan virus.`,
        // answerValues: [-6.56, -4.84, -4.46, -2.89, 0.24, 1.39, 5.73],
        weights: { enthusiast: -0.12, skeptic: -0.295, passenger: -0.93, nearly: -0.06, diyer: -0.007 },
        calculatedValues: {},
    },
    {
        img: TechPersona12,
        webm: TechPersona12webm,
        statement: `Google Home is a great innovation - I'd have it in every room of my home if I could`,
        color: CONSTANTS.STYLES.GREEN,
        type: CONSTANTS.TYPES.DID_YOU_KNOW,
        blurb: `Google started in 1996 as a research project by students at Stanford University.`,
        // answerValues: [-5.39, -4.54, -1.21, -1.15, -0.6, 1.47, 6.49],
        weights: { enthusiast: 0.428, skeptic: -3.293, passenger: -2.277, nearly: 0.168, diyer: -2.224 },
        calculatedValues: {},
    },
    {
        img: TechPersona13,
        webm: TechPersona13webm,
        statement: `Paying bills online is easy - I get a paperless statement,  I pay it, and then I get an electronic receipt`,
        color: CONSTANTS.STYLES.BLUE,
        type: CONSTANTS.TYPES.FACT,
        blurb: `The magnetic stripe used in credit cards was invented in 1960 by an IBM engineer.`,
        // answerValues: [-3.67, 1.29, 2.24, 2.85, 4.12, 4.65, 7.94],
        weights: { enthusiast: 2.417, skeptic: -1.049, passenger: 0.179, nearly: 0.333, diyer: 1.472 },
        calculatedValues: {},
    },
];
