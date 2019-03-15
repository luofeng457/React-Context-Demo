import React from 'react';
import { VehicleProvider, VehicleConsumer } from './vehicleContext.js';
import { CarProvider, CarConsumer } from './carContext.js';

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

class Car extends Vehicle {
	constructor (props) {
		super(props);
		this.state = {
			wheels: 4
		}
	}
	render () {
		return <CarProvider value={this.state.wheels}><Audi/></CarProvider>
	}
}

const Audi = () => {
	return (
		<VehicleConsumer>
			{
				action => (
					<CarConsumer>
						{
							wheels => (
								<div>{`Audi: with ${wheels} wheels, used for ${action}.`}</div>
							)
						}
					</CarConsumer>
				)
			}
		</VehicleConsumer>
	)
}