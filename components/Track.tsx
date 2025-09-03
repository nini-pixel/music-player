import Logo from '@/assets/image/logo.png';
import React from 'react';
import { Image, View } from 'react-native';
import className from 'twrnc';


export default function Track () {
    return (
        <View style={className `left-10`}>
            <Image source={Logo} style={{width:250, height: 150}}/>
        </View>
    )
}

