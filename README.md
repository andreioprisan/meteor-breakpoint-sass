meteor-breakpoint-sass
======================

Meteor package for Breakpoint with Sass support

To install
----------

```sh
$ meteor add andreioprisan:breakpoint-sass
```

To use
------

To activate breakpoint styles on your site, add the following line to the top of your main scss file:

```scss
@import '.meteor/local/build/programs/server/assets/packages/andreioprisan_breakpoint-sass/_breakpoint';
```

Due to a current limitation of the Meteor packaging system, the above path may not exist the first time you run your Meteor app after installing this package. This will cause an error saying the file to import was not found. This may also occur if you run `meteor reset`. Restarting your app should fix this problem. See [meteor/meteor#2606](https://github.com/meteor/meteor/issues/2606) and [meteor/meteor#2796](https://github.com/meteor/meteor/issues/2796) for more info.

--------------------------------------------------------

If you find a bug or would like to see an improvement made, please [file an issue on GitHub](https://github.com/andreioprisan/meteor-breakpoint-sass/issues)

