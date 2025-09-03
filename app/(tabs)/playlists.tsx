import PlayAndShuffle from '@/components/PlayAndShuffle';
import SearchInput from '@/components/SearchInput';

import React from 'react';
import { View } from 'react-native';
import className from 'twrnc';


export default function Playlist () {
    return (
        <View style={className`bg-blue-100 flex-1`}>
            <SearchInput/>
            <PlayAndShuffle/>
        </View>
    )
}