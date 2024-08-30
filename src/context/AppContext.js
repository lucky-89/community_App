// /context/AppContext.js
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'Lucky', groups: [] });
  const [selectedGroup, setSelectedGroup] = useState(null);

  return (
    <AppContext.Provider value={{ user, setUser, selectedGroup, setSelectedGroup }}>
      {children}
    </AppContext.Provider>
  );
};
