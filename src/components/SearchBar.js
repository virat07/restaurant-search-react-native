import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = (props) => {
    return (
        <View style={styles.backgroundSearchBar}>
            <Feather name='search' style={styles.iconStyles} />
            <TextInput
                placeholder='Search'
                style={styles.searchBarInput}
                value={props.term}
                onChangeText={(newTerm) => props.searchInput(newTerm)}
                autoCapitalize='none'
                autoCorrect={false}
                onEndEditing={()=>props.onTermSubmit()}
            />
        </View>
    )
};
const styles = StyleSheet.create({
    backgroundSearchBar: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        marginBottom:10

    },
    searchBarInput: {
        flex: 1,
        fontSize: 18
    },
    iconStyles: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});
export default SearchBar;