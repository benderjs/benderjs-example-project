[![Build Status](https://travis-ci.org/benderjs/benderjs-example-project.svg?branch=master)](https://travis-ci.org/benderjs/benderjs-example-project)

# benderjs-example-project

Example project using [Bender.js](https://github.com/benderjs/benderjs) for the testing. The tests are written in [Jasmine](jasmine.github.io) and loaded with [benderjs-jasmine](https://github.com/benderjs/benderjs-jasmine) test framework adapter.

See [Testing in Bender](https://github.com/benderjs/benderjs/wiki/Testing-in-Bender) for more details.

## Installation

Clone the project:
```
$ git clone https://github.com/benderjs/benderjs-example-project.git
```

Install NPM dependencies:
```
$ npm install
```

## Running the tests

There are two common ways to run the tests using Bender - using a dashboard or a command line.

### Using a dashboard

Start Bender.js server:
```
$ bender server run
```

Open `http://localhost:1030` in your web browser.

Press 'Start tests' button for all the tests or a specific test's ID to run it singly.

### Using a command line

```
$ bender run
```

By default, it will open Chrome browser and execute all the tests in it. If you wish to use a different browser, use `-b`/`--browser` option, e.g.:

```
$ bender run -b firefox
```

## License

MIT, for license details see: [LICENSE.md](https://github.com/benderjs/benderjs-example-project/blob/master/LICENSE.md)
