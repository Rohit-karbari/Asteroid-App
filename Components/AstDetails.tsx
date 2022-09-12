import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Nasa } from './Container'

const AstDetails = ({navigation, route}: NativeStackScreenProps<Nasa, 'AstDetails'>) => {

  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Asteroid Details</Text>
      <Text>Name :- {route.params?.name}</Text>
      <Text>URL :- {route.params?.nasa_jpl_url}</Text>
      <Text>Is Hazardos :- {`${route.params?.is_potentially_hazardous_asteroid}`}</Text>
    </View>
  )
}



export default AstDetails

const styles = StyleSheet.create({
        container:{
            backgroundColor: "#D1CDDA",
            margin: 20,
            position: 'relative',
            height: '30%',
            padding: 20,
        },

        heading: {
            textAlign: 'center',
            margin: 15,
            fontSize: 30
        }

  });