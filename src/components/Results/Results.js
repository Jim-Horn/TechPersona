import React from 'react';
import calcs from './calcs';
import './results.scss';

const Results = ({ setSlideshowState, els }) => {
    return (
        <div id="results">
            <h1>Complete!</h1>
            <h2>More complete</h2>
            <pre>{JSON.stringify(els, null, 4)}</pre>
            <button
                onClick={() => {
                    setSlideshowState(false);
                }}>
                Back
            </button>
        </div>
    );
};

export default Results;
