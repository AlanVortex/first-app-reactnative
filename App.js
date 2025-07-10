import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, flexDirection: 'column-reverse' }}>
      <View style={{ flex: 0.2, backgroundColor: 'blue', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.redText}>text1</Text>
        <Text style={styles.redText}>text2</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: 'white' }}></View>
      <View style={{ flex: 0.2, backgroundColor: 'red', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        {/* justify content es eje Y */}
        {/* align items es eje X */}
        <Text style={styles.redText}>text1</Text>
        <Text style={styles.redText}>text2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  redText: {
    flex: 1,
    color: '#fff',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
  },
});
