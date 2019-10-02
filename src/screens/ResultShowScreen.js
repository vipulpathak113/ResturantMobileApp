import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  ScrollView
} from "react-native";
import yelp from "../api/yelp";

const ResultShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);

  const id = navigation.getParam("id");
  console.log(result);

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.viewStyle}>
      <Text>{result.name}</Text>
      <ScrollView>
        <FlatList
          data={result.photos}
          keyExtractor={photo => photo}
          renderItem={({ item }) => {
            return <Image source={{ uri: item }} style={styles.image} />;
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300
  },
  viewStyle: {
    flex: 1,
    marginBottom: 10
  }
});

export default ResultShowScreen;
