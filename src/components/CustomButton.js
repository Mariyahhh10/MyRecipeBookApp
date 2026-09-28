import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function CustomButton({ title, onPress, style }) {
  return (
    <TouchableOpacity style={[globalStyles.customButton, style]} onPress={onPress}>
      <Text style={globalStyles.customButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}