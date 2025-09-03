import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import { TextInput, View } from 'react-native';
import className from 'twrnc';

const SearchInput = () => {
    return (
        <View style={className `bg-blue-900 p-1`}>
            <FontAwesome 
              name='search'
              color={'white'}
              style={ className `bg-blue-800 p-2` }/>
            <TextInput placeholde='Find in songs' style=
                {className`text-lg flex-1 p-3`}/>
        </View>
    )
}

export default SearchInput