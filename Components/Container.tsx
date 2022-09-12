import React from 'react'
import { View,Text } from 'react-native'
import InputComp from './InputComp'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AstDetails from './AstDetails';
import RandomComp from './RandomComp';


export type Nasa = {
    InputComp: any;
    AstDetails: any;
    RandomComp: any;
}


const Stack = createNativeStackNavigator<Nasa>()


const Container = () => {
  return (
        <Stack.Navigator initialRouteName='InputComp'>
            <Stack.Screen name='InputComp'  component={InputComp} options={{title: 'Search'}}/>
            <Stack.Screen name='AstDetails' component={AstDetails} options={{title: 'Asteroid Details'}}/>
            <Stack.Screen name='RandomComp' component={RandomComp}  options={{title: 'Random Asteroid Details'}}/>
        </Stack.Navigator>
  )
}

export default Container