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
