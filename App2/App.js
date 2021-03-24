/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {StyleSheet,Text,View, TextInput, Button} from 'react-native';


const App: () => Node = () => {




  return (
    /* tu to co sie wyswietla / renderuje*/
    <View style ={{padding: 20,flexDirection: 'row'}}>
    <View>
    <Text style={{backgroundColor: 'grey',padding:30, width:110, height:100,textAlign: 'center',}}>1</Text>
    </View>
    <View>
    <Text style={{backgroundColor: 'blue',padding:30, width:110,height:100, textAlign: 'center',}}>2</Text>
    </View>
    <View>
    <Text style={{backgroundColor: 'green',padding:30, width:110, height:100,textAlign: 'center',}}>3</Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 32,
    backgroundColor: 'grey',
    flex: 1,
    padding: 50,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  textAlign: 'center',
  },
  sectionText: {
    fontSize: 36,
    fontWeight: '600',
  textAlign: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    width: 150,
    height: 50,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'black',
    backgroundColor: 'blue',
  },
});

export default App;
