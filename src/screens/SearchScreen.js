import React, {useState} from 'react'
import {Text, View, StyleSheet, ScrollView} from 'react-native'
import SearchBar from './SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../component/ResultsList'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchAPI, results, errorMessage] = useResults()

    console.log(results)
    const filterResultsByPrice = (price) => {
        //price === $, $$ or $$$
        return results.filter(result => {
            return result.price === price
        })
    }

    return (
    <>
        <SearchBar 
        term={term} 
        onTermChange={setTerm}
        onTermSubmit={ () => searchAPI(term) }
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
 
        <ScrollView>
            <ResultsList title='Cost Effective' results={filterResultsByPrice('$')}/>
            <ResultsList title='Bit Pricier' results={filterResultsByPrice('$$')}/>
            <ResultsList title='Big Spender' results={filterResultsByPrice('$$$')}/>
        </ScrollView>
    </>
    );
}

const styles = StyleSheet.create({
})

export default SearchScreen