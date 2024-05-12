import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const AddGifImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{width: '100%', height: '80%'}}
        source={{
          uri: 'https://media.geeksforgeeks.org/wp-content/uploads/20220221170632/ezgifcomgifmaker1.gif',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', // Changed alignContent to alignItems
    margin: 25,
  },
});

export default AddGifImage;
