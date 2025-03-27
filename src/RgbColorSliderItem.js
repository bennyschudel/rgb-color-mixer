import { html, css, LitElement } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';

/**
 * A custom element representing a color item with slider, label and input field.
 *
 * @class
 * @extends {LitElement}
 */
export class RgbColorSliderItem extends LitElement {
  rootEl = createRef();

  static properties = {};

  constructor() {
    super();
  }

  // --- lifecycle ---

    // --- render

  render() {
    return html`
      <div
        ${ref(this.rootEl)}
        class="body"
      >
        <div class="slider">
          <slot name="slider"></slot>
        </div>
        <div class="meta">
          <div class="label">
            <slot name="label"></slot>
          </div>
          <div class="value">
            <slot name="value"></slot>
          </div>
        </div>
      </div>
    `;
  }

  // --- styles ---

  static styles = css`
    :host {
      --label-width: 2rem;
      --background-color: light-dark(#c0c0c0, #202020);
      --color: light-dark(#202020, #f0f0f0);

      box-sizing: border-box;
      color: black;
      display: inline-flex;

      *,
      *::after,
      *::before {
        box-sizing: inherit;
      }
    }

    .body {
      align-items: stretch;
      display: flex;
      gap: 0.5rem;
    }

    .slider {
      position: relative;
      z-index: 1;
    }

    .meta {
      display: flex;
      position: relative;
    }

    .label {
      align-items: center;
      background-color: var(--background-color);
      border-radius: 0.25rem 0 0 0.25rem;
      color: var(--color);
      display: flex;
      font-family: sans-serif;
      font-size: 0.8rem;
      justify-content: center;
      user-select: none;
      width: var(--label-width);
    }

    .value {
      border-radius:  0 0.25rem 0.25rem 0;
      background-color: var(--background-color);
      color: var(--color);
      font-variant-numeric: tabular-nums;
      width: 56px;
    }
`;
}
