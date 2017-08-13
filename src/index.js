import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NeoTracker from './neotrack.js';
import PollutionTracker from './pollutionTracker.js';
import './scripts.js';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

ReactDOM.render(

	<BrowserRouter>
		<div>
			<Route exact path="/" component={App} />
			<Route path='/neo-tracker' component={NeoTracker} />
			<Route path='/pollution-tracker' component={PollutionTracker} />
		</div>
	</BrowserRouter>,
	document.getElementById('root')

);

registerServiceWorker();
