module.exports = {
  extends: ["standard", "standard-react"],
  parser: "babel-eslint",
  rules: {
    "react/prop-types": 0,
    "object-curly-spacing": 0,
    semi: 0,
    quotes: [0, "double"]
  },
  settings: {
    react: {
      pragma: "React",
      version: "16.8.6"
    }
  }
};
