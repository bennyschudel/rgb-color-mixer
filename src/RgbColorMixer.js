import { css, html, LitElement } from 'lit';
import { createRef } from 'lit/directives/ref.js';

import { default as rgbaConverter } from 'color-rgba';

import { createCustomEvent } from './helpers';
import { normalizeRgb, rgbToCss } from './utils';

import rgb from 'color-space/rgb.js';
import hsl from 'color-space/hsl.js';

/**
 * A custom element for an RGB and HSL color mixer.
 *
 * This component allows users to mix colors using RGB and HSL sliders.
 *
 * @class
 * @extends {LitElement}
 *
 * @property {string} [channels='rgbhsl'] - The channels to be shown.
 * @property {('hex'|'rgb'))} [format='hex'] - The current color format, which can be 'hex', or 'rgb'.
 */
export class RgbColorMixer extends LitElement {
  rootEl = createRef();

  static properties = {
    _rgb: { state: true },
    // ---
    channels: { type: String },
    format: { type: String },
    initialValue: { type: String },
    value: { type: String, reflect: true },
  };

  constructor() {
    super();

    this._rgb = [0, 0, 0];

    /** @type {'hex' | 'rgb'} */
    this.format = 'rgb';

    this.channels = 'rgbhsl';

    this.initialValue = undefined;
    this.value = undefined;
  }

  // --- private getters ---

  get #rgbOriginal() {
    const [r, g, b] = this._rgb;

