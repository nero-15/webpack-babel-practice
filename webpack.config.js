module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	watch: true,
	watchOptions: {
		ignored: /node_modules/
	},
	entry: './src/index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'main.js'
	}
};
