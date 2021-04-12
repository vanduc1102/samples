module.exports = {
    "root":true,
    "env": {
        "node":true,
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        "no-unused-vars": ["error", { "argsIgnorePattern": "next" }]
    }
};
