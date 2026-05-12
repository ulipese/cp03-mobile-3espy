import React from 'react';
import {
  Alert,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { DynamicField } from '../components/DynamicField';
import { formConfig } from '../config/formConfig';
import { useDynamicForm } from '../hooks/useDynamicForm';

export function DynamicFormScreen() {
  const { values, errors, submitted, setValue, submit, clear } = useDynamicForm();

  const handleSubmit = async () => {
    const ok = await submit();
    if (ok) {
      const message = JSON.stringify(values, null, 2);
      if (Platform.OS === 'web') {
        window.alert(message);
      } else {
        Alert.alert('Dados enviados', message);
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{formConfig.title}</Text>

      {formConfig.fields.map((field) => (
        <DynamicField
          key={field.id}
          field={field}
          value={values[field.id]}
          error={errors[field.id]}
          onChange={(value) => setValue(field.id, value)}
        />
      ))}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.secondary]} onPress={clear}>
        <Text style={styles.buttonText}>Limpar Dados</Text>
      </TouchableOpacity>

      {submitted ? (
        <View style={styles.result}>
          <Text style={styles.resultTitle}>Último envio:</Text>
          <Text>{JSON.stringify(submitted, null, 2)}</Text>
        </View>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#2563eb',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  secondary: {
    backgroundColor: '#6b7280',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
  },
  result: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
  },
  resultTitle: {
    fontWeight: '700',
    marginBottom: 8,
  },
});
