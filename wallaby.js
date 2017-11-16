/*
  WallabyJS React Native Config
  Works well with Jest + Enzyme
*/

/* eslint-disable */
module.exports = function (wallaby) {
  return {
    files: [
      '*.js',
      'package.json',
      '!src/**/__tests__/*.js',
      '!src/**/*.test.js',
    ],

    tests: [
      '__tests__/**/*.js',
    ],

    env: {
      type: 'node',
      runner: 'node',
    },

    testFramework: 'jest',

    compilers: {
      '**/*.js': wallaby.compilers.babel({
        presets: [
          'react-native',
          'react-native-stage-0/decorator-support',
        ],
        plugins: [
          'transform-flow-strip-types',
          'transform-object-rest-spread',
          'transform-async-to-generator',
        ],
      }),
    },

    setup: (wallaby) => {
      wallaby.testFramework.configure(require('./package.json').jest);
    },
  };
};