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

    render() {
        const { introComplete, slideshowComplete, containerWidth } = this.state;

        return (
            <section className="slideshow-wrapper" ref={this.container}>
                {!introComplete && <Intro containerWidth={containerWidth} setIntroComplete={this.setIntroComplete} />}
                {introComplete && !slideshowComplete && (
                    <Slideshow containerWidth={containerWidth} setSlideshowComplete={this.setSlideshowComplete} />
                )}
                {introComplete && slideshowComplete && <h1>Complete!</h1>}
            </section>
        );
    }
}

export default Wrapper;
