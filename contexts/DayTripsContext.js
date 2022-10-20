import React, { useState, useEffect } from 'react';

export const DayTripsContext = React.createContext();
import { EventMock } from '../mocks/EventMocks';

export const DayTripsContextWrapper = ({ children }) => {
  const [dayTrips, setDayTrips] = React.useState([]);
  const getAndSetDayTrips = () => {
    setDayTrips(EventMock);
  };
  React.useEffect(() => {
    getAndSetDayTrips();
  }, []);
  return (
    <DayTripsContext.Provider value={{ dayTrips }}>
      {children}
    </DayTripsContext.Provider>
  );
};
