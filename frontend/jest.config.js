module.exports = {
    testEnvironment: "jsdom",
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
    },
    testEnvironmentOptions: {
        url: 'http://localhost/',
    },
    testPathIgnorePatterns: ['/node_modules'],
    transformIgnorePatterns: [
        '/node_modules/(?!(axios)/)',
    ]
};