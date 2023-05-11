import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Modal, Text } from 'react-native';

export default function App () {
  const [textItem, setTextItem] = useState("");
  const [list, setList] = useState([]);

  const onHandleChangeText = (text) => {
    setTextItem(text);
    console.log(text);
  };

  const addItem = () => {
    setList(prevState => [
      ...prevState,
      { name: textItem, id: Math.random().toString() },
    ]);
    setTextItem("");
  };
  
  deleteItemById = (id) => {
    setList(prevState => {
      return prevState.filter(item => item.id !== id);
    });
  };
  
  const renderItem = ({item}) => (
    <View style={styles.renderItemStyle}>
      <Text>{item.name}</Text>
      <Button
        title="borrar"
        onPress={() => this.deleteItemById(item.id)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.titleContainer}>Carrito</Text>
        <View style={styles.addItemContainer}>
          <TextInput
            placeholder="ingrese un elemento"
            style={styles.input}  
            onChangeText={onHandleChangeText} 
            value={textItem}  
          />
          <Button title="x" onPress={addItem} />
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#E7EAF2",
  },
  inputContainer: {
    alignItems: "center",
    height: 300,
    paddingHorizontal: 30,
    paddingTop: 80,
    backgroundColor: "#fff",
  },
  titleContainer: {
    marginBottom: 30,
    fontSize: 40,
    fontWeight: "500",
    color: "#1E283C"
  },
  addItemContainer: {
    flexdirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 30,
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: 200,
  },
  listContainer: {
    flex: 2,
    marginHorizontal: 30,
    marginTop: 20,
    padding: 3,
  },
  renderItemStyle: {
    height: 60,
    flexdirection: "row",
    marginBottom: 25,
    backgroundColor: "green",
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 3,
  },
});