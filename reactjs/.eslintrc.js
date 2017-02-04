module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "root": "true",
    "plugins": [
        "react"
    ],
    "env": {
        "browser": true,
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "react/jsx-indent": [
            "error",
            2
        ],
        "react/jsx-indent-props": [
            "error",
            2
        ]
    }
};
