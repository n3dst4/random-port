random-port
===========

[![Build Status](https://travis-ci.org/n3dst4/random-port.png?branch=master)](https://travis-ci.org/n3dst4/random-port)

Generate a random port number

Usage
-----
To install:
```sh
npm install git+https://github.com/n3dst4/random-port.git --save-dev
```

To generate a random port number:
```js
var randomPort = require("random-port");
var port = randomPort();
```

or even:
```js
var port = require("random-port")();
```


Notes
-----

This project mainly exists as a minimal demo of using Git URLS as npm dependencies. E.g. in your `package.json` you can put:

```json
  "devDependencies": {
    "random-port": "git+https://github.com/n3dst4/random-port.git"
  },
```
