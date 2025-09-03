import { Button } from '@react-navigation/elements';
import { router } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, Text, View } from 'react-native';
import className from 'twrnc';


export default function Profile () {
    return (
        <View style={className`bg-blue-900 flex-1`}>
            <Text>This is the profile screen</Text>
        <Button onPress={() => router.push('/artists')}>
        Go to Artists
        </Button>
        <Button onPress={() => router.push('/playlists')}>
        Go to Playlist
        </Button>
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    )
}