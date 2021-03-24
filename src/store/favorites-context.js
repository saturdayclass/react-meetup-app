import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoritesHandler = (favoriteMeetup) => {
    setUserFavorites((prevState) => {
      return prevState.concat(favoriteMeetup);
    });
  };

  const removeFavoriteHandler = (meetupId) => {
    setUserFavorites((prevState) => {
      return prevState.filter((meetup) => meetup.id !== meetupId);
    });
  };

  const itemIsFavoriteHandler = (meetupId) => {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
