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
        <NotificationHolder>
          <Notification>Your post is now live!</Notification>
        </NotificationHolder>
      )}
      {children}
    </CurrentPostContext.Provider>
  );
};

const Notification = styled.Text`
  color: ${Colors.white};
`;

const NotificationHolder = styled.View`
  width: 100%;
  background-color: ${Colors.limeGreen};
  position: absolute;
  top: 0;
  text-align: center;
  height: 100px;
  z-index: 100000000000;
  justify-content: center;
  align-items: center;
`;
