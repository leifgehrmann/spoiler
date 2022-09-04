module.exports = {
  root: true,
  extends: [
    'airbnb',
    'airbnb-typescript',
  ],
  parserOptions: {
    project: [
      './tsconfig.json',
      './tsconfig.node.json',
      './tsconfig.lint.json',
    ],
  },
};
