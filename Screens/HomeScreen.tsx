
import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, StatusBar } from "react-native";

const HomeScreen = ({ navigation }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Eventss');
    }, 3000);

    
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1 }}>
    
        <StatusBar backgroundColor="transparent" translucent />
    
      <ImageBackground source={require('../assets/images/Glovers-Icons/Splash.jpeg')} style={styles.Image} />
      <View style={styles.LogoContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Eventss')}>
          <Image source={require('../assets/images/Glovers-Icons/gloverslogo.png')} style={styles.Logo} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  Image: {
    flex: 1
  },
  LogoContainer: {
    position: 'absolute',
    top: '40%',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  Logo: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },
});
