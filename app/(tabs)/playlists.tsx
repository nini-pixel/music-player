import PlayAndShuffle from '@/components/Playlist/PlayAndShuffle';
import SearchInput from '@/components/Playlist/SearchInput';
import Track from '@/components/Playlist/Track';

import React from 'react';
import { View } from 'react-native';
import className from 'twrnc';


export default function Playlist () {
    return (
        <View style={className`bg-blue-100 flex-1 gap-2`}>
            <SearchInput/>
            <PlayAndShuffle/>
            <Track/>
        </View>
    )
}