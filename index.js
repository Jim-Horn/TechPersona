import React from 'react';
import { render } from 'react-dom';
import Wrapper from './src/components/Wrapper';

const DefaultView = () => {
    return <Wrapper />;
};
render(<DefaultView />, document.getElementById('base-target'));
