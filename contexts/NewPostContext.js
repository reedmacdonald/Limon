import React from 'react';

export const NewPostContext = React.createContext();

export const NewPostContextWrapper = ({ children }) => {
  const [newPost, setNewPost] = React.useState({
    destinationData: [],
  });

  const setNewPostProperty = (property) => {
    setNewPost({ ...newPost, ...property });
  };
  return (
    <NewPostContext.Provider
      value={{
        setNewPostProperty: setNewPostProperty,
        newPost,
      }}
    >
      {children}
    </NewPostContext.Provider>
  );
};
