# Installing Node.js

By itself, JavaScript is not understood by computers, therefore, we need an [engine](https://blog.mozilla.org/javascript/) which will convert our JavaScript program into a form which the computer can understand. There are a number of engines which can _interpret_ JavaScript, [Node.js](https://nodejs.org/en/about/) is one of them, and if you're using any modern browser, it will have a built in JavaScript engine as well.

Node.js allows you to write code and run it without it being served in a browser. To install it, follow the relevant instructions below depending on your operating system.

::: tip
To check if you already have Node installed on your machine, you can open a terminal and run `node -v`. If it outputs a version number, you're good to go (though it would be smart to check to see if it needs updating!)
:::

### Windows

On Windows, Node.js is as simple as installing any other program, just head on over to the [Node.js](https://nodejs.org/) website, download the `LTS` version and follow the steps in the installer.

### macOS

On macOS, you can either follow the same instructions as the ones listed for Windows, or you can alternatively install Node through a package manager like [Homebrew](https://brew.sh/). If you wish to install via Homebrew, here is a quick guide:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node
```

### Linux

tba.
