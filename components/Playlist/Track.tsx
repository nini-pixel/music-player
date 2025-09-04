import Logo from '@/assets/image/logo.png';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import className from 'twrnc';


export default function Track () {
    return (
        <View style={className `left-10 flex-row gap-21`}>
            <Image source={Logo} style={className `w-50 h-30 rounded-lg`}/>
            <View style={className `flex-col`}>
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
    },
    guestName: {
        fontSize: 16,
        color: 'gray'
    }
})


