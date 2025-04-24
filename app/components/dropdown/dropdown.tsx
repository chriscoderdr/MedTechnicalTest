import { View, Text, TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import { Image } from "expo-image";
import { useState } from "react";
import { styles } from "./styles";

interface DropdownProps {
  options: Array<{id: number, name: string}>;
  selectedValue?: string;
  onSelect: (value: string) => void;
  style?: StyleProp<ViewStyle>;
}

export default function Dropdown({ options, selectedValue, onSelect, style }: DropdownProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity 
        style={styles.selector} 
        onPress={() => setIsVisible(!isVisible)}
      >
        <Text style={styles.selectorText}>
          {selectedValue || 'Seleccionar'}
        </Text>
        <Image
          style={styles.selectorIcon}
          source={require('@/app/icons/right_icon.svg')}
        />
      </TouchableOpacity>

      {isVisible && (
        <View style={styles.optionsContainer}>
          {options.map(option => (
            <TouchableOpacity
              key={option.id}
              style={styles.option}
              onPress={() => {
                onSelect(option.name);
                setIsVisible(false);
              }}
            >
              <Text style={styles.optionText}>{option.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}