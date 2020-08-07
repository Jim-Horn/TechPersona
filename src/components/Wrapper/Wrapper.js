import React from 'react';
import debounce from 'lodash/debounce';
import Intro from '../Intro';
import Slideshow from '../SlideShow';
import './wrapper.scss';

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

    setSlideshowComplete = () => {
        this.setState({ slideshowComplete: true });
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
                        setSlideshowComplete={this.setSlideshowComplete}
                        setQuizTotal={this.setQuizTotal}
                    />
                )}
                {introComplete && slideshowComplete && (
                    <span>
                        <h1>Complete!</h1>
                        <h2>{this.state.quizTotal}</h2>
                        <button
                            onClick={() => {
                                this.setState({ slideshowComplete: false });
                            }}>
                            Back
                        </button>
                    </span>
                )}
            </section>
        );
    }
}

export default Wrapper;
