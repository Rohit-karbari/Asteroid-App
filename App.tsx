import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Container from './Components/Container';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
    <View>
      <StatusBar style="auto" />
      <View style={styles.text}>
        <Container/>
      </View>
    </View>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  text: {
    width: "100%",
    height:"100%"
  }
});
