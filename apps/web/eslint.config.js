import baseConfig from '@repo/eslint-config/base.eslint.js';
import reactPlugin from 'eslint-plugin-react';

export default [
  ...baseConfig,
  {
    files: ['**/*.jsx', '**/*.tsx'],
    plugins: {
      react: reactPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      // Add web-specific rules or overrides here
      'react/react-in-jsx-scope': 'off', // Example rule for React 17+ (JSX transform)
    },
    settings: {
      react: {
        version: 'detect', // Specify the version of React you are using (e.g., 'detect', '16.8.0', etc.)
      }
    },
  },
];