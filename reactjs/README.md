<h2 align="center">Instalando as dependências para rodar ReactJS.</h2>

```bash
npm i -D webpack webpack-dev-server babel-core babel-loader babel-preset-es2015 babel-preset-react css-loader style-loader bootstrap 
```
ou 

```bash
npm install --save-dev webpack webpack-dev-server babel-core babel-loader babel-preset-es2015 babel-preset-react css-loader style-loader 
```
Em seguida

```bash
npm i -S react react-dom reactstrap react-transition-group
```
ou

```bash
npm install --save react react-dom reactstrap react-transition-group
```

<h2 align="center">Configurando</h2>

**webpack.config.js**
```js
module.exports = {
    entry: './app/App.jsx',
    output: {
        path: __dirname + "/public/",
        filename: 'bundle.js'
    },
    devServer:{
        inline: true,
        contentBase: './public',
        port: 8080
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query:{
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
}
```

adicione os scripts em **package.json**
```json
"build": "webpack",
"start": "webpack-dev-server"
```

<h2 align="center">Testando</h2>

**./app/App.jsx**
```jsx
import {render} from 'react-dom';
import {example} from "./components/Example.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
render(example(), document.getElementById('app'));
```

**./app/components/Example.jsx**
```jsx
import React from 'react';
import { Button } from 'reactstrap';

export const example = () => {
    return (
        <Button color="danger">Danger!</Button>
    );
};
```

**./public/index.html**
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
</head>
<body>
    <div id="app"></div>
    <script src="./bundle.js"></script>
</body>
</html>
```

<h2 align="center">Rodando</h2>

## Manualmente

Execute:

```bash
npm run build
```
e abra o arquivo **index.html** no seu navegador

## Automático

Execute:

```bash
npm run start
```
e abra o navegador e acesse [localhost:8080](http://localhost:8080)



