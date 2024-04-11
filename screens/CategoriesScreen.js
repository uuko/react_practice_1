import CategoryGridTile from '../componets/CategoryGridTile';
import { StyleSheet ,FlatList,ScrollView} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';


  
function CategoriesScreen({ navigation }) {
  
    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('MealsOverviewScreen', {
                categoryId:itemData.item.id
            });
          }
        return (
            <CategoryGridTile
                onPressed={pressHandler}
                title={itemData.item.title} color={itemData.item.color} />
        );
      }
      return (
        
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    );
  }

export default CategoriesScreen;

const styles = StyleSheet.create({
    gridItem: {
        
    }
})