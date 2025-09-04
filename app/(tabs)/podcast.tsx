import { EpDescription } from '@/assets/transcript/g2p0';
import {
    parti, partii, partiii, partiv,
    partv, partvi
} from '@/assets/transcript/g2p1';
import PlayAndShuffle from '@/components/Podcast/PlayAndShuffle';
import Track from '@/components/Podcast/Track';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import className from 'twrnc';

export default function Podcast () {
    return (
        <View>
        <View style={className `bg-blue-100`}>
            <Pressable>
            <FontAwesome 
                name='chevron-left' 
                style={ className `p-1 text-gray-400 ml-3 mt-3` }/>
            </Pressable>
        </View>
        
        <View style={className `bg-blue-100 pt-3`}>
            <Track/>
            <PlayAndShuffle/>
            <View style={className `ml-5 mr-3 bottom-4`}>
            <Text style ={styles.p}>{EpDescription}</Text>
            </View>
        </View>

        <View style ={styles.container2}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={styles.p}>{parti}</Text>
                <Text style={styles.p}>Import Capsule</Text>
                <Text style={styles.p}>{partii}</Text>
                <Text style={styles.p}>Import takeaway format</Text>
                <Text style={styles.p}>Import Capsule</Text>

                <Text style={styles.p}>{partiii}</Text>

                <Text style={styles.p}>Import text</Text>
                <Text style={styles.p}>{partiv}</Text>
                <Text style={styles.p}>{partv}</Text>
                <Text style={styles.p}>Premium?</Text>
                <Text style={styles.p}>{partvi}</Text>
            </ScrollView>
        </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container2: {
        backgroundColor: 'white',
    },
    guestName: {
        fontWeight: '100',
        fontSize: 18,
    },
    p: {
        fontSize: 15,
        paddingBottom: 3,
    },
    scrollContent: {
        padding: 16,
        backgroundColor: 'white',
        paddingLeft: 15,
        paddingTop: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 20,
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 20,
    },
});