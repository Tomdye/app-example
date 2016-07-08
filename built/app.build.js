({
	paths: {
		"src": ".",
		"dojo-actions": "../../node_modules/dojo-actions",
		"dojo-compose": "../../node_modules/dojo-compose",
		"dojo-core": "../../node_modules/dojo-core",
		"dojo-widgets": "../../node_modules/dojo-widgets",
		"immutable": "../../node_modules/immutable/dist",
		"maquette": "../../node_modules/maquette/dist",
		"rxjs": "../../node_modules/@reactivex/rxjs/dist/amd",
		"dojo": "../../node_modules/dojo",
		"dijit": "../../node_modules/dijit",
		"legacyPlugins": "../../legacyPlugins"
	},
	baseUrl: ".",
	appDir: ".",
	dir: "built/",
	modules: [
        {
            name: "index"
        }
    ],
	map: {
        '*': {
            'dojo/i18n': 'legacyPlugins/requirejs/i18n',
            'dojo/text': 'legacyPlugins/requirejs/text'
        }
    }

});
