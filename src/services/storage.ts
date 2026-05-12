import AsyncStorage from '@react-native-async-storage/async-storage';
import { FormValues } from '../types/form';

const KEY = '@dynamic_form_data';

export async function saveFormData(data: FormValues): Promise<void> {
  await AsyncStorage.setItem(KEY, JSON.stringify(data));
}

export async function loadFormData(): Promise<FormValues | null> {
  const raw = await AsyncStorage.getItem(KEY);
  return raw ? (JSON.parse(raw) as FormValues) : null;
}

export async function clearFormData(): Promise<void> {
  await AsyncStorage.removeItem(KEY);
}
