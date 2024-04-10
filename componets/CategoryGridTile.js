import { Pressable, View, Text, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function CategoryGridTile({ title, color,onPressed }) {
    // const navigation =  useNavigation()
    // function onPressed() {
    //     navigation.navigate('MealsOverviewScreen', {
         
    //             });
    // }
    return (
        <View style={[styles.gridItem,{backgroundColor:color}]}>
       <Pressable     style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]} onPress={onPressed}>
                <View style={styles.innerItem}>
            <Text style={styles.textItem}>{ title}</Text>
        </View>
        </Pressable>
        
        </View>
 
    );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    innerItem: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        borderRadius:16,

    },
    gridItem: {
        flex: 1,
        backgroundColor: 'red',
       
        margin: 12,
        height: 150,
      overflow:'hidden',
        borderRadius: 16,
        elevation: 4,
        shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    
    },
    textItem: {
        // backgroundColor: 'yellow',
        fontSize:16
    },
    button: {
        flex: 1,
        borderRadius: 16, overflow: 'hidden'
      },
      buttonPressed: {
        opacity: 0.5,
      },
})