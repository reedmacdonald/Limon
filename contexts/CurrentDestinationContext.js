import React from 'react';

export const CurrentDestinationContext = React.createContext();

export const CurrentDestinationContextWrapper = ({ children }) => {
  const [currentDestination, setCurrentDestination] = React.useState(
    {}
  );

  const setCurrentDestinationProperty = (property) => {
    setCurrentDestination({ ...currentDestination, ...property });
  };
  return (
    <CurrentDestinationContext.Provider
      value={{
        setCurrentDestinationProperty: setCurrentDestinationProperty,
        currentDestination,
      }}
    >
      {children}
    </CurrentDestinationContext.Provider>
  );
};
