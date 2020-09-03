module.exports = {
	collectCoverageFrom: [
		"**/*.+(ts|tsx|jsx)"
	],
	roots: [
		"<rootDir>/src"
	],
	setupFilesAfterEnv: [
		"<rootDir>/src/setupTest.ts"
	],
	testMatch: [
		"**/__tests__/**/*.+(ts|tsx|js|jsx)",
		"**/?(*.)+(spec|test).+(ts|tsx|js|jsx)"
	],
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest"
	}
}