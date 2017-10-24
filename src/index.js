import React from 'react'
import ReactDOM from 'react-dom'
import Root from './core/route/index.js';
import createStore from './core/store/configureStore.js'

const initialState = {}
const store = createStore(initialState)

let render = () => {
	ReactDOM.render(<Root store={store} />,
		document.getElementById('root')
	);
}

render();