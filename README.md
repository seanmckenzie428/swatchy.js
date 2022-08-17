# Swatchy

Swatchy.js is a simple color swatch selector written in pure, vanilla javascript. 

## Installation

Simply include the js and css files in your html head.

```html
    <script src="swatchy.js"></script>
    <link rel="stylesheet" href="swatchy.css">
```

## Usage

You'll need 2 elements on your page to use swatchy. One to trigger the popup and another to hold the color output.

Add the class "swatchy-trigger" to the element you want as your trigger and "swatchy-output" to your output element.

```html
<button class="swatchy-trigger">Select a Color</button>
<input type="text" class="swatchy-output" disabled>
```

Then in your javascript, after the page has loaded, simply call the function.

```html
<script>
    Swatchy();
</script>
```

It's that simple!

## Demo

[Live Demo](https://seanmckenzie428.github.io/swatchy.js/demo.html)


## Styling

If you want to use the same styling as the demo use these elements in your code.

```html
<button class="swatchy-button swatchy-trigger"><span class="swatchy-button-top">Select a Color</span></button>
<input type="text" class="swatchy-output swatchy-display" disabled>
```
