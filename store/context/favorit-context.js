import {createContext, useState} from "react";

export const FavoriteContext = createContext({
    ids:[],
    addFavorite:(id)=>{},
    removeFavorite:(id)=>{}
})

function FavoritesContextProvider({children}){
    const [favoriteMealId,setFavoriteMealIds] = useState([])
    function addFavorite(id) {
        setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
    }

    function removeFavorite(id) {
        setFavoriteMealIds((currentFavIds) =>
            currentFavIds.filter((mealId) => mealId !== id)
        );
    }
    const  value = {
        ids:favoriteMealId,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    }
    return (
        <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
    )
}
export default FavoritesContextProvider;