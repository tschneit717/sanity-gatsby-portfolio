module.exports = {
  extends: ["standard", "standard-react"],
  parser: "babel-eslint",
  rules: {
    "comma-dangle": true
  },
  settings: {
    react: {
      pragma: "React",
      version: "16.8.6"
    }
  }
};
