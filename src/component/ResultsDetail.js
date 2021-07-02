import { styleSheets } from 'min-document'
import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ResultsDetail = ({result}) => {
    return (    
    <View style={styles.container}>
        <Image style={styles.image} source={{ uri: result.image_url }} />
        <Text style={styles.name}>{result.name}</Text>
        <Text>{result.price}</Text>
        <Text>{result.rating} Stars {result.review_count} reviews</Text>
    </View>)
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16
    },
    container: {
        marginLeft: 10,

    }
})

export default ResultsDetail