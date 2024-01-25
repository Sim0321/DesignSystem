// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
  ],
  overrides: [
    {
      // files: [".eslintrc.{js,cjs}"],
      rules: {
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/click-events-have-key-events": "off",
      },
      files: ["*.js", "*.jsx"],
      parserOptions: {
        // sourceType: "script",
        sourceType: "module",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "jsx-a11y"],
  rules: {
    "react/react-in-jsx-scope": "off", // import React 구문
    "react/prop-types": "off",
  },
  settings: {
    react: { version: "detect" }, // react version을 추적할 수 있게 하기 위해
  },
};
