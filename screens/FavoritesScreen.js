import { View, Text, StyleSheet } from 'react-native';
import { useContext } from 'react';
import MealList from "../componets/MealList";
import { FavoriteContext } from '../store/context/favorit-context';
import { MEALS } from '../data/dummy-data';
import MealsList from "../componets/MealsList";
import { useSelector } from 'react-redux';

function FavoritesScreen() {
    // const favoriteMealsCtx = useContext(FavoriteContext);
    // const favoriteMeals = MEALS.filter((meal) =>
    //     favoriteMealsCtx.ids.includes(meal.id)
    // );
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const favoriteMeals = MEALS.filter((meal) =>
        favoriteMealIds.includes(meal.id)
    );


    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite meals yet.</Text>
            </View>
        );
    }

    return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
});