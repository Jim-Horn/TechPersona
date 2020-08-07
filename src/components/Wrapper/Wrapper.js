import React, { useState } from 'react';
import Intro from '../Intro';
import Slideshow from '../SlideShow';

class Wrapper extends React.Component {
    state = {
        introComplete: false,
        slideshowComplete: false,
    };

    setIntroComplete = () => {
        this.setState({ introComplete: true });
    };

    setSlideshowComplete = () => {
        this.setState({ slideshowComplete: true });
    };
    render() {
        const { introComplete, slideshowComplete } = this.state;
        if (!introComplete) {
            return <Intro setIntroComplete={this.setIntroComplete} />;
        }

        if (introComplete && !slideshowComplete) {
            return <Slideshow setSlideshowComplete={this.setSlideshowComplete} />;
        }

        if (introComplete && slideshowComplete) {
            return <h1>Results</h1>;
        }
        return <h1>Done</h1>;
    }
}

export default Wrapper;
