import React from 'react';

export const CurrentPostContext = React.createContext();

export const CurrentPostContextWrapper = ({ children }) => {
  const [currentPost, setCurrentPost] = React.useState({});

  const setCurrentPostProperty = (property) => {
    setCurrentPost({ ...currentPost, ...property });
  };
  return (
    <CurrentPostContext.Provider
      value={{
        setCurrentPostProperty: setCurrentPostProperty,
        currentPost,
      }}
    >
      {children}
    </CurrentPostContext.Provider>
  );
};
