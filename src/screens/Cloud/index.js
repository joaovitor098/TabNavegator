import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Cloud() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate('Settings')}
        title="Ir para o botão Configurações"
        color="#36311F"
        accessibilityLabel="Ir para o botão Configurações"
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
