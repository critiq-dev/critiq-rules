import baseConfig from "../../eslint.config.mjs";

export default [
    ...baseConfig,
    {
        files: [
            "fixtures/**/*.{ts,tsx,js,jsx}"
        ],
        rules: {
            "no-debugger": "off",
            "@typescript-eslint/no-unused-expressions": "off"
        }
    },
    {
        files: [
            "**/*.json"
        ],
        rules: {
            "@nx/dependency-checks": [
                "error",
                {
                    ignoredFiles: [
                        "{projectRoot}/eslint.config.{js,cjs,mjs,ts,cts,mts}"
                    ]
                }
            ]
        },
        languageOptions: {
            parser: await import("jsonc-eslint-parser")
        }
    }
];
