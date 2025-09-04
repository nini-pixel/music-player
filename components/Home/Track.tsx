import L2 from '@/assets/image/2.png';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import className from 'twrnc';

const Track = () => {
    return (
        <View style={className `left-10 flex-row gap-21 bottom-62px`}>
            <Image 
              source={L2} 
              style={className `w-50 h-30 rounded-lg border bottom-2`}
              />
            <View style={className `flex-col`}>
                <Text style={styles.title}>Title</Text>
                <Text style={styles.subtitle}>Subtitle</Text>
                <Text style={styles.guestName}>Guest</Text>
            </View>
        </View>
    )
}

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


