import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealsDetailScreen';
import CustomToolbar from "./componets/CustomToolbar";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {Ionicons} from "@expo/vector-icons";
import FavoritesContextProvider from "./store/context/favorit-context";
import FavoritesScreen from "./screens/FavoritesScreen";
import { Provider } from 'react-redux';
import {store} from "./store/redux/store";

const Stack = createNativeStackNavigator();
const  Drawer = createDrawerNavigator()
function drawNavigator(){
    return <Drawer.Navigator
        screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            sceneContainerStyle: { backgroundColor: '#3f2f25' },
        }}>
        <Drawer.Screen name={"CategoriesScreen"} component={CategoriesScreen}
                       options={{
                           drawerIcon: ({ color, size }) => (
                               <Ionicons name="star" color={color} size={size} />
                           ),
                       }}
        ></Drawer.Screen>
        <Drawer.Screen name={"FavoritesScreen"} component={FavoritesScreen}
                       options={{
                           drawerIcon: ({ color, size }) => (
                               <Ionicons name="star" color={color} size={size} />
                           ),
                       }}
        ></Drawer.Screen>
    </Drawer.Navigator>
}
export default function App() {

    return (
        <>
            <StatusBar style="dark"/>
            <Provider store={store}>
            {/*<FavoritesContextProvider>*/}
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerStyle: {backgroundColor: '#351401'},
                            headerTintColor: 'white',
                            contentStyle: {backgroundColor: '#3f2f25'},
                        }}>
                        <Stack.Screen options={{
                            title: 'All Categories',
                            headerShown:false
                        }}
                                      name="DrawerCategoriesScreen" component={drawNavigator}/>
                        <Stack.Screen name="MealsOverviewScreen"
                            // options={({ route, navigation }) => {
                            //   const catId = route.params.categoryId;
                            //   return {
                            //     title: catId,
                            //   };
                            // }}
                                      options={{
                                          header: ({navigation, route, options}) => (
                                              <CustomToolbar
                                                  title="首页"
                                                  onLeftPress={() => {}} // 假设你有一个 Drawer 导航
                                                  onRightPress={() => alert('右侧按钮点击')}
                                              />
                                          ),
                                      }}

                                      component={MealsOverviewScreen}/>
                        <Stack.Screen name="MealDetail" component={MealDetailScreen}/>

                    </Stack.Navigator>

                </NavigationContainer>
            {/*</FavoritesContextProvider>*/}

            </Provider>
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
});