    return [r * 255, g * 255, b * 255];
  }

  get #rgbOriginalRounded() {
    const [r, g, b] = this.#rgbOriginal;

    return [Math.round(r), Math.round(g), Math.round(b)];
  }

  get #hslOriginal() {
    return rgb.hsl(this.#rgbOriginal);
  }

  get #hslOriginalShort() {
    const [h, s, l] = this.#hslOriginal;

    return [
      Math.round(h * 1e4) / 1e4,
      Math.round(s * 1e4) / 1e4,
      Math.round(l * 1e4) / 1e4,
    ];
  }

  get #hslOriginalRounded() {
    const [h, s, l] = this.#hslOriginal;

    return [Math.round(h), Math.round(s), Math.round(l)];
  }

  get #colorStopsR() {
    const [_, g, b] = this.#rgbOriginalRounded;

    const colorStart = `rgb(0 ${g} ${b})`;
    const colorEnd = `rgb(255 ${g} ${b})`;

    return [colorStart, colorEnd];
  }

  get #colorStopsG() {
    const [r, _, b] = this.#rgbOriginalRounded;

    const colorStart = `rgb(${r} 0 ${b})`;
    const colorEnd = `rgb(${r} 255 ${b})`;

    return [colorStart, colorEnd];
  }

  get #colorStopsB() {
    const [r, g, _] = this.#rgbOriginalRounded;

    const colorStart = `rgb(${r} ${g} 0)`;
    const colorEnd = `rgb(${r} ${g} 255)`;

    return [colorStart, colorEnd];
  }

  get #colorStopsH() {
    const [_, s, l] = this.#hslOriginalShort;

    const colorStart = `hsl(0 ${s.toFixed(4)} ${l.toFixed(4)})`;
    const colorEnd = `hsl(360 ${s.toFixed(4)} ${l.toFixed(4)})`;

    return [colorStart, colorEnd];
  }

  get #colorStopsS() {
    const [h, _, l] = this.#hslOriginalShort;

    const colorStart = `hsl(${h.toFixed(2)} 0 ${l.toFixed(4)})`;
    const colorEnd = `hsl(${h.toFixed(2)} 100 ${l.toFixed(4)})`;

    return [colorStart, colorEnd];
  }

  get #colorStopsL() {
    const [h, s, _] = this.#hslOriginalShort;

    const colorStart = `hsl(${h.toFixed(2)} ${s.toFixed(4)} 0)`;
    const colorMiddle = `hsl(${h.toFixed(2)} ${s.toFixed(4)} 50)`;
    const colorEnd = `hsl(${h.toFixed(2)} ${s.toFixed(4)} 100)`;

    return [colorStart, colorMiddle, colorEnd];
  }

  // --- getters ---

  /**
   * Gets the CSS representation of the current color.
   *
   * @returns {string} The CSS color string in the specified display format.
   */
  get colorCss() {
    return rgbToCss(this._rgb, this.format);
  }

  // --- private methods ---

  #emitUpdateValue(value) {
    const event = createCustomEvent(
      'update:value',
      { value },
      { bubbles: false },
    );

    this.dispatchEvent(event);
  }

  #handleValueRUpdate(event) {
    const r = event.detail.value / 255;
    const [_, g, b] = this._rgb;

    this.setRgbNormalized([r, g, b]);
  }

  #handleValueGUpdate(event) {
    const g = event.detail.value / 255;
    const [r, _, b] = this._rgb;

    this.setRgbNormalized([r, g, b]);
  }

  #handleValueBUpdate(event) {
    const b = event.detail.value / 255;
    const [r, g, _] = this._rgb;

    this.setRgbNormalized([r, g, b]);
  }

  #handleValueHUpdate(event) {
    const h = event.detail.value;
    const [_, s, l] = this.#hslOriginal;

    const rgb = hsl.rgb([h, s, l]);
    const rgbNormalized = normalizeRgb(rgb);

    this.setRgbNormalized(rgbNormalized);
  }

  #handleValueSUpdate(event) {
    const s = event.detail.value;
    const [h, _, l] = this.#hslOriginal;

    const rgb = hsl.rgb([h, s, l]);
    const rgbNormalized = normalizeRgb(rgb);

    this.setRgbNormalized(rgbNormalized);
  }

  #handleValueLUpdate(event) {
    const l = event.detail.value;
    const [h, s, _] = this.#hslOriginal;

    const rgb = hsl.rgb([h, s, l]);
    const rgbNormalized = normalizeRgb(rgb);

    this.setRgbNormalized(rgbNormalized);
  }

  #colorRFunc(value) {
    const [_, g, b] = this.#rgbOriginalRounded;

    return `rgb(${value} ${g} ${b})`;
  }

  #colorGFunc(value) {
    const [r, _, b] = this.#rgbOriginalRounded;

    return `rgb(${r} ${value} ${b})`;
  }

  #colorBFunc(value) {
    const [r, g, _] = this.#rgbOriginalRounded;

    return `rgb(${r} ${g} ${value})`;
  }

  #colorHFunc(value) {
    const [_, s, l] = this.#hslOriginalShort;

    return `hsl(${value.toFixed(2)} ${s.toFixed(4)} ${l.toFixed(4)})`;
  }

  #colorSFunc(value) {
    const [h, _, l] = this.#hslOriginalShort;

    return `hsl(${h.toFixed(2)} ${value.toFixed(4)} ${l.toFixed(4)})`;
  }

  #colorLFunc(value) {
    const [h, s, _] = this.#hslOriginalShort;

    return `hsl(${h.toFixed(2)} ${s.toFixed(4)} ${value.toFixed(4)})`;
  }

  #handleColorInputChange(event) {
    const value = event.detail.value;

    this.setColor(value);
  }

  // --- methods ---

  /**
   * Parses a color string and sets the RGB value.
   *
   * @param {string} text - The color string to be parsed.
   */
  setColor(text) {
    const rgb = rgbaConverter(text);

    if (!rgb.length) return;

    this.setRgb(rgb);
  }

  /**
   * Sets the RGB color value.
   *
   * @param {Array<number>} rgb - The RGB color value to set.
   */
  setRgb(rgb) {
    const rgbNormalized = normalizeRgb(rgb);

    this.setRgbNormalized(rgbNormalized);
  }

  /**
   * Sets the RGB values if they differ from the current values by more than a specified tolerance (1e-4).
   *
   * @param {number[]} rgb - An array of normalized RGB values to set. Each value should be a number between 0 and 1.
   */
  setRgbNormalized(rgb) {
    const tolerance = 1e-4;

    const shouldUpdate = rgb.some(
      (v, i) => Math.abs(v - this._rgb[i]) > tolerance,
    );

    if (!shouldUpdate) return;

    this._rgb = [...rgb];
  }

  // --- lifecycle ---

  willUpdate(props) {
    if (props.has('initialValue')) {
      this.setColor(this.initialValue);
    }
    if (props.has('_rgb')) {
      this.value = this.colorCss;
      this.#emitUpdateValue(this.colorCss);
    }
  }

  // --- render

  render() {
    const sliderTemplates = [];

    for (const c of this.channels) {
      let template;

      switch (c) {
        case 'r':
          template = html` <!-- Red -->
            <rgb-color-slider-item>
              <div slot="label">R</div>
              <rgb-color-slider
                min="0"
                max="255"
                slot="slider"
                step="1"
                value=${this.#rgbOriginalRounded[0]}
                .colorStops=${this.#colorStopsR}
                .colorFunc=${this.#colorRFunc.bind(this)}
                @update:value=${this.#handleValueRUpdate}
              ></rgb-color-slider>
              <rgb-color-mixer-ui-input
                slot="value"
                class="value"
                max="255"
                min="0"
                step="1"
                type="number"
                value=${this.#rgbOriginalRounded[0]}
                @update:value=${this.#handleValueRUpdate}
              ></rgb-color-mixer-ui-input>
            </rgb-color-slider-item>`;
          break;
        case 'g':
          template = html` <!-- Green -->
            <rgb-color-slider-item>
              <div slot="label">G</div>
              <rgb-color-slider
                .colorFunc=${this.#colorGFunc.bind(this)}
                .colorStops=${this.#colorStopsG}
                max="255"
                min="0"
                slot="slider"
                step="1"
                value=${this.#rgbOriginalRounded[1]}
                @update:value=${this.#handleValueGUpdate}
              ></rgb-color-slider>
              <rgb-color-mixer-ui-input
                slot="value"
                class="value"
                max="255"
                min="0"
                step="1"
                type="number"
                value=${this.#rgbOriginalRounded[1]}
                @update:value=${this.#handleValueGUpdate}
              ></rgb-color-mixer-ui-input>
            </rgb-color-slider-item>`;
          break;
        case 'b':
          template = html` <!-- Blue -->
            <rgb-color-slider-item>
              <div slot="label">B</div>
              <rgb-color-slider
                .colorFunc=${this.#colorBFunc.bind(this)}
                .colorStops=${this.#colorStopsB}
                max="255"
                min="0"
                slot="slider"
                step="1"
                value=${this.#rgbOriginalRounded[2]}
                @update:value=${this.#handleValueBUpdate}
              ></rgb-color-slider>
              <rgb-color-mixer-ui-input
                slot="value"
                class="value"
                max="255"
                min="0"
                step="1"
                type="number"
                value=${this.#rgbOriginalRounded[2]}
                @update:value=${this.#handleValueBUpdate}
              ></rgb-color-mixer-ui-input>
            </rgb-color-slider-item>`;
          break;
        case 'h':
          template = html` <!-- Hue -->
            <rgb-color-slider-item>
              <div slot="label">H</div>
              <rgb-color-slider
                .colorFunc=${this.#colorHFunc.bind(this)}
                .colorStops=${this.#colorStopsH}
                gradientMode="to right in hsl longer hue"
                max="360"
                min="0"
                slot="slider"
                step="0.01"
                stepMultiplier="100"
                stepMultiplierFast="1500"
                value=${this.#hslOriginal[0].toFixed(2)}
                @update:value=${this.#handleValueHUpdate}
              ></rgb-color-slider>
              <rgb-color-mixer-ui-input
                slot="value"
                class="value"
                max="360"
                min="0"
                step="0.01"
                type="number"
                value=${this.#hslOriginal[0].toFixed(2)}
                @update:value=${this.#handleValueHUpdate}
              ></rgb-color-mixer-ui-input>
            </rgb-color-slider-item>`;
          break;
        case 's':
          template = html` <!-- Saturation -->
            <rgb-color-slider-item>
              <div slot="label">S</div>
              <rgb-color-slider
                .colorFunc=${this.#colorSFunc.bind(this)}
                .colorStops=${this.#colorStopsS}
                gradientMode="to right in hsl"
                max="100"
                min="0"
                slot="slider"
                step="0.01"
                stepMultiplier="100"
                stepMultiplierFast="1000"
                value=${this.#hslOriginal[1].toFixed(2)}
                @update:value=${this.#handleValueSUpdate}
              ></rgb-color-slider>
              <rgb-color-mixer-ui-input
                slot="value"
                class="value"
                max="100"
                min="0"
                step="0.01"
                type="number"
                value=${this.#hslOriginal[1].toFixed(2)}
                @update:value=${this.#handleValueSUpdate}
              ></rgb-color-mixer-ui-input>
            </rgb-color-slider-item>`;
          break;
        case 'l':
          template = html` <!-- Lightness -->
            <rgb-color-slider-item>
              <div slot="label">L</div>
              <rgb-color-slider
                .colorFunc=${this.#colorLFunc.bind(this)}
                .colorStops=${this.#colorStopsL}
                gradientMode="to right in hsl"
                max="100"
                min="0"
                slot="slider"
                step="0.01"
                stepMultiplier="100"
                stepMultiplierFast="1000"
                value=${this.#hslOriginal[2].toFixed(2)}
                @update:value=${this.#handleValueLUpdate}
              ></rgb-color-slider>
              <rgb-color-mixer-ui-input
                slot="value"
                class="value"
                max="100"
                min="0"
                step="0.01"
                type="number"
                value=${this.#hslOriginal[2].toFixed(2)}
                @update:value=${this.#handleValueLUpdate}
              ></rgb-color-mixer-ui-input>
            </rgb-color-slider-item>`;
          break;
      }

      if (!template) {
        throw new Error(`Unknown slider mode: ${c}`);
      };

      sliderTemplates.push(template);
    }

    return html`
      <div class="mixer">
        <rgb-color-mixer-value
          value=${this.colorCss}
          @update:value=${this.#handleColorInputChange}
        ></rgb-color-mixer-value>
        <div class="channels">${sliderTemplates}</div>
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

    .mixer {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .channels {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .value {
      flex: 1 0 auto;

      &::part(input) {
        border-radius: 0 4px 4px 0;
      }
    }
  `;
}
