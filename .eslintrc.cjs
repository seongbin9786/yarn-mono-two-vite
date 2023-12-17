module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es2022: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:prettier/recommended",
        "prettier",
    ],
    overrides: [
        {
            files: ["*.{js,cjs}"],
            rules: {
                "@typescript-eslint/no-var-requires": "off",
            },
        },
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true,
                project: "./tsconfig.json",
            },
            node: true,
        },
    },
    plugins: ["@typescript-eslint", "import", "unused-imports", "simple-import-sort", "prettier"],
    rules: {
        "import/no-cycle": "error",
        "import/no-unresolved": "error",
        "import/default": "error",
        "import/namespace": "error",
        "import/first": "error",
        "import/newline-after-import": "error", // 최종 import와 본문 사이의 공백 추가
        "unused-imports/no-unused-imports": "error", // 미사용 import 자동 제거
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_",
            },
        ],
        "prettier/prettier": ["error", { endOfLine: "auto" }],
    },
    ignorePatterns: [
        "!**/*.cjs", // cjs는 항상 lint 대상
        "**/.yarn/**",
        "**/.pnp*",
        "**/vite*",
        "yarn.lock",
        "**/node_modules/**",
        "**/dist/**",
        "**/build/**",
        "**/*.md",
        "**/*.css",
        "**/*.html",
    ],
};
