import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function CustomButton({ title, onPress, style, icon }) {
  return (
    <TouchableOpacity style={[globalStyles.customButton, style]} onPress={onPress}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        {icon && <Text style={{ marginRight: 6 }}>{icon}</Text>}
        <Text style={globalStyles.customButtonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}