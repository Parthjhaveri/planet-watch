import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Main from './Main.js';
import NeoTracker from './neotrack.js';
import FirstPageCon from './firstPageContent.js';
import './scripts.js';
import registerServiceWorker from './registerServiceWorker';
import {$,jQuery} from 'jquery';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'

ReactDOM.render(

	<BrowserRouter>
		<div>
			<Route exact path="/" component={App} />
			<Route path='/neo-tracker' component={NeoTracker} />
		</div>
	</BrowserRouter>,
	document.getElementById('root')

);

registerServiceWorker();
