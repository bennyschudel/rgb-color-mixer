import { default as rgbaConverter } from 'color-rgba';

import { normalizeRgb } from './utils';

/**
 * Creates a custom event with the specified name, detail, and options.
 *
 * @param {string} name - The name of the custom event.
 * @param {any} detail - The detail data to be included in the event.
 * @param {Object} [options] - Optional settings for the event.
 * @param {boolean} [options.bubbles=true] - A boolean indicating whether the event bubbles up through the DOM or not.
 * @param {boolean} [options.composed=true] - A boolean indicating whether the event will trigger listeners outside of a shadow root.
 * @param {boolean} [options.cancelable=true] - A boolean indicating whether the event is cancelable.
 * @returns {CustomEvent} The newly created custom event.
 */
export function createCustomEvent(
  name,
  detail,
  options = {
    bubbles: true,
    composed: true,
    cancelable: true,
  },
) {
  return new CustomEvent(name, {
    detail: window.structuredClone(detail),
    ...options,
  });
}

/**
 * Determines whether black or white text would be more readable on a given background color.
 *
 * @param {string} text - The input color in any valid CSS color format (e.g., hex, rgb, rgba, etc.).
 * @returns {('black'|'white')} Returns 'black' if black text is more readable, or 'white' if white text is more readable.
 *                              Defaults to 'black' if the input color cannot be parsed.
 */
export function blackOrWhite(text) {
  const rgb = rgbaConverter(text);

  if (!rgb) {
    console.warn('Cound not parse text to color. Fallback to black.');

    return 'black';
  }

  const [r, g, b] = normalizeRgb(rgb);  // omit alpha channel

  const l = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  return l > 0.179 ? 'black' : 'white';
}


/**
 * Opens the EyeDropper API to allow the user to pick a color from the screen.
 *
 * @returns {Promise<string>} A promise that resolves to the selected color in hex format.
 * @throws {DOMException} If the EyeDropper API fails or is not supported.
 */
export function openEyeDropper() {
  return new Promise((resolve, reject) => {
    const eyeDropper = new window.EyeDropper();

    eyeDropper
      .open()
      .then((result) => {
        resolve(result.sRGBHex);
      })
      .catch(reject);
  });
}

/**
 *  Checks if the EyeDropper API is supported.
 *
 * @returns {boolean} Returns true if EyeDropper is supported, otherwise false.
 */
export function checkHasEyeDropperSupport() {
  return 'EyeDropper' in window;
}
