import React from 'react';

export const UserContext = React.createContext();

export const UserContextWrapper = ({ children }) => {
  const [user, setUser] = React.useState({});

  const setUserProperty = (property) => {
    setUser({ ...user, ...property });
  };
  return (
    <UserContext.Provider
      value={{
        setUserProperty: setUserProperty,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
