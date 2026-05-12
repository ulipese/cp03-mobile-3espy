import React from 'react';
import {
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import { FieldConfig, FormValues } from '../types/form';

type Props = {
  field: FieldConfig;
  value: FormValues[string];
  error?: string;
  onChange: (value: FormValues[string]) => void;
};

export function DynamicField({ field, value, error, onChange }: Props) {
  const renderOptions = () =>
    field.options?.map((option) => {
      const isChecked =
        field.type === 'checkbox'
          ? Array.isArray(value) && value.includes(option.value)
          : String(value) === option.value;

      const handleCheckboxChange = () => {
        if (field.type === 'checkbox') {
          const currentArray = Array.isArray(value) ? value : [];
          if (isChecked) {
            onChange(currentArray.filter((v) => v !== option.value));
          } else {
            onChange([...currentArray, option.value]);
          }
        } else {
          onChange(option.value);
        }
      };

      return (
        <TouchableOpacity
          key={option.value}
          style={styles.option}
          onPress={handleCheckboxChange}
        >
          <Text>
            {field.type === 'checkbox'
              ? isChecked ? '☑' : '☐'
              : isChecked ? '◉' : '○'}
            {' '}{option.label}
          </Text>
        </TouchableOpacity>
      );
    });

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{field.label}</Text>

      {(field.type === 'text' ||
        field.type === 'email' ||
        field.type === 'password' ||
        field.type === 'number' ||
        field.type === 'date' ||
        field.type === 'multiline') && (
        <TextInput
          style={[styles.input, field.type === 'multiline' && styles.multiline]}
          value={String(value)}
          onChangeText={onChange}
          secureTextEntry={field.type === 'password'}
          keyboardType={
            field.type === 'email'
              ? 'email-address'
              : field.type === 'number'
              ? 'numeric'
              : 'default'
          }
          multiline={field.type === 'multiline'}
        />
      )}

      {(field.type === 'radio' || field.type === 'select' || field.type === 'checkbox') && renderOptions()}

      {field.type === 'switch' && (
        <Switch value={Boolean(value)} onValueChange={onChange} />
      )}

      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 16 },
  label: { fontWeight: '600', marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#fff',
  },
  multiline: { minHeight: 100, textAlignVertical: 'top' },
  option: { paddingVertical: 6 },
  error: { color: 'red', marginTop: 4 },
});
