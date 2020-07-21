import React from 'react';
import { render } from 'react-dom';
import SlideShow from './src/components/SlideShow';

const DefaultView = () => {
    return <SlideShow />;
};
render(<DefaultView />, document.getElementById('base-target'));
