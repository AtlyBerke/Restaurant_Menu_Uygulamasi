import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Pressable, Animated, Image, ImageBackground } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <ImageBackground
      source={{ uri: 'https://static.vecteezy.com/system/resources/previews/021/428/963/non_2x/background-junk-food-related-seamless-pattern-and-background-editable-stroke-fast-food-line-art-of-hamburger-pizza-hot-dog-beverage-cheeseburger-restaurant-menu-background-free-vector.jpg' }} // Arka plan resmi URL'si
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Animated.View style={{ ...styles.animatedView, opacity: fadeAnim }}>
          <Image
            source={{ uri: 'https://www.creativefabrica.com/wp-content/uploads/2020/02/12/Food-Logo-Graphics-1-98-580x386.jpg' }} // Üstteki resim URL'si
            style={styles.image}
          />
          <Text style={styles.welcomeText}>RestoMenü Uygulamasına Hoş Geldiniz!</Text>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed ? styles.buttonPressed : null,
            ]}
            onPress={() => navigation.replace('Drawer')}
          >
            <Text style={styles.buttonText}>Kategorilere Git</Text>
          </Pressable>
        </Animated.View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Arka planın karartılması için overlay
  },
  animatedView: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 33,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    color: 'white', // Yazı rengini beyaz yaptık
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0077b6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonPressed: {
    backgroundColor: '#023e8a',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
