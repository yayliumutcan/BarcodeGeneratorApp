import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import BarcodeCreator, { BarcodeFormat } from 'react-native-barcode-creator';

function App() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("");

  function codeMode() {
    setMode("CODE128");
  }
  function codeMode2() {
    setMode("QR");
  }
  function codeMode3() {
    setMode("AZTEC");
  }
  function click() {
    setMode("");
    setInput("");
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <Text style={styles.headerTitle}>Barcode Generator</Text>
      <View style={styles.inner_container}>
        <Text style={styles.headerText}>Select Barcode Format</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={styles.button}
            onPress={codeMode}>
            <Text style={styles.titleText}>CODE128</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={codeMode2}>
            <Text style={styles.titleText}>QR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={codeMode3}>
            <Text style={styles.titleText}>AZTEC</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body_container}>
        <View style={styles.case_container}>
          <TextInput
            placeholder='Press And Barcode Scan'
            style={styles.textInput}
            onChangeText={text => setInput(text )}
            placeholderTextColor={'#000'}
            value={input}
          />
          <TouchableOpacity style={styles.button_container}>
            <Text style={styles.button_text} onPress={click}>Delete</Text>
          </TouchableOpacity>
        </View>
        {mode == 'AZTEC' &&
          <BarcodeCreator
            value={input}
            background={"#FFFFFF"}
            foregroundColor={"#000000"}
            format={BarcodeFormat.AZTEC}
            style={styles.box}
          />}
        {mode == 'CODE128' &&
          <BarcodeCreator
            value={input}
            background={"#FFFFFF"}
            foregroundColor={"#000000"}
            format={BarcodeFormat.CODE128}
            style={styles.box_cont}
          />}
        {mode == 'QR' &&
          <BarcodeCreator
            value={input}
            background={"#FFFFFF"}
            foregroundColor={"#000000"}
            format={BarcodeFormat.QR}
            style={styles.box}
          />}
        <Text style={styles.title}>{input}</Text>
      </View>
    </SafeAreaView>
  );
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle:{
    fontSize:28,
    fontWeight:'700',
    color:'darkblue',
    marginVertical:20,
  },
  inner_container: {
    alignItems: 'center',
    marginTop:100,
  },
  body_container: {
    alignItems: 'center',
    marginVertical:50,
  },
  box: {
    width: 400,
    height: 200,
    marginVertical: 8,
  },
  box_cont: {
    width: 365,
    height: 120,
  },
  case_container: {
    flexDirection: 'row',
    marginBottom:100,
  },
  button_container: {
    height: 50,
    width: 70,
    backgroundColor: 'darkred',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 12,
  },
  button_text: {
    color: 'white',
    fontWeight: '600',
    fontSize: 15,
  },
  textInput: {
    backgroundColor: '#e8e8e8',
    padding: 10,
    borderTopLeftRadius: 12,
    height: 50,
    width: 200,
    marginBottom: 20,
  },
  title: {
    letterSpacing: 12,
    fontSize: 16,
    color: 'black',
  },
  button: {
    alignItems: "center",
    backgroundColor: "darkblue",
    marginVertical: 10,
    marginLeft: 10,
    padding: 10,
  },
  titleText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  headerText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
});


