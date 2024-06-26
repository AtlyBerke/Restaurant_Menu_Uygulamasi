import { StyleSheet, Text, View,Pressable,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function FoodItem({
    id,
    title,
    imageUrl,
    affordability,
    complexity
}) {

  const navigation = useNavigation();
  const FoodItemHandler = () => {
    navigation.navigate('FoodDetail', {
      foodId: id,
    });
  };
  return (
    <View style={styles.foodItem}>
     <Pressable
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={FoodItemHandler}
      >
      <View>
        <View style={styles.innerView}> 
           <Image source={{uri:imageUrl}} style={styles.image}/>
           <Text style={styles.title}>{title}</Text>
        </View>

        <View style={styles.details}>
           <Text style={styles.detailItem}>{complexity}</Text>
           <Text style={styles.detailItem}>{affordability}</Text>
        </View>

      </View>
      </Pressable>
      
    </View>
  )
}

const styles = StyleSheet.create({
  foodItem:{
    margin: 15,
    backgroundColor: '#5fa8d3',
    elevation: 4,
    shadowColor: 'red',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 10,
  },

  innerView:{},

  image:{
    width: '100%',
    height: 200,
  },
  
  title:{
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    margin: 8,
  },

  details:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },

  detailItem:{
    marginHorizontal: 4,
    fontSize: 17,
  },

  buttonPressed: {
    opacity: 0.5,
  },

});