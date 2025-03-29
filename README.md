# \<rgb-color-mixer>

This is a RGB Color Mixer webcomponent built using lit and spectral.js.

## Without installation

```html
  <script type="module" src="https://esm.sh/lit"></script>
  <script type="module" src="https://esm.sh/spectral.js"></script>
  <script type="module" src="https://esm.sh/rgb-color-mixer"></script>

  <rgb-color-mixer initialValue="hotpink"></rgb-color-mixer>
```

## Installation

1. Install lit and spectral.js packages

```bash
npm install lit spectral.js
```

2. Install the RGB Color Mixer package

```bash
npm install rgb-color-mixer
```

## Usage

### Minimal example
```js
  import 'rgb-color-mixer';

  <rgb-color-mixer initialValue="hotpink"></rgb-color-mixer>
```

### Sync with a swatch

```html
  <div id="swatch" style="width: 2rem; height: 2rem;"></div>
  <rgb-color-mixer id="mixer" initialValue="hotpink"></rgb-color-mixer>

  <script>
    const swatchEl = document.getElementById('swatch');
    const mixerEl = document.getElementById('mixer');

    mixerEl.addEventListener('update:value', (event) => {
      swatchEl.style.backgroundColor = event.detail.value;
    });
  </script>
```

### Set a custom color via `setColor` method

Parses the text using the [color-rgba](https://github.com/colorjs/color-rgba#readme) library and sets the color.

```html
  <rgb-color-mixer id="mixer"></rgb-color-mixer>

  <script>
    const mixerEl = document.getElementById('mixer');

    mixerEl.setColor('hotpink');
  </script>
```

## Attributes

There are a few attributes that could be set to customise the look and feel of the color mixer.

attribute-name         | type    | default value                   | description
--------------         | ----    | -------------                   | -----------
`channels`             | String  | rgbhsl (r\|g\|b\|h\|s\|l)       | The channels to be shown. Can be any combination of 'rgbhsl'.
`format`               | String  | hex (hex\|rgb)                  | The color format that is displayed and emitted.
`initialValue`         | String  |                                 | The initial RGB color value.
`noBlender`            | Boolean | false                           | Hide the color blender slider.
`noCopy`               | Boolean | false                           | Hide the copy action.
`noPicker`             | Boolean | false                           | Hide the color picker.
`noValue`              | Boolean | false                           | Hide the value input.
`value`                | String  |                                 | The current RGB color value (readonly).

## Methods

### setColor(text)
```javascript
mixer.setColor('hotpink');
```

It parses the text and sets the color if successful.

### setRgb(rgb)

```javascript
mixer.setRgb([255, 105, 180]);
```
It sets the color using RGB values.

### setRgbNormalized(rgb)
```javascript
mixer.setRgbNormalized([1.00, 0.41, 0.71]);
```
It sets the color using RGB normalized values.

## Examples

There are examples provided in the [examples](./examples) folder.

## License

`<rgb-color-mixer>` is distributed under the [MIT License](./LICENSE).
