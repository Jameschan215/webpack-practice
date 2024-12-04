# Using webpack step by step

## 1. Create Project and init npm package.json file

`mkdir webpack-practice && cd webpack-practice && npm init -y`

## 2. Install `webpack` and `webpack-cli`

`npm install --save-dev webpack webpack-cli`

## 3. Create `src` directory and your JavaScript, css files, and html template file.

`mkdir src && touch src/index.js src/greeting.js src/template.html src/styles.css`

## 4. Create `webpack.config.js` file in the root directory of your project.

```javascript
/* ------ webpack.config.js ------ */
const path = require('path');

module.exports = {
	mode: 'development',
	entry: 'index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
};
```

## 5. Install `html-webpack-plugin`, and modify `webpack.config.js` file

`npm install --save-dev html-webpack-plugin`

```javascript
/* ------ webpack.config.js ------ */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: 'index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	plugins: [new HtmlWebpackPlugin({ template: './src/template.html' })],
};
```

## 6. Install `css-loader` and `style-loader`, and modify `webpack-config.js` file

`npm install --save-dev css-loader style-loader`

```javascript
/* ------ webpack.config.js ------ */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: 'index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	plugins: [new HtmlWebpackPlugin({ template: './src/template.html' })],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};
```

Now you can import css files in your JavaScript files:

```JavaScript
import "./styles.css";
import { greeting } from "./greeting.js";

console.log(greeting);
```

## 7. Loading images

### 7-1. Handle image files in html template:

1. `npm install --save-dev html-loader`
2. Modify `webpack.config.js`:

```javascript
/* ------ webpack.config.js ------ */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: 'index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	plugins: [new HtmlWebpackPlugin({ template: './src/template.html' })],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
		],
	},
};
```

### 7-2. Handle image files in JavaScript files:

1. Just modify `webpack.config.js` file like this:

```javascript
/* ------ webpack.config.js ------ */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: 'index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	plugins: [new HtmlWebpackPlugin({ template: './src/template.html' })],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
};
```

And now, you can do this:

```JavaScript
import odinImage from "./odin.png";

const image = document.createElement("img");
image.src = odinImage;

document.body.appendChild(image);
```

## 8. Webpack dev server

1. Install:
   `npm install --save-dev webpack-dev-server`

2. Modify `webpack.config.js` file:

```javascript
/* ------ webpack.config.js ------ */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: 'index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	devtool: 'eval-source-map',
	devServer: { watchFiles: ['./src/template.html'] },
	plugins: [new HtmlWebpackPlugin({ template: './src/template.html' })],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
};
```

3. Once set up, use `npx webpack serve` command to host our web page on `http://localhost:8080/`.
