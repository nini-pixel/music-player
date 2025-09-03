import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import { TextInput, View } from 'react-native';
import className from 'twrnc';

const SearchInput = () => {
    return (
        <View style={className `bg-blue-200 p-2 text-gray-100 
                rounded-lg flex-row justify-start items-center 
                px-3 gap-3 absolute top-10 left-4 right-4`}>
            <FontAwesome 
              name='search' 
              style={ className `bg-blue-200 p-1 text-gray-400` }/>
            <TextInput 
                placeholder='Find in songs' 
                style={className`text-5x1 flex-1 p-1 text-gray-100`}/>
        </View>
    )
}

export default SearchInput