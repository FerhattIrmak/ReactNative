import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import useResults from "../api/hooks/useResults";
import ResultsList from "./components/ResultsList";

export default function SearchScreen() {
  const [searchApi, results, errorMessage] = useResults();
  const [term, setTerm] = useState("");
  console.log(results);
  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
      {results.length === 0 ? (
        <Text style={styles.noResults}>Sonuç bulunamadı.</Text>
      ) : (
        <React.Fragment>
          <ResultsList
            title="Ucuz Restaurantlar"
            results={filterResultsByPrice("₺")}
          />
          <ResultsList
            title="Uygun Restaurantlar"
            results={filterResultsByPrice("₺₺")}
          />
          <ResultsList
            title="Pahalı Restaurantlar"
            results={filterResultsByPrice("₺₺₺")}
          />
        </React.Fragment>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  errorMessage: {
    color: 'red',
    fontSize: 16,
    marginVertical: 10,
  },
  noResults: {
    fontSize: 16,
    marginVertical: 10,
  },
});