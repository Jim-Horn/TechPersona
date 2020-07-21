import React, { useState } from 'react';
import { checkWebmSupport } from '../../utils/utils';
import statements from './statements';
import data from './response-data';
import './slideshow.scss';
import './response.scss';
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
    console.log('el: ', el);
    const { value, blurb, answerValues } = el;
    return (
        <div className={`slide ${value ? 'complete' : ''}`}>
            Total: {total} - Current: {value || 0}
            <br />
            {blurb}
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
