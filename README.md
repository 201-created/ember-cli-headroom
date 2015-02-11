### ember-cli-headroom

Often you may need to add content to the head of an ember-cli app.
For example:

```html
<link rel="dns-prefetch" href="//google.com">
<link rel="prefetch" href="//google.com/index.html">
<link rel="prerender" href="//google.com/index.html">
<meta name="google-site-verification" content="+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34="/>
<title>Hey this is staging man</title>
```

This addon make it easy for you to do this, and to change the content
based on environment. First install the addon:

```
npm install --save-dev ember-cli-headroom
```

And add a configuration file:

```javascript
// config/head-content.js
module.exports = function(env, config) {
  var headContent = [
    '<meta name="always there">'
  ];

  if (env === 'production') {
    headContent.push('<link rel="dns-prefetch" href="//eager-beaver.com">');
  }

  return config;
}
```

And you're off!

#### Developing this addon

* `git clone` this repository
* `npm install`
* `bower install`

#### Running

* `ember server`
* Visit your app at http://localhost:4200.

#### Running Tests

* `ember test`
* `ember test --server`

#### Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

*ember-cli-headroom was authored by [201 Created](http://201-created.com).
We build ambitious applications for ambitious clients.*
