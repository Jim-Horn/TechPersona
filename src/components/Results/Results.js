import React from 'react';
import { personas } from '../../constants';
import calcs from '../calcs';
import './results.scss';

const debug = true;

const Results = ({ setSlideshowState, els }) => {
    const results = calcs(
        els.map((el) => ({ value: el.value, weights: el.weights, calculatedValues: el.calculatedValues }))
    );
    window.results = results;
    debug && console.table(results.personaValues.reduce((acc, obj) => acc.concat(obj.calculatedValues), []));

    const { determiner, friendlyName } = personas[results.persona];

    return (
        <div id="results">
            <h1>Tech Persona Quiz Complete!</h1>
            <h2>Results page</h2>
            <h3>
                It looks like you're {determiner} {friendlyName}
            </h3>
            <p>
                Auto-redirect to WordPress page for {friendlyName}, which will also have links and info for other
                persona types
            </p>
            <BackButton setSlideshowState={setSlideshowState} />
            <pre>{debug && JSON.stringify(results, null, 4)}</pre>
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
