import React, { useState } from 'react';
import { checkWebmSupport } from '../../utils/utils';
import statements from './statements';
import data from './response-data';
import './slideshow.scss';
import './response.scss';
import './question.scss';
import Bubble from '../Bubble';
import { CONSTANTS } from '../../constants';
const autoShowNextSlide = true;
const nextSlideTime = 50;
const debug = false;
const supportsWebM = checkWebmSupport();

const Slideshow = ({ setSlideshowState, setQuizTotal }) => {
    const [current, setCurrent] = useState(0);
    const [els, setEls] = useState(statements);
    const [total, setTotal] = useState(0);
    const setValue = (val) => {
        const currentState = els;
        currentState[current].value = val;
        setEls(currentState);
        const newTotal = els.reduce((acc, el) => acc + (el.value || 0), 0).toFixed(2);
        setTotal(newTotal);
        setQuizTotal(newTotal);
    };
    current === 12 && els[els.length - 1].value && setSlideshowState();
    // setSlideshowState();
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
                setCurrent={setCurrent}
                setValue={setValue}
                total={total}
            />
            {debug && <pre className="state">{JSON.stringify(els, null, 2)}</pre>}
        </section>
    );
};
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
