import globals from 'globals';
import pluginJs from '@eslint/js';
import nodePlugin from 'eslint-plugin-n';

export default [
  {
    ignores: ['client/'],
    plugins: { n: nodePlugin },
    rules: { 'no-process-env': 'off' },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
