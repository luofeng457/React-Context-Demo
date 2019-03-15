import React from 'react';

const CarContext = React.createContext({});

export const CarProvider = CarContext.Provider;
export const CarConsumer = CarContext.Consumer;