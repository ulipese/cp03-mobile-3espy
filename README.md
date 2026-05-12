# 📱 Dynamic Form App

Aplicativo mobile desenvolvido com React Native, Expo SDK 55 e TypeScript, capaz de gerar formulários dinamicamente a partir de uma estrutura JSON.

O projeto simula um cenário real de aplicações profissionais, onde a estrutura do formulário é totalmente configurável sem a necessidade de criar os campos manualmente.

---

## 📌 Funcionalidades

- ✅ Geração dinâmica de formulário via JSON
- ✅ Suporte a múltiplos tipos de campos:
  - text
  - email
  - password
  - number
  - multiline / textarea
  - radio
  - select
  - switch
  - checkbox
  - date
- ✅ Validação de campos obrigatórios
- ✅ Persistência local com AsyncStorage
- ✅ Recuperação automática dos dados salvos
- ✅ Limpeza dos dados armazenados
- ✅ Exibição do resultado após envio
- ✅ Compatível com Android, iOS e Web
- ✅ Projeto 100% em TypeScript (sem uso de `any`)

---

## 🧰 Tecnologias Utilizadas

- React Native
- Expo SDK 55
- TypeScript
- AsyncStorage

O Expo facilita a execução do mesmo código em Android, iOS e Web. :contentReference[oaicite:0]{index=0}

---

## ▶️ Como Executar o Projeto

### Pré-requisitos

- [Node.js (LTS)](https://nodejs.org?utm_source=chatgpt.com)
- [Expo CLI (via npx)](https://docs.expo.dev/get-started/create-a-project/?utm_source=chatgpt.com)
- Um navegador, emulador Android/iOS ou aplicativo Expo Go

### Instalação

```bash
git clone <URL_DO_REPOSITORIO>
cd dynamic-form-app
npm install
npx expo start --web
```

📷 Prints da Aplicação

Adicione aqui capturas de tela da aplicação em funcionamento.

Tela do Formulário

Resultado do Submit

🗂️ Estrutura de Pastas
```
dynamic-form-app/
├── App.tsx
├── app.json
├── package.json
├── tsconfig.json
├── README.md
└── src/
    ├── components/
    │   └── DynamicField.tsx
    ├── config/
    │   └── formConfig.ts
    ├── hooks/
    │   └── useDynamicForm.ts
    ├── screens/
    │   └── DynamicFormScreen.tsx
    ├── services/
    │   └── storage.ts
    └── types/
        └── form.ts
```

#### 🧠 Hooks Utilizados
useState
useEffect
useMemo
useCallback

#### 💾 Persistência de Dados

Os dados preenchidos no formulário são armazenados localmente utilizando AsyncStorage.

O aplicativo:

Salva os dados ao submeter <br>
Recupera os dados ao abrir o app <br>
Permite limpar os dados armazenados

#### 📱 Plataformas Suportadas
Android
iOS
Web <br>
### 👥 Integrantes
Felipe C. Cordeiro — RM554909 <br>
Felipe S. Oliveira — RM559085 <br>
Pedro H. Santos — RM558107

### 📅 Entrega

Checkpoint 3 — React Native
FIAP — Formulários Dinâmicos a partir de JSON