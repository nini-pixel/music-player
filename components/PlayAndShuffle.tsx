import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import { Pressable, View } from 'react-native';
import className from 'twrnc';


export default function PlayAndShuffle () {
    return (
        <View style={className`flex-row justify-between items-center`}>
            <Pressable style={className `flex-row justify-center`}>
                <FontAwesome 
                    name='play' 
                    style={ className `p-1 text-blue-400` }/>
                <Text style ={classNAme `text-lg font-semibold`}>Play</Text>
            </Pressable>
            <Pressable>
                <FontAwesome 
                    name='random' 
                    style={ className `p-1 text-blue-400` }/>
                <Text style ={classNAme `text-lg font-semibold`}>Play</Text>
            </Pressable>
        </View>
    )
}