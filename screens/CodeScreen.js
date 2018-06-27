import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import QRCode from 'react-native-qrcode-svg';

export default class ScanScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    code: 'http://www.google.com?'
  }

  async componentWillMount() {
  }

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.qr}>
          <QRCode size={300} value={ this.state.code } />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  qr: {
    flex: 1,
    alignItems: 'center',
    margin:  20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
});
