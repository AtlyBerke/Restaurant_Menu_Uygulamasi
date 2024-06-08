import { StyleSheet, Text, View, Pressable, ImageBackground } from 'react-native';
import React from 'react';

export default function CategoryGrid({ title, color, pressFood }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={pressFood}
      >
        <ImageBackground
          source={{ uri: 'https://static.vecteezy.com/system/resources/previews/021/428/963/non_2x/background-junk-food-related-seamless-pattern-and-background-editable-stroke-fast-food-line-art-of-hamburger-pizza-hot-dog-beverage-cheeseburger-restaurant-menu-background-free-vector.jpg' }} // Arka plan resmi URL'si
          style={styles.background}
          imageStyle={{ borderRadius: 20 }} // Arka plan resminin köşelerini yuvarlama
        >
          <View style={[styles.insideView, { backgroundColor: color }]}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </ImageBackground>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 150,
    margin: 15,
    borderRadius: 20,
    elevation: 4,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: 'red',
    overflow: 'hidden', // Köşelerin düzgün görünmesi için
  },
  button: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  insideView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)', // İçeriğin daha okunabilir olması için yarı saydam arka plan
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#780000',
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
