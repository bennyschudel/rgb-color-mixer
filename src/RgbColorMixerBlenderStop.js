import { css, html, LitElement } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';

import { blackOrWhite, createCustomEvent } from './helpers';

// ---

/**
 * A custom element that allows activating a color stop.
 *
 * @class
 * @extends {LitElement}
 *
 * @property {boolean} active - Indicates if the blender stop is active or not.
 * @property {string} value - The color value of the blender stop in hexadecimal format.
 *
 * @fires update:active - Dispatched when the active state is updated.
 */
export class RgbColorMixerBlenderStop extends LitElement {
  static properties = {
    _color: { state: true },
    // ---
    active: { type: Boolean, reflect: true },
    value: { type: String, reflect: true },
  };

  constructor() {
    super();

    this.active = false;
    this.value = '#000000';
  }

  // --- private methods ---

  #handleClick() {
    const value = !this.active;

    this.#emitActiveUpdate(value);
  }

  #emitActiveUpdate(value) {
    const event = createCustomEvent(
      'update:active',
      { value },
      { bubbles: false },
    );

    this.dispatchEvent(event);
  }

  // --- lifecycle ---

  willUpdate(props) {
    if (props.has('value')) {
      this._color = blackOrWhite(this.value);
    }
  }

  // --- render

  render() {
    return html`
      <button
        ?active=${this.active}
        class="body"
        style=${styleMap({
          '--color': this._color,
          '--background-color': this.value,
        })}
        @click=${this.#handleClick}
      >
        <rgb-color-mixer-ui-icon class="icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M3 21v-4a4 4 0 1 1 4 4h-4" />
            <path d="M21 3a16 16 0 0 0 -12.8 10.2" />
            <path d="M21 3a16 16 0 0 1 -10.2 12.8" />
            <path d="M10.6 9a9 9 0 0 1 4.4 4.4" />
          </svg>
        </rgb-color-mixer-ui-icon>
      </button>
    `;
  }

  // --- styles ---

  static styles = css`
    :host {
      --width: 40px;
      --height: 32px;

      align-items: stretch;
      box-sizing: border-box;
      display: flex;
      height: var(--height);
      justify-content: stretch;
      width: var(--width);

      *,
      *::after,
      *::before {
        box-sizing: inherit;
      }
    }

    .body {
      flex: 1 1 auto;
      border-radius: 4px;
      border: 1px solid black;
      appearance: none;
      box-shadow: inset 1px 1px 1px 0 hsl(0 100 100 / 0.2),
        inset -1px -1px 1px 0 hsl(0 0 0 / 0.1);
      color: var(--color);
      background-color: var(--background-color);
      display: flex;
      justify-content: center;
      align-items: center;

      &[active] {
        box-shadow: inset 0 0 0 1px black, inset 0 0 0 4px rgb(0 0 0 / 0.2);
      }
    }

    .icon {
      --color: var(--color);
    }
  `;
}
