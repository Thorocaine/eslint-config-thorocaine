# eslint--config-thorocaine
My eslint rules to easily add to other projects

## Usage

###Installation
```
npm i -D eslint--config-thorocaine
```

### Setup
`.eslint`
```json
{ "extends": "thorocaine" }
```

`package.json`
```json
"scripts": {
    "lint": "eslint ./src --ext .ts,.tsx --color --fix"
},
```

### Running
```
npm run lint
```