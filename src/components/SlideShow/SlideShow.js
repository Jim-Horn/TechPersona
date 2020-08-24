import React from 'react';
import { checkWebmSupport } from '../../utils/utils';
import statements from './statements';
import data from './response-data';
import './slideshow.scss';
import './response.scss';
import './question.scss';
import Bubble from '../Bubble';
import { CONSTANTS } from '../../constants';
import { mathFns } from '../../utils';
const autoShowNextSlide = true;
const nextSlideTime = 50;
const debug = false;
const supportsWebM = checkWebmSupport();

class Slideshow extends React.Component {
    state = {
        current: 0,
        els: statements,
        total: 0,

        sum: 0,
        stdDev: 0,
        average: 0,
        filled: 0,
        nums: [],
        result: { enthusiast: 0, skeptic: 0, passenger: 0, nearly: 0, diyer: 0 },
        persona: '',
    };
    setCurrent = (val) => {
        this.setState({ current: val });
    };
    render() {
        let { setSlideshowComplete, setQuizTotal } = this.props;
        const { current, els, total } = this.state;

        // const setValue = (val) => {
        //     const currentState = els;
        //     currentState[current].value = val;
        //     this.setState({ els: currentState });
        //     const newTotal = els.reduce((acc, el) => acc + (el.value || 0), 0).toFixed(2);
        //     this.setState({ total: newTotal });
        //     setQuizTotal(newTotal);
        // };

        const setValue = (val) => {
            // console.clear();
            const newEls = this.state.els;

            newEls[current].value = parseInt(val);

            const numbers = mathFns.getNumbers(newEls);

            const newSum = numbers.reduce((sum, number) => sum + number, 0);

            const filled = numbers.length;
            const mean = newSum / filled;
            const standardDeviation = mathFns.stdDev(numbers);
            console.log('standardDeviation: ', standardDeviation);

            Object.keys(CONSTANTS.personas).forEach(
                (key) => (newEls[current][key] = standardDeviation * parseInt(val) * CONSTANTS.personas[key])
            );

            newEls.forEach((el) => {
                return (el.centeredScore = (el.value - mean) / standardDeviation);
            });

            let results = { enthusiast: 0, skeptic: 0, passenger: 0, nearly: 0, diyer: 0 };
            for (let key in CONSTANTS.personas) {
                newEls.forEach((el) => (results[key] += (el.centeredScore || 0) * (el.weights[key] || 0)));
            }

            let max = results['enthusiast'];
            for (let key in results) {
                if (results[key] > max) {
                    max = results[key];
                }
            }

            const getKeyNameByValue = (obj, val) => Object.keys(obj).find((key) => obj[key] === val);

            window.CONSTANTS = CONSTANTS;
            window.newEls = newEls;

            setQuizTotal(newSum);
            this.setState(
                (prevState, props) => ({
                    nums: numbers,
                    filled: numbers.length,
                    average: newSum / numbers.length,
                    stdDev: mathFns.stdDev(numbers),
                    sum: newSum,
                    els: newEls,
                    persona: getKeyNameByValue(results, max),
                    results,
                }),
                () => {
                    window.persona = this.state.persona;
                    console.log('State written');
                }
            );
        };

        current === 12 && els[els.length - 1].value && setSlideshowComplete();
        return (
            <section className="slideshow">
                <div className="percent-complete">
                    <span className="current-step-number">{(current + 1).toString().padStart(2, '0')}</span>
                    <span>/{els.length}</span>
                </div>
                <Slide
                    el={els[current]}
                    max={statements.length - 1}
                    current={current}
                    setCurrent={this.setCurrent}
                    setValue={setValue}
                    total={total}
                />
                {(!!debug || !!window.debug) && <pre className="state">{JSON.stringify(els[current], null, 2)}</pre>}
            </section>
        );
    }
}

export default Slideshow;

const Slide = ({ el, current, max, setCurrent, setValue, total }) => {
    const { value, blurb, color, type, statement, answerValues, img, webm } = el;
    return (
        <div className={`question ${!!value ? 'complete' : 'todo'}`}>
            <div className="image-container">
                {supportsWebM ? (
                    <video className="quiz-vid" key={webm} autoPlay={true} loop={true}>
                        <source src={webm} type="video/webm" />
                    </video>
                ) : (
                    <img className="quiz-img" key={img} src={img} alt="" />
                )}
            </div>
            <h2>{statement}</h2>
            <section className={`response ${value !== 0 ? 'complete' : ''}`}>
                <div className="selectors">
                    {data.map(({ buttonText, className, text, val }, index) => {
                        return (
                            <label className={`selector ${el.value === index + 1 ? 'selected' : ''}`} key={index}>
                                <button
                                    data-value={index + 1}
                                    onClick={() => {
                                        setValue(index + 1);
                                        autoShowNextSlide &&
                                            setTimeout(() => current < max && setCurrent(current + 1), nextSlideTime);
                                    }}
                                    aria-label={text}
                                />
                                <span className={`text ${className}`}>{text}</span>
                            </label>
                        );
                    })}
                </div>
            </section>
            <div className="speech-container">
                <Bubble size="" color={color} fill="" align="right">
                    {type === CONSTANTS.TYPES.FACT ? 'FACT ...' : 'DID YOU KNOW ...'}
                </Bubble>
                <Bubble size="large" color={color} fill="solid" align="left">
                    {blurb}
                </Bubble>
            </div>
            <nav>
                <button
                    disabled={current === 0}
                    onClick={() => {
                        current !== 0 && setCurrent(current > 0 ? current - 1 : 0);
                    }}>
                    Previous
                </button>
                <button
                    disabled={!value || current === max}
                    onClick={() => {
                        current !== max && setCurrent(current < max ? current + 1 : max);
                    }}>
                    Next
                </button>
            </nav>
        </div>
    );
};
