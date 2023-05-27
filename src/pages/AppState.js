import React, { createContext, useState } from 'react';

export const AppStateContext = createContext();
export const AppStateProvider = ({ children }) => {
  const [Favourites, setFavourites] = useState([]);

  const addToFavourites = (id) => {
    setFavourites((prevFavourites) => [...prevFavourites, id]);
  };

  const removeFromFavourites = (id) => {
    setFavourites((prevFavourites) =>
      prevFavourites.filter((favourite) => favourite !== id)
    );
  };

  return (
    <AppStateContext.Provider
      value={{ Favourites, addToFavourites, removeFromFavourites }}
    >
      {children}
    </AppStateContext.Provider>
  );
};
