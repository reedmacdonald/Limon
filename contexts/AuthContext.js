import React, { useState, createContext, useEffect } from 'react';
import { AsyncStorage } from '@react-native-community/async-storage';
const AuthContext = createContext({});

const AuthContextWrapper = ({ children }) => {
  const [auth, setAuthState] = useState(initialState);

  const getAuthState = async () => {
    try {
      const authDataString = await AsyncStorage.getItem('auth');
      const authData = JSON.parse(authDataString || {});
      setAuthState(authData);
    } catch (err) {
      setAuthState({});
    }
  };

  const setAuth = async (auth) => {
    try {
      await AsyncStorage.setItem('auth', JSON.stringify(auth));
      setAuthState(auth);
    } catch (error) {
      Promise.reject(error);
    }
  };

  useEffect(() => {
    getAuthState();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextWrapper };
