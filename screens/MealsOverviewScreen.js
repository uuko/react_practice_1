import { View, Text, StyleSheet,FlatList } from 'react-native';
import { useLayoutEffect } from 'react';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import { useRoute } from '@react-navigation/native';
import MealItem from '../componets/MealItem';
import MealsList from "../componets/MealsList";
function MealsOverviewScreen({ route,navigation }) {
    const catId = route.params.categoryId;
  
    const displayedMeals = MEALS.filter((mealItem) => {
      return mealItem.categoryIds.indexOf(catId) >= 0;
    });
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(
          (category) => category.id === catId
        ).title;
    
        navigation.setOptions({
          title: categoryTitle,
        });
      }, [catId, navigation]);

    return <MealsList items={displayedMeals} />;

}
  
  export default MealsOverviewScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });

