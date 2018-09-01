import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import {robots} from './robots';

ReactDOM.render(
				<div>
					<Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
					<Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
				</div>
, document.getElementById('root'));
registerServiceWorker();
