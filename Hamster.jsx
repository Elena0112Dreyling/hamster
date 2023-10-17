import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const Hamster = ({name, color, isHungry}) => {

    let [status, setStatus] = useState(isHungry ? 'hungry' : 'full');


    return (
        <>
        <View>
        <Text></Text>
        <Text></Text>
        <Text>Hello, my name is {name}</Text> 
        <Text>My color is {color}</Text>
        <Text>i`m {status}</Text>
        <Button onPress={() => setStatus('full')} title = 'Feed Hamster!'/>
        </View>
        </>
        );
    
  };


export default Hamster;
