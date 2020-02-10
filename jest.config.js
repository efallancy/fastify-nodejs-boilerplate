module.exports = {
  preset: 'ts-jest',
  testMatch: ['**/__tests__/**/*.(js|ts)', '**/?(*.)+(spec|test).(js|ts)'],
  testPathIgnorePatterns: ['/node_modules/', '/build/'],
  testEnvironment: 'node',
};
