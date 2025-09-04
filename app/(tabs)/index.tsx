import PlayAndShuffle from '@/components/PlayAndShuffle';
import Track from '@/components/Track';
import React from 'react';
import { View } from 'react-native';
import className from 'twrnc';


export default function Index () {
    return (
        <View style={className`bg-blue-200 flex-1`}>
            <PlayAndShuffle/>
            <Track/>
        </View>
    )
}