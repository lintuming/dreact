module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
      ecmaFeatures: {
        modules: true
      },
    },
    plugins: ['@typescript-eslint'],
    extends: [
      'airbnb',
      'prettier',
      'plugin:import/typescript',
    ],
    overrides: [
      {
        files: ['*.ts', '*.tsx'],
        rules: {
          '@typescript-eslint/no-unused-vars': [2, { args: 'none' }]
        }
      }
    ],
    rules: {
      "no-param-reassign":0,
      'no-void':0,
      "no-nested-ternary":0,
      'no-multi-assign':0,
      'import/no-extraneous-dependencies':0
    }
  };
  