# API \<rgb-color-mixer\>

[←Back](./API.md)

## Attributes

| attribute-name | type    | default value | description                                                       |
| -------------- | ------- | ------------- | ----------------------------------------------------------------- |
| `channels`     | string  | rgbhsl        | The channels to be displayed. Can be any combination of `rgbhsl`. |
| `format`       | string  | hex           | The format of the displayed color. Can be either `hex` or `rgb`.  |
| `initialValue` | string  |               | The initial color value in a parsable format.                     |
| `noBlender`    | boolean | false         | Hide the color blender slider.                                    |
| `noCopy`       | boolean | false         | Hide the copy action.                                             |
| `noPicker`     | boolean | false         | Hide the color picker.                                            |
| `noValue`      | boolean | false         | Hide the value input.                                             |

## Properties

| property-name | type   | default value | description                                                 |
| ------------- | ------ | ------------- | ----------------------------------------------------------- |
| `value`       | string |               | The current color value in the specified format. (readonly) |

## Getters

### `colorCss` <sub>: string</sub>

The CSS color string in the specified display format.

## Methods

# Methods

### `setColor` <sub>(text: string): void</sub>

> Parses a color string and sets the RGB value.

### `setRgb` <sub>(rgb: RGB): void</sub>

> Sets the RGB color value. The value range is `[0-255, 0-255, 0-255]`.

### `setRgbNormalized` <sub>(rgb: RGB): void</sub>

> Sets the RGB color value. The value range is `[0-1, 0-1, 0-1]`.

## Events

### `udpate:value` <sub>(event: CustomEvent) => {}</sub>

> Fired when the color value is updated.

```javascript
.addEventListener('update:value', (event) => {
  const value = event.detail.value
  // ...
});
```

## Types

### `RGB`

```ts
type RGB = [number, number, number];
```
