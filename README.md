# \<rgb-color-mixer>

This is a RGB Color Mixer webcomponent built using lit and spectral.js.

## Without installation

```html
<script type="module" src="https://esm.sh/rgb-color-mixer"></script>

<rgb-color-mixer initialValue="hotpink"></rgb-color-mixer>
```

## Installation

Install the RGB Color Mixer package

```bash
npm install rgb-color-mixer
```

## Usage

### Minimal example

```js
import 'rgb-color-mixer';

<rgb-color-mixer initialValue="hotpink"></rgb-color-mixer>;
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

## API

Read the API documentation here: [API](./docs/API.md)

## Examples

There are examples provided in the [examples](./examples) folder.

## License

`<rgb-color-mixer>` is distributed under the [MIT License](./LICENSE).
