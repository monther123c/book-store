import { createContext, useContext, useState } from "react";


 
const AppContext = createContext(null);

export const useAppContext =()=>{
    const context =useContext(AppContext);
    if(context===undefined){
        throw new  Error('Appcontext must be within appcontextprovider ');
    }
    return context;
};
const AppContextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
  
    const addToFavorites = (book) => {
      const oldFavorites = [...favorites];
      const newFavorites = oldFavorites.concat(book);
      setFavorites(newFavorites);
    };
  
    const removeFromFavorites = (bookToRemove) => {
      const updatedFavorites = favorites.filter((book) => book.id !== bookToRemove.id);
      setFavorites(updatedFavorites);
    };
  
    return (
      <AppContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
        {children}
      </AppContext.Provider>
    );
  };
  
  export default AppContextProvider;
  