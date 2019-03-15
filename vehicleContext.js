import React from 'react'

const VehicleContext = React.createContext({});
export const VehicleProvider = VehicleContext.Provider;
export const VehicleConsumer = VehicleContext.Consumer;