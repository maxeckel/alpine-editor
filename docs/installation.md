# Installation

## CDN

If you want to use a CDN to include the AlpineEditor in your project:

```
<script src="https://cdn.jsdelivr.net/gh/maxeckel/alpine-editor@0.2.0/dist/alpine-editor.min.js"></script>
```

Now head over to the [Getting started](/getting-started) guide.

## NPM

If you want to include AlpineEditor in your build setup using NPM:

```
npm install alpine-editor
```

Now you can simply import it where ever you want it:

```javascript
import AlpineEditor from 'alpine-editor';
```

If you want to use it now with Alpine.JS you need to assign the import to the `window` object:

```javascript
window.AlpineEditor = AlpineEditor;
```

Now head over to the [Getting started](/getting-started) guide.