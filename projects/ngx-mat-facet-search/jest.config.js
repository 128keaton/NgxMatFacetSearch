module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.ts'
  ],
  coverageDirectory: '<rootDir>../../coverage'
};
