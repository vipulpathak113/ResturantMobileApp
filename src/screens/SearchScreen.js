import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import { Snackbar } from "react-native-paper";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const searchApi = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term,
          location: "san jose"
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something Went Wrong");
      setVisible(true);
    }
  };

  const filterResultsByPrice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  useEffect(() => {
    searchApi();
  }, []);

  return (
    <View style={styles.viewStyle}>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
        />
        <ResultsList title="Bit Pricier" results={filterResultsByPrice("$$")} />
        <ResultsList
          title="Big Spencer"
          results={filterResultsByPrice("$$$")}
        />
      </ScrollView>
      <Snackbar
        style={styles.snackbarStyle}
        visible={visible}
        onDismiss={() => setVisible(false)}
        action={{
          label: "Dismiss",
          onPress: () => setVisible(false)
        }}
      >
        <Text>{errorMessage}</Text>
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1
  },
  snackbarStyle: {
    alignSelf: "center"
  }
});

export default SearchScreen;
