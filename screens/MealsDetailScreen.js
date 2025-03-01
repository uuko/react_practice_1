import {useContext, useLayoutEffect} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

import IconButton from '../componets/IconButton';
import List from '../componets/MealList';
import Subtitle from '../componets/SubTitle';
import MealDetails from '../componets/MealDetails';
import {MEALS} from '../data/dummy-data';
import {FavoriteContext} from "../store/context/favorit-context";
import {store} from "../store/redux/store";
import {useDispatch, useSelector} from 'react-redux';
import {addFavorite, removeFavorite} from "../store/redux/favorites";


function MealDetailScreen({route, navigation}) {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    // const favoriteMealsCtx = useContext(FavoriteContext)
    //
    //
    // const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);
    // function headerButtonPressHandler() {
    //     if (mealIsFavorite) {
    //         favoriteMealsCtx.removeFavorite(mealId)
    //     } else {
    //         favoriteMealsCtx.addFavorite(mealId)
    //     }
    //
    // }
    const dispatch = useDispatch()
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids)

    const mealIsFavorite = favoriteMealIds.includes(mealId);

    function changeFavoriteStatusHandler() {
        if (mealIsFavorite) {
            // favoriteMealsCtx.removeFavorite(mealId);
            dispatch(removeFavorite({id: mealId}));
        } else {
            // favoriteMealsCtx.addFavorite(mealId);
            dispatch(addFavorite({id: mealId}));
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        icon={mealIsFavorite ? 'star' : 'star-outline'}
                        color="white"
                        onPress={changeFavoriteStatusHandler}
                    />
                );
            },
        });
    }, [navigation, changeFavoriteStatusHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients}/>
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps}/>
                </View>
            </View>
        </ScrollView>
    );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    detailText: {
        color: 'white',
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%',
    },
});