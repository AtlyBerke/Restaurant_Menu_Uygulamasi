import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FoodIngredients({ data }) {
  return data.map((dataIng) => (
    <View key={dataIng} style={styles.listItem}>
      <Text style={styles.itemText}>{dataIng}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#00b4d8',
    marginVertical: 5,
    marginHorizontal: 14,
    borderRadius: 10,
    paddingVertical: 7,
  },
  itemText: {
    textAlign: 'center',
  },
});
