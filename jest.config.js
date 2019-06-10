module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/*.jsx'],
  moduleDirectories: ['node_modules'],
  testPathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/'],
  roots: ['<rootDir>/src/'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50
    }
  },
  moduleNameMapper: {},
  coverageReporters: ['json-summary', 'json', 'text', 'text-summary', 'lcov'],
  testURL: 'http://localhost/',
  reporters: ['default']
};
