import { html, css, LitElement } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { ref, createRef } from 'lit/directives/ref.js';

import { createCustomEvent } from './helpers';
import { clamp } from './utils';

/**
 * A custom element that provides a color slider.
 *
 * @class
 * @extends {LitElement}
 *
 * @property {Function} colorFunc - Function to generate color based on value.
 * @property {Array<string>} colorStops - Array of color stops for the blender.
 * @property {string} gradientMode - Mode of the color blender.
 * @property {number} height - Height of the slider.
 * @property {number} max - Maximum value of the slider.
 * @property {number} min - Minimum value of the slider.
 * @property {number} step - Step value for the slider.
 * @property {number} stepMultiplier - Multiplier for step value.
 * @property {number} stepMultiplierFast - Multiplier for the fast step value.
 * @property {number} value - Current value of the slider.
 * @property {number} width - Width of the slider.
 *
 * @fires RgbColorSlider#update:value - Dispatched when the value property is updated.
 */
export class RgbColorSlider extends LitElement {
  rootEl = createRef();
  trackEl = createRef();
  thumbEl = createRef();

  static properties = {
    _active: { state: true },
    _percentage: { state: true },
    // ---
    colorFunc: { type: Function },
    colorStops: { type: Array },
    gradientMode: { type: String },
    height: { type: Number, reflect: true },
    max: { type: Number },
    min: { type: Number },
    step: { type: Number },
    stepMultiplier: { type: Number },
    stepMultiplierFast: { type: Number },
    value: { type: Number },
    width: { type: Number, reflect: true },
  };

  constructor() {
    super();

    this._percentage = 0;

    this.value = 0;

    this.min = 0;
    this.max = 1;
    this.step = 0.01;

    this.width = 320;
    this.height = 32;

    this.colorStops = [];
    this.colorFunc = () => 'transparent';

    this.stepMultiplier = 1;
    this.stepMultiplierFast = 10;
    this.gradientMode = 'to right in srgb';

    this._handlePointerUp = this.#handlePointerUp.bind(this);
    this._handlePointerMove = this.#handlePointerMove.bind(this);
  }

  // --- private getters ---

