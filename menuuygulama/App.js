import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screen/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodOverviewScreen from './screen/FoodOverviewScreen';
import FoodDetailScreen from './screen/FoodDetailScreen';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screen/FavoritesScreen';
import { FontAwesome6 } from '@expo/vector-icons';
import FavoritesContextProvider from './store/favoritescontext';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#0077b6' },
        headerTintColor: '#000814',
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'Tüm Kategoriler',
          drawerIcon: () => <FontAwesome6 name="list" size={24} color="yellow" />,
        }}
      />
     <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: 'Favoriler',
          drawerIcon: () => (
            <FontAwesome6 name="face-grin-stars" size={24} color="yellow" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
     <FavoritesContextProvider>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#000814' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '38a3a5' },
        }}
      >
         
         <Stack.Screen
          name="Drawer"
          component={DrawerNavigator}
          options={{
           headerShown:false,
          }}
        />
       
        <Stack.Screen name="FoodOverview" component={FoodOverviewScreen} />
        <Stack.Screen
          name="FoodDetail"
          component={FoodDetailScreen}
          options={{
            title: 'İçerik',
          }}
        />
      </Stack.Navigator>
      </FavoritesContextProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38a3a5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
