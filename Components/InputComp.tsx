import { View, Text, TextInput, Button,StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SelectList from 'react-native-dropdown-select-list'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Nasa } from './Container'
const InputComp = ({navigation}: NativeStackScreenProps<Nasa,'InputComp'>) => {
    const [input, setInput] = useState([])
    const [value, setValue] = useState('')

    useEffect(() => {
        axios.get('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=wxBbaDlaQ0yIZNNYmvdHvNygYtdo0L3BQnn0SITG')
            .then((res) => {
                const result = res.data.near_earth_objects 
                const value = result.map((ele: any) => ele.id)
                setInput(value)
            })
            .catch((err) => console.log(err.message))
    },[])

    console.log(value)

    const handleSubmit = () => {
        // const random = Math.floor(Math.random() * input.length)
        // const random2 = input[random]
        axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${value}?api_key=wxBbaDlaQ0yIZNNYmvdHvNygYtdo0L3BQnn0SITG`)
            .then((res) => {
                const result = res.data
                navigation.navigate('AstDetails', {
                    name: result.name,
                    nasa_jpl_url: result.nasa_jpl_url,
                    is_potentially_hazardous_asteroid: result.is_potentially_hazardous_asteroid

                })
            })
    }

    const handleRandom = () => {
        const random = Math.floor(Math.random() * input.length)
        const random2 = input[random]
        axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${random2}?api_key=wxBbaDlaQ0yIZNNYmvdHvNygYtdo0L3BQnn0SITG`)
            .then((res) => {
                const result = res.data
                navigation.navigate('RandomComp',{
                    name: result.name,
                    nasa_jpl_url: result.nasa_jpl_url,
                    is_potentially_hazardous_asteroid: result.is_potentially_hazardous_asteroid
                })
            })
    }

  return (
    <View style={styles.input}>
        <Text style={styles.head}>ASTROID APP</Text>
        <View style={styles.select}>
        <SelectList search={false} data={input} setSelected={setValue}></SelectList>
        </View>
        <View style={styles.submit}>
        <Button disabled={value.length === 0} title='Submit' onPress={handleSubmit}></Button>
        </View>
        <View style={styles.random}>
        <Button  title='Random' onPress={handleRandom}></Button>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    input: {
        marginTop: 70
    },
    select : {
        width: "100%",
        padding: 10
    },
    submit:{
        borderWidth: 1,
        width: '40%',
        marginLeft: "30%",
        marginTop: 40,
        backgroundColor: "black",
    },
    random: {
        borderWidth: 1,
        width: '40%',
        marginLeft: "30%",
        marginTop: 40,
        backgroundColor: "#171E27",
        color: 'black'
    },
    head:{
        textAlign: 'center',
        fontSize: 40,
        margin: 20,
        color: '#171E27'
    }
})

export default InputComp