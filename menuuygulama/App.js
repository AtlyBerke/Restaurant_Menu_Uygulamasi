import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const courses=[
    {name:'Çin Mutfağı',id:1},
    {name:'Makarnalar',id:2},
    {name:'Tavuk Çeşitleri',id:3},
    {name:'Aperatifler',id:4},
    {name:'Et Çeşitleri',id:5}
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restaurant Menü</Text>
      <Text style={styles.content}>ATALAY BERKE CİN</Text>
      <StatusBar style="auto" />
    </View>
  );
  
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
