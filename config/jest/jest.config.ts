/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import path from 'path';

export default {
    clearMocks: true,

    testEnvironment: 'jsdom',

    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],

    moduleDirectories: [
        'node_modules',
        'src',
    ],

    setupFilesAfterEnv: ['<rootDir>/config/jest/setupTest.ts'],

    moduleNameMapper: {
        '\\.(s?css)$': 'identity-obj-proxy',
        '\\.svg$': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    },

    moduleFileExtensions: [
        'js',
        'mjs',
        'cjs',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],

    modulePaths: ['<rootDir>src'],

    rootDir: '../../',

    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],

};
