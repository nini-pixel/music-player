import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Button } from '@react-navigation/elements';
import { router } from "expo-router";
import React from 'react';
import { Pressable, View } from 'react-native';
import className from 'twrnc';


export default function PlayAndShuffle () {
    return (
        <View>
        <View style={className`flex-row justify-end right-8 items-center gap-8 top-20`}>
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

        <View style={className`flex-row items-center justify-end gap-5 top-25`}>
            <Button onPress={() => router.push('/podcast')} style={className `w-70`}>
            Watch next
            </Button>
            <Button onPress={() => router.push('/playlists')} style={className `w-70`}>
            Add to this playlist
            </Button>
        </View>
        </View>
    )
}