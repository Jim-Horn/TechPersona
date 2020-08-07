import React from 'react';
import { checkWebmSupport } from '../../utils/utils';
import webm from './images/Tech-Persona-Desktop-Landing.webm';
import png from './images/Tech-Persona-Desktop-Landing-2x.png';
import './intro.scss';
const supportsWebM = checkWebmSupport();

const Intro = ({ containerWidth, setIntroComplete }) => {
    const vidRatio = 0.7111111111;
    const vidWidth = containerWidth < 1440 ? containerWidth : 1440;
    return (
        <div id="intro">
            {supportsWebM ? (
                <video width={vidWidth} height={vidWidth * vidRatio} autoPlay={true} loop={false}>
                    <source src={webm} type="video/webm" />
                </video>
            ) : (
                <img src={png} width={vidWidth} alt="" />
            )}
            <div className="intro-content">
                <section className="verbiage">
                    <h2>
                        Our quiz will help you discover your inner tech superhero - and what is says about you and your
                        devices.
                    </h2>
                    <p>
                        Everyone approaches tech differently. Some buy the latest gadget as soon as it comes out. Others
                        are skeptical and get easily frustrated when something malfunctions. Learning how you interact
                        with technology can teach you more about yourself and the devices you love. Our quiz can do all
                        that, plus reveal your tech super power, no cape required.
                    </p>
                </section>
                <nav className="button">
                    <button
                        onClick={() => {
                            setIntroComplete(true);
                        }}>
                        Take the quiz
                    </button>
                </nav>
            </div>
        </div>
    );
};

export default Intro;
