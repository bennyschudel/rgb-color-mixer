import { html, css, LitElement } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';

// import * as d3 from './d3';

import spectral from 'spectral.js';

import { createCustomEvent } from './helpers';

// ---

/**
 * A custom element that allows of mixing two colors with a slider.
 *
 * @class
 * @extends {LitElement}
 *
 * @property {(null|'start'|'end')} colorActive - Indicates the currently active color stop.
 * @property {string} colorStart - The starting color for the gradient.
 * @property {string} colorEnd - The ending color for the gradient.
 *
 * @fires update:value - Dispatched when the slider value changes, providing the mixed color.
 * @fires update:coloractive - Dispatched when the active color stop changes.
 */
export class RgbColorMixerGradient extends LitElement {
  rootEl = createRef();

  static properties = {
    _sliderValue: { state: true },
    // ---
    colorActive: { type: String },
    colorStart: { type: String },
    colorEnd: { type: String },
  };

  constructor() {
    super();

    this._sliderValue = 0;

    /** @type {null | 'start' | 'end'} */
    this.colorActive = null;
  }

  // --- private getters ---

  get #colorScale() {
    return (t) => spectral.mix(this.colorStart, this.colorEnd, t);
  }

  get #colorStops() {
    return [...Array(11).keys()].map((v) => this.#colorScale(v / 10));
  }

  // --- private methods ---

  #handleSliderValueUpdate(event) {
    this._sliderValue = event.detail.value;
  }

  #handleActiveUpdateStart(event) {
    const value = (event.detail.value) ? 'start' : null;

    this.#emitColorActiveUpdate(value);
  }

  #handleActiveUpdateEnd(event) {
    const value = (event.detail.value) ? 'end' : null;

    this.#emitColorActiveUpdate(value);
  }

  #emitValueUpdate(value) {
    const event = createCustomEvent(
      'update:value',
      { value },
      { bubbles: false },
    );

    this.dispatchEvent(event);
  }

  #emitColorActiveUpdate(value) {
    const event = createCustomEvent(
      'update:coloractive',
      { value },
      { bubbles: false },
    );

    this.dispatchEvent(event);
  }

  #colorFunc(value) {
    return this.#colorScale(value);
  }

  // --- methods ---

  /**
   * Resets the slider value to zero.
   * This method is used to clear the current value of the slider.
   */
  resetSlider() {
    this._sliderValue = 0;
  }

  // -- lifecycle ---

  willUpdate(props) {
    if (props.has('_sliderValue')) {
      this.#emitColorActiveUpdate(null);

      const color = this.#colorScale(this._sliderValue);
      this.#emitValueUpdate(color);
    }
    if (props.has('colorActive')) {
      this.#emitColorActiveUpdate(this.colorActive);
    }
  }

  // --- render

  render() {
    return html`
      <div ${ref(this.rootEl)} class="body">
        <rgb-color-mixer-gradient-stop
          ?active="${this.colorActive === 'start'}"
          value=${this.colorStart}
          @update:active=${this.#handleActiveUpdateStart}
        ></rgb-color-mixer-gradient-stop>
        <rgb-color-slider
          .colorFunc=${this.#colorFunc.bind(this)}
          .colorStops=${this.#colorStops}
          max="1"
          min="0"
          step="0.01"
          value=${this._sliderValue}
          @update:value=${this.#handleSliderValueUpdate}
        ></rgb-color-slider>
        <rgb-color-mixer-gradient-stop
          ?active="${this.colorActive === 'end'}"
          value=${this.colorEnd}
          @update:active=${this.#handleActiveUpdateEnd}
        ></rgb-color-mixer-gradient-stop>
      </div>
    `;
  }

  // --- styles ---

  static styles = css`
    :host {
      box-sizing: border-box;
      display: inline-flex;

      *,
      *::after,
      *::before {
        box-sizing: inherit;
      }
    }

    .body {
      display: flex;
      gap: 8px;
    }
  `;
}
