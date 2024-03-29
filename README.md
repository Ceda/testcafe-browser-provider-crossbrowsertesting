# testcafe-browser-provider-crossbrowsertesting
[![Build Status](https://travis-ci.org/ceda/testcafe-browser-provider-crossbrowsertesting.svg)](https://travis-ci.org/ceda/testcafe-browser-provider-crossbrowsertesting)

This is the **crossbrowsertesting** browser provider plugin for [TestCafe](http://devexpress.github.io/testcafe).

## Install

```
npm install testcafe-browser-provider-crossbrowsertesting-updated
```

## Usage


You can determine the available browser aliases by running
```
testcafe -b crossbrowsertesting-updated
```

When you run tests from the command line, use the alias when specifying browsers:

```
testcafe crossbrowsertesting-updated:browser1 'path/to/test/file.js'
```


When you use API, pass the alias to the `browsers()` method:

```js
testCafe
    .createRunner()
    .src('path/to/test/file.js')
    .browsers('crossbrowsertesting:browser1')
    .run();
```

## Author
Ceda
