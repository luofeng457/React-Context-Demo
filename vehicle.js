import React from 'react';
import { VehicleProvider, VehicleConsumer } from './vehicleContext.js';

export class Vehicle extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			action: 'transport'
		}
	}
	render () {
		return (
		<VehicleProvider value={this.state.action}>
			<Car/>
		</VehicleProvider>
		)
	}
}

const Car = () => {
	return <Audi/>
}

const Audi = () => {
	return <VehicleConsumer>{context => <div>{context}</div>}</VehicleConsumer>
}