import { FormConfig } from '../types/form';

export const formConfig: FormConfig = {
  title: 'Cadastro de Usuário',
  fields: [
    { id: 'name', label: 'Nome', type: 'text', required: true },
    { id: 'email', label: 'E-mail', type: 'email', required: true },
    { id: 'password', label: 'Senha', type: 'password', required: true },
    {
      id: 'gender',
      label: 'Gênero',
      type: 'radio',
      required: true,
      options: [
        { label: 'Masculino', value: 'male' },
        { label: 'Feminino', value: 'female' },
      ],
    },
    {
      id: 'state',
      label: 'Estado',
      type: 'select',
      required: true,
      options: [
        { label: 'SP', value: 'SP' },
        { label: 'RJ', value: 'RJ' },
      ],
    },
      {
      id: 'hobbies',
      label: 'Hobbies',
      type: 'checkbox',
      required: false,
      options: [
        { label: 'Academia', value: 'Academia' },
        { label: 'Leitura', value: 'Leitura' },
        { label: 'Música', value: 'Música' },
      ],
    },
    { id: 'newsletter', label: 'Receber novidades', type: 'switch', required: false },
    { id: 'birthDate', label: 'Data de nascimento', type: 'date', required: true },
    { id: 'bio', label: 'Bio', type: 'multiline', required: false },
  ],
};
