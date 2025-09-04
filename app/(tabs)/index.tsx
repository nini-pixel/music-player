import L3 from '@/assets/image/3.png';
import L4 from '@/assets/image/4.png';
import L5 from '@/assets/image/5.png';
import PlayAndShuffle from '@/components/Home/PlayAndShuffle';
import Track from '@/components/Home/Track';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import className from 'twrnc';



export default function Index () {
    return (
        <View style={className`bg-blue-200 flex-1 `}>
            <Text style={styles.title}>Our Newest Episodes!</Text>
            
            <PlayAndShuffle/>
            <Track/>

            <Text style={styles.title2}>Your Portal</Text>
            
            <Image 
              source={L3} 
              style={className `ml-5 w-142 h-40 mr-5 mb-2 rounded-lg border-white`}
              />

            <View style={className`bg-blue-200 flex-row items-center border-white`}>
            <Image 
              source={L4} 
              style={className `ml-5 mb-7 w-70 h-43 rounded-lg border-white`}
              />
            <Image 
              source={L5} 
              style={className `ml-2 mb-7 w-70 h-43 rounded-lg border-white`}
              />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        paddingLeft: 20,
        marginTop: 8,
        fontSize: 20,
        fontWeight: 'bold'
    },
    title2: {
        paddingLeft: 20,
        fontSize: 20,
        fontWeight: 'bold',
        bottom: 7,
    }
})