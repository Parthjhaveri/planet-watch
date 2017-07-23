import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FirstPageCon from './firstPageContent.js';
import './scripts.js';
import registerServiceWorker from './registerServiceWorker';
import {$,jQuery} from 'jquery';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'

ReactDOM.render(

	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')

);

registerServiceWorker();
