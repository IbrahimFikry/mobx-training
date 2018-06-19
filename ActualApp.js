import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {inject, observer} from 'mobx-react';

@inject("cache1")
@observer
class ActualApp extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return(
      <View>
      <Text>This is main App</Text>
      <Text>{this.props.cache1.name}</Text>
      <AnotherComponent/>
      </View>
    )
  }
}

@inject("cache1")
@observer
class AnotherComponent extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <View>
      <Text>{this.props.cache1.name}</Text>
      </View>
    )
  }
}

export default () => <ActualApp/>;
