# Swatchy

Swatchy.js is a simple color swatch selector written in pure, vanilla javascript. 

## Demo

[Live Demo](https://seanmckenzie428.github.io/swatchy.js/demo.html)

[Multiple Swatchies](https://seanmckenzie428.github.io/swatchy.js/two-swatchies.html)

## Installation

Simply include the js and css files in your html head. You can also download swatchy.js and swatchy.css if you want to include them locally

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/swatchy.js@1.3.0/swatchy.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swatchy.js@1.3.0/swatchy.min.css">
```

## Usage

You'll need 2 elements on your page to use swatchy. One to trigger the popup and another to hold the color output.

Add the class `swatchy-trigger` to the element you want as your trigger and `swatchy-output` to your output element.

```html
<button class="swatchy-trigger">Select a Color</button>
<input type="text" class="swatchy-output" disabled>
```

Then in your javascript, after the page has loaded, simply call the function.

```javascript
Swatchy();
```

It's that simple!

## Multiple Swatchys (Swatchies?)

For more than one swatchy on a page just add more trigger and output elements. You only need to call `Swatchy()` once per page.

## Styling

If you want to use the same styling as the demo page use the `swatchy-button`, `swatchy-button-top`, and `swatchy-display` classes on your elements.

```html
<button class="swatchy-button swatchy-trigger"><span class="swatchy-button-top">Select a Color</span></button>
<input type="text" class="swatchy-output swatchy-display" disabled>
```
