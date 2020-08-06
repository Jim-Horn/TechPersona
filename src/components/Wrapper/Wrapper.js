import React, { useState } from 'react';
import Intro from '../Intro';
import Slideshow from '../SlideShow';

const Wrapper = () => {
    const [introComplete, setIntroComplete] = useState(false);
    const [slideshowComplete, setSlideshowComplete] = useState(false);
    if (!introComplete) {
        return <Intro setIntroComplete={setIntroComplete} />;
    }

    if (introComplete && !slideshowComplete) {
        return <Slideshow setSlideshowComplete={setSlideshowComplete} />;
    }

    if (introComplete && slideshowComplete) {
        return <h1>Results</h1>;
    }
    return <h1>Done</h1>;
};

export default Wrapper;
