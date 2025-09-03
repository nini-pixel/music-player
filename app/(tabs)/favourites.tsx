import React from 'react';
import { Text, View } from 'react-native';
import className from 'twrnc';


export default function Favourites () {
    return (
        <View style={className`bg-blue-900 flex-1`}>
            <Text>Favourites</Text>
        </View>
    )
}