import PlayAndShuffle from '@/components/Home/PlayAndShuffle';
import Track from '@/components/Home/Track';
import React from 'react';
import { View } from 'react-native';
import className from 'twrnc';


export default function Index () {
    return (
        <View style={className`bg-blue-200 flex-1 gap-2`}>
            <PlayAndShuffle/>
            <Track/>
        </View>
    )
}