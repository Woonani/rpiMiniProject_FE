module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/essential',
		'plugin:vue/recommended',
		'eslint:recommended',
		'prettier',
		'plugin:prettier/recommended',
	],
	plugins: ['prettier'],
	parserOptions: {
		parser: '@babel/eslint-parser',
		experimentalObjectRestSpread: true,
	},
	rules: {
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: false,
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'all',
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: 'avoid',
				endOfLine: 'auto',
			},
		],
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-unused-vars': [
			'warn',
			{ vars: 'all', args: 'after-used', ignoreRestSiblings: false },
		],
		'vue/multi-word-component-names': [
			'warn',
			{
				ignores: ['index'],
			},
		],
	},
}
