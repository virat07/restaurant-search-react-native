import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ route, navigation }) => {
    const [results, setResults] = useState(null);
    const { id } = route.params;
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResults(response.data);
    };
    useEffect(() => { getResult(id) }, []);
    if (!results) {
        return null;
    }
    return (
        <View>
            <Text>{results.name}</Text>
            <FlatList
            showsVerticalScrollIndicator={false}
                data={results.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.images} source={{ uri: item }} />
                }}
            />

        </View>
    );
};
const styles = StyleSheet.create({
    images: {
        width: 200,
        height: 300
    }
});
export default ResultsShowScreen; 1