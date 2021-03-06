module.exports = {
  extends: [
    "airbnb",
    "plugin:flowtype/recommended",
    "prettier"
  ],
  plugins: [
    "flowtype",
    "prettier"
  ],
  rules: {
    "prettier/prettier": ["error"],
    "import/prefer-default-export": [0,{}],
    "import/no-extraneous-dependencies": [0,{}],
    "arrow-body-style": [0],
    "react/jsx-filename-extension": [1,{"extensions": [".js",".jsx"]}],
    "react/prop-types": [2,{}],
    "react/require-default-props": [1,{}],
    "react/forbid-prop-types": [0,{}],
    "react/sort-comp": [
      0,
      {
        "order": [
          "lifecycle",
          "render"
        ],
        "groups": {
          "lifecycle": [
            "displayName",
            "propTypes",
            "contextTypes",
            "childContextTypes",
            "mixins",
            "statics",
            "defaultProps",
            "constructor",
            "getDefaultProps",
            "state",
            "getInitialState",
            "getChildContext",
            "getDerivedStateFromProps",
            "componentWillMount",
            "UNSAFE_componentWillMount",
            "componentDidMount",
            "componentWillReceiveProps",
            "UNSAFE_componentWillReceiveProps",
            "shouldComponentUpdate",
            "componentWillUpdate",
            "UNSAFE_componentWillUpdate",
            "getSnapshotBeforeUpdate",
            "componentDidUpdate",
            "componentDidCatch",
            "componentWillUnmount"
          ]
        }
      }
    ]
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "webpack.common.js"
      }
    }
  },
  "env": {
    "browser": true,
    "node": true
  }
};
