import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}

      {/* Today´s Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}></Text>

        <View style={styles.items}>
          {/* This is whhere the tasks will go! */}
          <Task text={'Task 1'}/>
          <Task text={'Task 2'}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#E8EAED'
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  }
});
