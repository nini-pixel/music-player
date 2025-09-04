import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, Text, View } from 'react-native';
import className from 'twrnc';



export default function Profile () {
    return (
        <View style={className`bg-blue-900 flex-1`}>
            <Text>This is the profile screen</Text>
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    )
}