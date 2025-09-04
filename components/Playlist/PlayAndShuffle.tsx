import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import className from 'twrnc';


export default function PlayAndShuffle () {
    return (
        <View style={className`flex-row justify-between items-center`}>
            <Pressable style={className `flex-row justify-center items-center
                gap-3 bg-blue-300 rounded-1g p-3 w-68 ml-5`}>
                <FontAwesome 
                    name='play' 
                    style={ className `p-1 text-blue-400` }/>
                <Text style ={className `text-lg font-semibold text-white`}>Play</Text>
            </Pressable>
            <Pressable style={className `flex-row justify-center items-center
                gap-3 bg-blue-300 rounded-1g p-3 w-68 mr-5`}>
                <FontAwesome 
                    name='random' 
                    style={ className `p-1 text-blue-400` }/>
                <Text style ={className `text-lg font-semibold text-white`}>Shuffle</Text>
            </Pressable>
        </View>
    )
}