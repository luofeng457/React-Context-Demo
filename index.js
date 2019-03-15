import React from 'react'
import { render } from 'react-dom'

import { Vehicle } from './vehicle.js';

function App () {
	return <Vehicle/>
}
render(<App/>, document.getElementById('root'))