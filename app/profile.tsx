import { Button } from '@react-navigation/elements';
import { router } from "expo-router";
import React from 'react';
import { Text, View } from 'react-native';
import className from 'twrnc';

export default function Index () {
    return (
        <View style={className`bg-blue-900 flex-1`}>
            <Text>This is the profile screen</Text>
        <Button onPress={() => router.push('/artists')}>
        Go to Artists
        </Button>
        <Button onPress={() => router.push('/playlists')}>
        Go to Playlist
        </Button>
        <Button onPress={() => router.push('/favourites')}>
        Go to Favourites
        </Button>
        </View>
    )
}