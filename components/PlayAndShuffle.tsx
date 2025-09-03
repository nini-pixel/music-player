import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Button } from '@react-navigation/elements';
import { router } from "expo-router";
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import className from 'twrnc';


export default function PlayAndShuffle () {
    return (
        <View>
        <View style={className`flex-row justify-between items-center top-60`}>
            <Pressable style={className `flex-row justify-center 
                items-center gap-3 bg-blue-300 rounded-lg p-3 w-40 left-80`}>
                <FontAwesome 
                    name='play' 
                    style={ className `p-1 text-blue-400` }/>
                <Text style={className `text-lg font-bold text-gray-100`}>Play</Text>
            </Pressable>
        </View>

        <View style={className`flex-row items-center top-80`}>
            <Button onPress={() => router.push('/artists')}>
            Add to queue
            </Button>
            <Button onPress={() => router.push('/playlists')}>
            Add to playlist
            </Button>
            <Button onPress={() => router.push('/favourites')}>
            Add to favourites
            </Button>
        </View>
        </View>
    )
}