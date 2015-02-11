Package.describe({
	name: "andreioprisan:breakpoint-sass",
	summary: "Breakpoint with Sass support",
	version: "1.0.0_1",
	git: "https://github.com/andreioprisan/meteor-breakpoint-sass.git"
});

Package.onUse(function (api) {
	api.versionsFrom("METEOR@1.0");

	api.use("jquery");
	api.use("fourseven:scss@1.0.0", ["server"]);
	api.imply("fourseven:scss", ["server"]);

	api.addFiles([
		"assets/stylesheets/_breakpoint.scss",
		"assets/stylesheets/breakpoint/_context.scss",
		"assets/stylesheets/breakpoint/_helpers.scss",
		"assets/stylesheets/breakpoint/_legacy-settings.scss",
		"assets/stylesheets/breakpoint/_no-query.scss",
		"assets/stylesheets/breakpoint/_parsers.scss",
		"assets/stylesheets/breakpoint/_respond-to.scss",
		"assets/stylesheets/breakpoint/_settings.scss",
		"assets/stylesheets/breakpoint/parsers/_double.scss",
		"assets/stylesheets/breakpoint/parsers/_query.scss",
		"assets/stylesheets/breakpoint/parsers/_resolution.scss",
		"assets/stylesheets/breakpoint/parsers/_single.scss",
		"assets/stylesheets/breakpoint/parsers/_triple.scss",
		"assets/stylesheets/breakpoint/parsers/double/_default-pair.scss",
		"assets/stylesheets/breakpoint/parsers/double/_default.scss",
		"assets/stylesheets/breakpoint/parsers/double/_double-string.scss",
		"assets/stylesheets/breakpoint/parsers/resolution/_resolution.scss",
		"assets/stylesheets/breakpoint/parsers/single/_default.scss",
		"assets/stylesheets/breakpoint/parsers/triple/_default.scss"
	], "server");
});
