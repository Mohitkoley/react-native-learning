import coffeeImage from "@/assets/images/coffee.jpg";
import { Link } from 'expo-router';
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={coffeeImage} style={styles.image} resizeMode="cover">
        <Text style={styles.text}>Coffee shop</Text>
        <Link href="/explore">Explore</Link>
      </ImageBackground>
    </View>
  );
}

export default app

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    flexDirection: 'column',
    padding: 30,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    flex:1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    margin: 10,
  },
  Link:{
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    margin: 10,
    textDecorationLine: "underline"
  }
})
