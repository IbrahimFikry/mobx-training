import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'mobx-react'

import mobxstores from './mobxstores';

import ActualApp from './ActualApp.js';

export default class App extends React.Component {
  render() {
    return (
      <Provider {...mobxstores}>
       <ActualApp/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
