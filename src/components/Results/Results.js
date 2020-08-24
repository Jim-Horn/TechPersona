import React from 'react';

const Results = ({ setSlideshowState }) => {
    return (
        <span>
            <h1>Complete!</h1>
            <h2>More complete</h2>
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
