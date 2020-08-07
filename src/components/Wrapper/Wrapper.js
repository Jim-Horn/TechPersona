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

        return (
            <section className="foo">
                {!introComplete && <Intro setIntroComplete={this.setIntroComplete} />}
                {introComplete && !slideshowComplete && <Slideshow setSlideshowComplete={this.setSlideshowComplete} />}
                {introComplete && slideshowComplete && <h1>Complete!</h1>}
            </section>
        );
    }
}

export default Wrapper;
