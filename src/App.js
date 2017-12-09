require('./index.html');
require('./boot');

import React from 'react';
import {render} from 'react-dom';
import Box from './component/box/Box';
import './styles/styles.css';


const App = () => (
    <div>
        <h1>View-Presenter</h1>
        <Box nameLib="JQuery"/>
        <Box/>
    </div>
);

render(<App/>, document.getElementById('app'));