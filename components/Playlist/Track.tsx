import Logo from '@/assets/image/logo.png';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import className from 'twrnc';


export default function Track () {
    return (
        <View style={className `flex-row gap-3 justify-between items-center ml-3 top-20`}>
            <Image 
              source={Logo} 
              style={className `h-12 w-12 rounded-lg border border-gray-300`}
              />
            <View style={className `flex-1`}>
                <Text style={styles.title}>Title</Text>
                <Text style={styles.subtitle}>Subtitle</Text>
                <Text style={styles.guestName}>Guest</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 18,
        color: 'white'
    },
    guestName: {
        fontSize: 16,
        color: 'gray'
    }
})