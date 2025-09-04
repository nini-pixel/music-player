import Logo from '@/assets/image/logo.png';
import PlayAndShuffle from '@/components/Home/PlayAndShuffle';
import Track from '@/components/Home/Track';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import className from 'twrnc';



export default function Index () {
    return (
        <View style={className`bg-blue-200 flex-1 gap-2`}>
            <Text style={styles.title}>Our Newest Episodes!</Text>
            <PlayAndShuffle/>
            <Track/>
            <Image 
              source={Logo} 
              style={className `ml-5 w-142 h-40 mr-5 rounded-lg border`}
              />
            <View style={className`bg-blue-200 flex-row items-center`}>
            <Image 
              source={Logo} 
              style={className `ml-5 mb-7 w-70 h-43 rounded-lg border`}
              />
            <Image 
              source={Logo} 
              style={className `ml-2 mb-7 w-70 h-43 rounded-lg border`}
              />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        marginLeft: 15,
        marginTop: 8,
        fontSize: 20,
        fontWeight: 'bold'
    }
})