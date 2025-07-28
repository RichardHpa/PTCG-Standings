import globals from 'globals';
import pluginJs from '@eslint/js';
import nodePlugin from 'eslint-plugin-n';

export default [
  {
    languageOptions: { globals: globals.node },
    ignores: ['client/'],
    plugins: { nodePlugin },
    rules: { 'no-process-env': 'off' },
  },
  {
    files: ['**/*.test.js', '**/*.spec.js'],
    languageOptions: { globals: { ...globals.node, ...globals.jest } },
  },
  pluginJs.configs.recommended,
];
