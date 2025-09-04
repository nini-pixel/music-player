import PlayAndShuffle from '@/components/Podcast/PlayAndShuffle';
import Track from '@/components/Podcast/Track';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Button } from '@react-navigation/elements';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import className from 'twrnc';

export default function Artists () {
    return (
        <View>
        <View style={className `bg-blue-100 flex-1`}>
            <Button onPress={() => router.push('/artists')}>
                <FontAwesome 
                    name='arrow-left' 
                    style={ className `p-1 text-blue-400` }/>
            </Button>
            <Track/>
            <PlayAndShuffle/>
            <View style={styles.container2}>
            <Text style ={styles.p}>Episode description</Text>
            </View>
        </View>

        <View style ={styles.container}>
            <Text style ={styles.title2}> Transcript</Text>
            <Text>------------------------</Text>
            <Text>------------------------</Text>
            <Text>Insert Capsule</Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: 'white',
    },  
    container2: {
        marginLeft: 21,
        marginBottom: 10,
    },
    guestName: {
        fontWeight: '100',
        fontSize: 18,
    },
    p: {
        fontSize: 18,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 28,
    },
    title2: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 20,
    },
});