import { Button } from '@react-navigation/elements';
import { router } from "expo-router";
import React from 'react';
import { Text, View } from 'react-native';
import className from 'twrnc';

export default function Artists () {
    return (
        <View style={className`bg-blue-100 flex-1`}>
            <Text>Artists</Text>
            <Button onPress={() => router.push('/playlists')}>
                    Hello everyone
            </Button>
        </View>
    )
}