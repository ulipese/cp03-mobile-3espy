import { useCallback, useEffect, useMemo, useState } from 'react';
import { formConfig } from '../config/formConfig';
import { clearFormData, loadFormData, saveFormData } from '../services/storage';
import { FormValues } from '../types/form';

export function useDynamicForm() {
  const initialValues = useMemo<FormValues>(() => {
    const values: FormValues = {};
    for (const field of formConfig.fields) {
      if (field.type === 'checkbox') {
        values[field.id] = [];
      } else if (field.type === 'switch') {
        values[field.id] = false;
      } else {
        values[field.id] = '';
      }
    }
    return values;
  }, []);

  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<FormValues | null>(null);

  useEffect(() => {
    loadFormData().then((saved) => {
      if (saved) {
        setValues((prev) => ({ ...prev, ...saved }));
        setSubmitted(saved);
      }
    });
  }, [initialValues]);

  const setValue = useCallback((id: string, value: FormValues[string]) => {
    setValues((prev) => ({ ...prev, [id]: value }));
  }, []);

  const validate = useCallback(() => {
    const nextErrors: Record<string, string> = {};
    for (const field of formConfig.fields) {
      if (!field.required) continue;
      const value = values[field.id];
      const isEmpty =
        value === '' ||
        value === false ||
        (Array.isArray(value) && value.length === 0);
      if (isEmpty) nextErrors[field.id] = 'Campo obrigatório';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }, [values]);

  const submit = useCallback(async () => {
    if (!validate()) return false;
    await saveFormData(values);
    setSubmitted(values);
    return true;
  }, [validate, values]);

  const clear = useCallback(async () => {
    await clearFormData();
    setValues(initialValues);
    setErrors({});
    setSubmitted(null);
  }, [initialValues]);

  return { values, errors, submitted, setValue, submit, clear };
}
