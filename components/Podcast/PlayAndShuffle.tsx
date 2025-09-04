import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import { Pressable, View } from 'react-native';
import className from 'twrnc';


export default function PlayAndShuffle () {
    return (
        <View style={className`flex-row ml-80 bottom-10 items-center gap-5`}>
            <Pressable>
                <FontAwesome 
                    name='random' 
                    style={ className `p-1 text-blue-400` }/>
            </Pressable>
            <Pressable>
                <FontAwesome 
                    name='step-backward' 
                    style={ className `p-1 text-blue-400` }/>
            </Pressable>
            <Pressable style={className `flex-row justify-center 
                items-center gap-3 bg-blue-300 rounded-full p-3 w-11`}>
                <FontAwesome 
                    name='play' 
                    style={ className `p-1 text-blue-400` }/>
            </Pressable>
            <Pressable>
                <FontAwesome 
                    name='step-forward' 
                    style={ className `p-1 text-blue-400` }/>
            </Pressable>
            <Pressable>
                <FontAwesome 
                    name='heart' 
                    style={ className `p-1 text-blue-400` }/>
            </Pressable>
        </View>
    )
}