import React from 'react';

const Results = ({ setSlideshowState, els }) => {
    return (
        <span>
            <h1>Complete!</h1>
            <h2>More complete</h2>
            <pre>{JSON.stringify(els, null, 4)}</pre>
            <button
                onClick={() => {
                    setSlideshowState(false);
                }}>
                Back
            </button>
        </span>
    );
};

export default Results;
