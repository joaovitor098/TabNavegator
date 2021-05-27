import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Settings() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate('Chat')}
        title="Ir para o botão Chat"
        color="#FFB30F"
        accessibilityLabel="Ir para o botão Chat"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
