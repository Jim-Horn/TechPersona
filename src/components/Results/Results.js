import React from 'react';
import { personas } from '../../constants';
import calcs from '../calcs';
import './results.scss';

const Results = ({ setSlideshowState, els }) => {
    const results = calcs(els.map((el) => ({ value: el.value, weights: el.weights })));
    window.results = results;

    const { determiner, friendlyName } = personas[results.persona];

    return (
        <div id="results">
            <h1>Tech Persona Quiz Complete!</h1>
            <h2>Results page</h2>
            <BackButton setSlideshowState={setSlideshowState} />
            <pre>
                {/*JSON.stringify(calcs(els.map((el) => ({ value: el.value, weights: el.weights }))).persona, null, 4)*/}
            </pre>
            <pre>
                It looks like you're {determiner} {friendlyName}
            </pre>
            <BackButton setSlideshowState={setSlideshowState} />
        </div>
    );
};

export default Results;

const BackButton = ({ setSlideshowState }) => (
    <button
        onClick={() => {
            setSlideshowState(false);
        }}>
        Back
    </button>
);
