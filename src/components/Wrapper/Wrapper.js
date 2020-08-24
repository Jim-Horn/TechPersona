import React from 'react';
import debounce from 'lodash/debounce';
import Intro from '../Intro';
import Slideshow from '../SlideShow';
import './wrapper.scss';
import Results from '../Results';

class Wrapper extends React.Component {
    state = {
        introComplete: false,
        slideshowComplete: false,
        containerWidth: null,
        quizTotal: 0,
    };

    container = React.createRef();

    componentDidMount() {
        this.updateWidth();
        window.addEventListener('resize', debounce(this.updateWidth.bind(this), 50));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWidth);
    }

    updateWidth() {
        this.setState({ containerWidth: this.container.current.offsetWidth });
    }

    setIntroComplete = () => {
        this.setState({ introComplete: true });
    };

    setSlideshowState = (isComplete = true) => {
        this.setState({ slideshowComplete: isComplete });
    };

    setQuizTotal = (val) => {
        this.setState({ quizTotal: val });
    };

    render() {
        const { introComplete, slideshowComplete, containerWidth } = this.state;

        return (
            <section className="slideshow-wrapper" ref={this.container}>
                {!introComplete && <Intro containerWidth={containerWidth} setIntroComplete={this.setIntroComplete} />}
                {introComplete && !slideshowComplete && (
                    <Slideshow
                        containerWidth={containerWidth}
                        setSlideshowState={this.setSlideshowState}
                        setQuizTotal={this.setQuizTotal}
                    />
                )}
                {introComplete && slideshowComplete && <Results setSlideshowState={this.setSlideshowState} />}
            </section>
        );
    }
}

export default Wrapper;
