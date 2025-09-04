import Logo from '@/assets/image/logo.png';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import className from 'twrnc';


const Track = () => ({
    return (
            <View style={className `flex-row gap-3 justify-between items-center`}>
                <Image source={Logo}/>
                <className `h-12 w-12 rounded-lg border border-gray-300`}/>
                <View style={className `flex-1`}>
                    <Text style={className `text-white text-lg`}>Guess the wind</Text>
                    <Text style={className `text-white`}>Spaqoo</Text>
                </View>
            </View>
    )
})

export default Track

const styles = StyleSheet.create ({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 18,
    },
    guestName: {
        fontSize: 16,
        color: 'gray'
    }
})