  get #colorStopsCss() {
    return this.colorStops.join(',');
  }

  get #colorCss() {
    return this.colorFunc(this.value);
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

  #updateValue() {
    const value = this.min + (this.max - this.min) * this._percentage;
    const steppedValue = Math.round(value / this.step) * this.step;

    this.value = steppedValue;
  }

  #handleTrackPointerDown(event) {
    this.#handlePointerMove(event);
  }

  #handlePointerMove(event) {
    const { x, width } = this.trackEl.value.getBoundingClientRect();

    const { clientX } = event.touches?.[0] || event;

    const dx = clientX - x;

    this.#calculatePercentage(dx, width);

    this.#updateValue();
  }

  #handlePointerUp(event) {
    this._active = false;

    this.#updateValue();
  }

  #handleThumbPointerDown(event) {
    this._active = true;
  }

  #handleKeyDown(event) {
    const multiplier = event.shiftKey ? this.stepMultiplierFast : this.stepMultiplier;

    switch (event.key) {
      case 'ArrowLeft':
        this.previousStep(multiplier);
        break;
      case 'ArrowRight':
        this.nextStep(multiplier);
        break;
    }
  }

  #calculatePercentage(dx, width) {
    const tolerance = 1e-3;
    const percentage = clamp((1 / width) * dx, 0, 1);

    const shouldUpdate = Math.abs(this._percentage - percentage) > tolerance;

    if (!shouldUpdate) return;

    this._percentage = percentage;
  }

  #addPointerMoveHandler() {
    window.addEventListener('pointermove', this._handlePointerMove);
  }

  #removePointerMoveHandler() {
    window.removeEventListener('pointermove', this._handlePointerMove);
  }

  // --- methods ---

  /**
   * Sets the value of the slider, clamping it within the min and max range,
   * adjusting it to the nearest step, and calculating the corresponding percentage.
   *
   * @param {number} value - The value to set for the slider.
   */
  setValue(value) {
    const { width } = this;

    const clampedValue = clamp(value, this.min, this.max);

    const steppedValue = Math.round(clampedValue / this.step) * this.step;

    const percentage = (1 / (this.max - this.min)) * (steppedValue - this.min);

    const dx = width * percentage;

    this.#calculatePercentage(dx, width);
  }

  /**
   * Decreases the current value by a step multiplied by the given multiplier.
   * The resulting value is clamped between the minimum and maximum values.
   *
   * @param {number} [multiplier=1] - The multiplier to apply to the step value.
   */
  previousStep(multiplier = 1) {
    this.value = clamp(this.value - (this.step * multiplier), this.min, this.max);
  }

  /**
   * Advances the current value by a step, optionally multiplied by a given factor.
   * The resulting value is clamped between the minimum and maximum values.
   *
   * @param {number} [multiplier=1] - The multiplier to apply to the step value.
   */
  nextStep(multiplier = 1) {
    this.value = clamp(this.value + (this.step * multiplier), this.min, this.max);
  }

  // --- lifecycle ---

  willUpdate(props) {
    if (props.has('value')) {
      this.setValue(this.value);
    }
    if (props.has('_active')) {
      this._active
        ? this.#addPointerMoveHandler()
        : this.#removePointerMoveHandler();
    }
    if (props.has('_percentage')) {
      this.#emitUpdateValue(this.value);
    }
  }

  connectedCallback() {
    super.connectedCallback();

    window.addEventListener('pointerup', this._handlePointerUp);
  }

  disconnectedCallback() {
    window.removeEventListener('pointerup', this._handlePointerUp);

    this.#removePointerMoveHandler();

    super.disconnectedCallback();
  }

  // --- render

  render() {
    return html`
      <div
        ${ref(this.rootEl)}
        class="body"
        role="slider"
        tabindex="0"
        style=${styleMap({
          '--height': this.height + 'px',
          '--percentage': this._percentage.toFixed(4),
          '--width': this.width + 'px',
          '--color-stops': this.#colorStopsCss,
          '--color': this.#colorCss,
          '--gradient-mode': this.gradientMode,
        })}
        @keydown=${this.#handleKeyDown}
      >
        <div class="ramp"></div>
        <div class="slider">
          <div
            ${ref(this.trackEl)}
            class="track"
            @pointerdown=${this.#handleTrackPointerDown}
          >
            <div
              ${ref(this.thumbEl)}
              class="thumb"
              @pointerdown=${this.#handleThumbPointerDown}
            ></div>
          </div>
        </div>
      </div>
    `;
  }

  // --- styles ---

  static styles = css`
    :host {
      --border-color: #303030;

      box-sizing: border-box;
      touch-action: none;

      *,
      *::after,
      *::before {
        box-sizing: inherit;
      }
    }

    .body {
      position: relative;
      touch-action: none;

      &:focus {
        outline: 2px solid inherit;
        outline-offset: 1px;
        border-radius: 4px;
      }
    }

    .ramp {
      position: absolute;
      inset: 0;
      z-index: -1;
    }

    .slider {
      background: linear-gradient(var(--gradient-mode), var(--color-stops));
      border-radius: 4px;
      border: 1px solid var(--border-color);
      display: flex;
      height: var(--height);
      width: var(--width);
    }

    .track {
      cursor: crosshair;
      inset: 0;
      position: absolute;
    }

    .thumb {
      --size: calc(var(--height) - 10px);

      background-color: var(--color);
      border-radius: 4px;
      box-shadow:
        0 0 0 1px black,
        0 0 0 2px white;
      cursor: grab;
      left: calc(var(--width) * var(--percentage));
      position: absolute;
      transform: translate(-50%, -50%);
      width: var(--size);
      height: var(--size);
      top: calc(var(--height) / 2);
      touch-action: none;

      &::after {
        content: '';
        position: absolute;
        inset: -10px;
        background-color: transparent;
        border-radius: 999px;
        z-index: -1;
      }
    }
  `;
}
