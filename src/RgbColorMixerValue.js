import { html, css, LitElement } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import { styleMap } from 'lit/directives/style-map.js';

import {
  checkHasEyeDropperSupport,
  createCustomEvent,
  openEyeDropper as openEyeDropperHelper,
} from './helpers';
import { copyToClipboard } from './utils';

// ---

/**
 * A custom element that represents a value input field.
 *
 * @class
 * @extends {LitElement}
 *
 * @property {boolean} [disabled=false] - Indicates if the input is disabled.
 * @property {string} value - The current value of the color mixer.
 *
 * @fires ColorMixerValue#update:value - Fired when the value is updated.
 */
export class RgbColorMixerValue extends LitElement {
  rootEl = createRef();
  inputEl = createRef();
  copyEl = createRef();

  static properties = {
    disabled: { type: Boolean },
    value: { type: String, reflect: true },
  };

  #hasEyeDropperSupport = checkHasEyeDropperSupport();

  constructor() {
    super();

    this.disabled = false;
  }

  // --- private methods ---

  #handleValueUpdate(event) {
    event.stopPropagation();

    const { value } = event.detail;

    this.setValue(value);
  }

  #emitValueUpdate(value) {
    const event = createCustomEvent(
      'update:value',
      { value },
      { bubbles: false },
    );

    this.dispatchEvent(event);
  }

  // --- methods ---

  /**
   * Sets the value and triggers an update event.
   *
   * @param {string} value - The new value to set.
   */
  setValue(value) {
    this.#emitValueUpdate(value);
  }

  /**
   * Copies the current color value to the clipboard.
   *
   * @async
   * @function copyToClipboard
   * @returns {Promise<void>} A promise that resolves when the value has been copied to the clipboard.
   */
  async copyToClipboard() {
    await copyToClipboard(this.value);

    this.copyEl.value.showFeedBack('Copied');
  }

  /**
   * Opens the EyeDropper tool to allow the user to pick a color.
   *
   * @returns {Promise<void>} A promise that resolves once the EyeDropper operation is complete.
   */
  async openEyeDropper() {
    let value;

    try {
      value = await openEyeDropperHelper();
    } catch (error) {}

    this.setValue(value);
  }

  // -- lifecycle ---

  updated(props) {
    if (props.has('value')) {
      this.inputEl.value.value = this.value;
    }
  }

  // --- render

  render() {
    return html`
      <div ${ref(this.rootEl)} class="body">
        <rgb-color-mixer-ui-field class="value">
          <div
            class="swatch"
            style=${styleMap({
              '--color': this.value,
            })}
          ></div>
          <rgb-color-mixer-ui-input
            ${ref(this.inputEl)}
            class="input"
            ?disabled=${this.disabled}
            value=${this.value}
            @update:value=${this.#handleValueUpdate}
          ></rgb-color-mixer-ui-input>
          <rgb-color-mixer-ui-icon-button
            ${ref(this.copyEl)}
            ?disabled=${this.disabled}
            feedback
            @click=${this.copyToClipboard}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"
              />
              <path
                d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"
              />
            </svg>
          </rgb-color-mixer-ui-icon-button>
        ${
          this.#hasEyeDropperSupport
            ? html`
          <rgb-color-mixer-ui-icon-button @click=${this.openEyeDropper}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M11 7l6 6" />
              <path
                d="M4 16l11.7 -11.7a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-11.7 11.7h-4v-4z"
              />
            </svg>
          </rgb-color-mixer-ui-icon-button>`
            : html``
        }
        </rgb-color-mixer-ui-field>
      </div>
    `;
  }

  // --- styles ---

  static styles = css`
    :host {
      --background-color: light-dark(#a0a0a0, #303030);
    }

    .body {
      align-items: stretch;
      background-color: var(--background-color);
      border-radius: 8px;
      display: inline-flex;
      font-family: sans-serif;
      gap: 4px;
      padding: 4px;
    }

    .swatch {
      --size: 20px;

      background-color: var(--color);
      border-radius: 2px;
      box-shadow: 0 0 0 1px black, 0 0 0 2px white;
      height: var(--size);
      margin: 2px;
      width: var(--size);
    }

    .value {
      --direction: 'horizontal';
    }

    .input {
      &::part(input) {
        font-family: Monaco, monospace;
        width: 160px;
        text-align: center;
      }
    }
  `;
}
