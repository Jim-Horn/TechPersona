import React, { useState } from 'react';
import { checkWebmSupport } from '../../utils/utils';
import statements from './statements';
import './slideshow.scss';
const autoShowNextSlide = true;
const nextSlideTime = 500;
const debug = false;
const supportsWebM = checkWebmSupport();

const Slideshow = () => {
    const [current, setCurrent] = useState(0);
    const [els, setEls] = useState(statements);
    const [total, setTotal] = useState(0);
    const setValue = (val) => {
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
    const { value, message, answerValues } = el;
    return (
        <div className={`slide ${value ? 'complete' : ''}`}>
            Total: {total} - Current: {value || 0}
            <br />
            Slide {message}
            <div className="buttons">
                {answerValues.map((num) => (
                    <button
                        key={num}
                        className={value === num ? 'selected' : ''}
                        onClick={() => {
                            setValue(num);
                            autoShowNextSlide &&
                                setTimeout(() => current < max && setCurrent(current + 1), nextSlideTime);
                        }}>
                        {num}
                    </button>
                ))}
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
