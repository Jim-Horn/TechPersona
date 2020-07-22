import React, { useState } from 'react';
import { checkWebmSupport } from '../../utils/utils';
import statements from './statements';
import data from './response-data';
import './slideshow.scss';
import './response.scss';
import './question.scss';
const autoShowNextSlide = true;
const nextSlideTime = 500;
const debug = false;
const supportsWebM = checkWebmSupport();

const Slideshow = () => {
    const [current, setCurrent] = useState(0);
    const [els, setEls] = useState(statements);
    const [total, setTotal] = useState(0);
    const setValue = (val) => {
        console.log('val: ', val);
        const currentState = els;
        currentState[current].value = val;
        setEls(currentState);
        const newTotal = els.reduce((acc, el) => acc + (el.value || 0), 0).toFixed(2);
        setTotal(newTotal);
    };
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
    const { value, blurb, statement, answerValues, img, webm } = el;
    console.log('supportsWebM: ', supportsWebM);
    return (
        <div className={`question ${!!value ? 'complete' : 'todo'}`}>
            {supportsWebM ? (
                <video width="320" height="240" autoPlay={true} loop={true}>
                    <source src={webm} type="video/webm" />
                </video>
            ) : (
                <img src={img} alt="" />
            )}
            <h2>{statement}</h2>
            <section className={`response ${el.value !== 0 ? 'complete' : ''}`}>
                <div className="selectors">
                    {data.map(({ buttonText, className, text, val }, index) => {
                        return (
                            <label
                                className={`selector ${el.value === answerValues[index] ? 'selected' : ''}`}
                                key={index}>
                                <button
                                    data-value={answerValues[index]}
                                    onClick={() => {
                                        setValue(answerValues[index]);
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
