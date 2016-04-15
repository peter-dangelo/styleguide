# Namely Styleguide (a.k.a Namely-UI / Namely-Bootstrap)

This is the styleguide app to document all the components and patterns for Namely.

Getting Started
---------------

1. Clone the repo and ```cd``` into the directory
2. Install dependencies
```shell
$ npm install
$ npm install -g karma-cli
$ gem install scss-lint
```
3. Serve app
```shell
$ npm start
```
To serve on a port other than 8080:
```shell
$ gulp --port 8081
```

Testing
-------
To run test suite once:
```shell
$ npm test
```

To keep test suite running and watching:
```shell
$ karma start
```

With Chrome as browser (recommended):
```shell
karma start --browsers Chrome
```
