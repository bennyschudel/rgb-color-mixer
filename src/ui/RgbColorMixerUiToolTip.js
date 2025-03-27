import { html, css, LitElement } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';

/**
 * A custom element that displays a tooltip.
 *
 * @class
 * @extends {LitElement}
 *
 * @property {number} [duration=1000] - The duration (in milliseconds) for which the tooltip is visible.
 * @property {boolean} show - Reflects the visibility state of the tooltip.
 */
export class RgbColorMixerUiToolTip extends LitElement {
  rootEl = createRef();

  static properties = {
    duration: { type: Number, reflect: true },
    show: { type: Boolean, reflect: true },
  };

  constructor() {
    super();

    this._intervalTimer;

    this.duration = 1_000;
  }

  // --- lifecycle ---

  willUpdate(props) {
    if (props.has('show')) {
      clearInterval(this._intervalTimer);
      this._intervalTimer = setTimeout(() => {
        this.show = false;
      }, this.duration);
    }
  }

    // --- render

  render() {
    return html`
      <div
        ${ref(this.rootEl)}
        class="body"
      >
        <slot></slot>
      </div>
    `;
  }

  // --- styles ---

  static styles = css`
    :host {
      --offset: 0.5rem;
      --z-index: 1000;

      --_y: calc(-200% - var(--offset));

      display: inline-flex;
      left: 50%;
      opacity: 0;
      pointer-events: none;
      position: absolute;
      transform: translate(-50%, var(--_y));
      transition: all 0.2s ease-out;
      z-index: var(--z-index);
    }

    :host([show]) {
      --_y: calc(-100% - var(--offset));

      opacity: 1;
    }

    .body {
      align-items: center;
      background-color: black;
      border-radius: 0.25rem;
      color: white;
      display: inline-flex;
      justify-content: stretch;
      padding: 0.25rem 0.5rem;

      &::after {
        border-color: black transparent transparent transparent;
        border-style: solid;
        border-width: 4px;
        bottom: -8px;
        content: "";
        display: block;
        left: calc(50% - 4px);
        position: absolute;
      }
    }
  `;
}
