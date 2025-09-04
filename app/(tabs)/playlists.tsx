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
            <View style={className `mt-25`}>
                <PlayAndShuffle/>
            </View>
            <View style={className `bottom-15 gap-5`}>
                <Track/>
                <Track/>
                <Track/>
                <Track/>
                <Track/>
            </View>
        </View>
    )
}