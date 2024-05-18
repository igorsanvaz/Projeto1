import React, { createContext, useState } from 'react';

export const ShapeContext = createContext();

export const ShapeProvider = ({ children }) => {
  const [area, setArea] = useState(null);
  const [shape, setShape] = useState('');

  return (
    <ShapeContext.Provider value={{ area, setArea, shape, setShape }}>
      {children}
    </ShapeContext.Provider>
  );
};
