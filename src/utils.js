/**
 * Clamps a number between a minimum and maximum value.
 *
 * @param {number} value - The number to clamp.
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} - The clamped value.
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Converts an RGB color array to a CSS color string.
 *
 * @param {number[]} rgb - An array containing the red, green, and blue color values, each ranging from 0 to 1.
 * @param {string} [format='rgb'] - The format of the output string. Can be 'rgb' or 'hex'.
 * @returns {string} The CSS color string in the specified format.
 */
export function rgbToCss(rgb, format = 'rgb') {
  const red = Math.round(rgb[0] * 255);
  const green = Math.round(rgb[1] * 255);
  const blue = Math.round(rgb[2] * 255);

  if (format === 'hex') {
    return (
      '#' +
      (blue | (green << 8) | (red << 16) | (1 << 24)).toString(16).slice(1)
    );
  }

  return `rgb(${red},${green},${blue})`;
}

/**
 * Normalizes an RGB color value from the range [0, 255] to the range [0, 1].
 *
 * @param {number[]} rgb - An array containing the red, green, and blue color values.
 * @returns {number[]} An array containing the normalized red, green, and blue color values.
 */
export function normalizeRgb(rgb) {
  const [r, g, b] = rgb;

  return [r / 255, g / 255, b / 255];
}

/**
 * Copies the given text value to the clipboard.
 *
 * @param {string} value - The text value to be copied to the clipboard.
 * @returns {Promise<void>} A promise that resolves when the text has been successfully copied.
 * @throws {Error} If the clipboard API is not supported or the copy operation fails.
 */
export async function copyToClipboard(value) {
  const type = 'text/plain';
  const clipboardItemData = {
    [type]: value,
  };
  const clipboardItem = new ClipboardItem(clipboardItemData);
  await navigator.clipboard.write([clipboardItem]);
}
