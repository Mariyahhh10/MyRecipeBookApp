import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function CustomButton({ title, onPress, style, textStyle, disabled = false }) {
  return (
    <TouchableOpacity
      style={[
        globalStyles.customButton,
        style,
        disabled && { opacity: 0.5 } // Dim button when disabled
      ]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
    >
      <Text style={[globalStyles.customButtonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}