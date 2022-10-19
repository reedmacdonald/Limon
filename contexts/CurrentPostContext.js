import React from 'react';
import styled from 'styled-components/native';
import { Colors } from '../constants/Colors';

export const CurrentPostContext = React.createContext();

export const CurrentPostContextWrapper = ({ children }) => {
  const [currentPost, setCurrentPost] = React.useState({});
  const [notification, setNotification] = React.useState(false);

  const showNotification = () => {
    setNotification(true);
    setTimeout(() => {
      setNotification(false);
    }, 25000);
  };

  const setCurrentPostProperty = (property) => {
    setCurrentPost({ ...currentPost, ...property });
  };
  return (
    <CurrentPostContext.Provider
      value={{
        setCurrentPostProperty: setCurrentPostProperty,
        currentPost,
        showNotification,
      }}
    >
      {notification && (
        <Notification>Your post is not live!</Notification>
      )}
      {children}
    </CurrentPostContext.Provider>
  );
};

const Notification = styled.Text`
  width: 100%;
  paddin-vertical: 20px;
  background-color: ${Colors.limeGreen};
  color: ${Colors.white};
  position: absolute;
  top: 0;
  text-align: center;
  height: 400px;
  z-index: 100000000000;
`;
