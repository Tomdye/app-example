module.exports = {
	entry: __dirname + "/_build/src/index.js",
	output: {
		path: __dirname,
		filename: "index-webpack.js"
	},
	resolve: {
		alias: {
			"src": ".",
			"dojo-actions": __dirname + "/node_modules/dojo-actions",
			"dojo-compose": __dirname + "/node_modules/dojo-compose",
			"dojo-core": __dirname + "/node_modules/dojo-core",
			"dojo-widgets": __dirname + "/node_modules/dojo-widgets",
			"immutable": __dirname + "/node_modules/immutable/dist",
			"maquette": __dirname + "/node_modules/maquette/dist",
			"rxjs": __dirname + "/node_modules/@reactivex/rxjs/dist/amd"
		}
	}
};
