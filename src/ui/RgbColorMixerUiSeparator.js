import { html, css, LitElement } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';

/**
 * A custom element that provides an visual separator.
 *
 * @class
 * @extends {LitElement}
 */
export class RgbColorPickerUiSeparator extends LitElement {
  rootEl = createRef();

  static properties = {
  };

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
      </div>
    `;
  }

  // --- styles ---

  static styles = css`
    :host {
      --padding: 8px;
      --margin: 8px;

      --border-color--top: light-dark(#c8c8c8, #000000);
      --border-color--bottom: light-dark(#f0f0f0, #404040);

      box-sizing: border-box;
      flex: 1 1 auto;

      *,
      *::after,
      *::before {
        box-sizing: inherit;
      }
    }

    .body {
      border-bottom-color: var(--border-color--bottom);
      border-left-color: transparent;
      border-right-color: transparent;
      border-style: solid;
      border-top-color: var(--border-color--top);
      border-width: 1px 0 1px 0;
      display: block;
      height: 0;
      margin-bottom: var(--margin);
      margin-left: var(--padding);
      margin-right: var(--padding);
      margin-top: var(--margin);
    }
  `;
}
