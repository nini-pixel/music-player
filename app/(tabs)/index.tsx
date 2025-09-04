import Track from '@/components/Playlist/Track';
import { Button } from '@react-navigation/elements';
import { router } from "expo-router";
import React from 'react';
import { Text, View } from 'react-native';
import className from 'twrnc';


export default function Index () {
    return (
        <View style={className`bg-blue-200 flex-1`}>
        <View>
            <Text>Music App</Text>
            <Track/>
        </View>
        <View>
            <Button onPress={() => router.push('/artists')}>
            My Podcasts
            </Button>
            <Button onPress={() => router.push('/playlists')}>
            My Playlists
            </Button>
            <Button onPress={() => router.push('/favourites')}>
            My Favourites
            </Button>
        </View>
        </View>
    )
}