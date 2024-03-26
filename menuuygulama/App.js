import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screen/CategoriesScreen';

export default function App() {
  return (<CategoriesScreen/>);
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'aqua',
    
   
  },
  title:{
    fontSize:40,
    color:'white',
    marginBottom:15,
    
  },
  content:{
    fontSize:25,
  }
});
