// eslint-disable-next-line no-undef
module.exports = {
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.test.ts"],
  testPathIgnorePatterns: ["<rootDir>/lib"],
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
};
