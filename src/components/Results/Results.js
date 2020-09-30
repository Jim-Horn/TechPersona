import React from 'react';
import calcs from '../calcs';
import './results.scss';

const Results = ({ setSlideshowState, els }) => {
    console.log(calcs(els.map((el) => ({ value: el.value, weights: el.weights }))));
    return (
        <div id="results">
            <h1>Tech Persona Quiz Complete!</h1>
            <h2>Results page</h2>
            <BackButton setSlideshowState={setSlideshowState} />
            <pre>{JSON.stringify(els, null, 4)}</pre>
            <BackButton setSlideshowState={setSlideshowState} />
        </div>
    );
};

export default Results;

const BackButton = ({setSlideshowState}) => (
    <button
        onClick={() => {
            setSlideshowState(false);
        }}>
        Back
    </button>
);
