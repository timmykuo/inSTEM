import React from 'react';
import { ScrollView, FlatList, StyleSheet, Text, View } from 'react-native';

export default class Videos extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <FlatList
              data={[
                // {key: 'Aerospace Engineering'},
                // {key: 'Astronomy'},
                // {key: 'Biochemistry'},
                // {key: 'Biology'},
                // {key: 'Chemical Engineering'},
                // {key: 'Civil Engineering'},
                {key: 'Software Engineering'},
                // {key: 'Electrical Engineering'},
                // {key: 'Mathematics'},
                // {key: 'Mechanical Engineering'},
                // {key: 'Physics'},
                // {key: 'Psychology'},
                // {key: 'Statistics'},
              ]}
              renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
          </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
