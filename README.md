> ✨ Help support the maintenance of this package by [sponsoring me](https://github.com/sponsors/ryangjchandler).

# `x-else`

Quickly create `else` conditions for your `x-if` directives.

![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/ryangjchandler/x-else?label=version&style=flat-square)
![Build size Brotli](https://img.badgesize.io/ryangjchandler/x-else/master/dist/x-else.js.svg?compression=gzip&style=flat-square&color=green)
[![Monthly downloads via CDN](https://data.jsdelivr.com/v1/package/npm/@ryangjchandler/x-else/badge)](https://www.jsdelivr.com/package/npm/@ryangjchandler/x-else)

## About

This plugin adds a new `x-else` directive to Alpine.js which can automatically create negated counterparts for your `x-if` directives.

## Installation

### CDN

Include the following `<script>` tag at the end of your `<body>`:

```html
<script src="https://cdn.jsdelivr.net/npm/@ryangjchandler/x-else@0.x.x/dist/x-else.js"></script>
```

### NPM

```bash
npm install @ryangjchandler/x-else
```

Add the `x-else` directive to your project by importing the package **before** Alpine.js.

```js
import "@ryangjchandler/x-else"
// import "alpinejs"
```