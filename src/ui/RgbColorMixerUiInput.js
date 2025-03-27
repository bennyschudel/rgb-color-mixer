import { html, css, LitElement } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';

import { createCustomEvent } from '../helpers';

// ---

/**
 * A custom element that provides an input field.
 *
 * @class
 * @extends {LitElement}
 *
 * @property {boolean} [autofocus=false] - If true, the input will automatically receive focus when the element is first updated.
 * @property {boolean} [disabled=false] - If true, the input will be disabled.
 * @property {number} [max] - The maximum value for the input when type is 'number'.
 * @property {number} [min] - The minimum value for the input when type is 'number'.
 * @property {boolean} [readonly=false] - If true, the input will be read-only.
 * @property {number} [step] - The step value for the input when type is 'number'.
 * @property {('text'|'number')} [type='text'] - The type of the input, possible values are 'text' or 'number'.
 * @property {string} value - The current value of the input.
 *
 * @fires update:value - Dispatched when the input value is updated.
 */
export class RgbColorMixerUiInput extends LitElement {
  rootEl = createRef();
  inputEl = createRef();

  static properties = {
    autofocus: { type: Boolean },
    disabled: { type: Boolean },
    max: { type: Number },
    min: { type: Number },
    readonly: { type: Boolean },
    step: { type: Number },
    type: { type: String },
    value: { type: String },
  };

  constructor() {
    super();

    this.autofocus = false;
    this.disabled = false;
    this.readonly = false;

    /** @type {'text' | 'number'} */
    this.type = 'text';

    this.min = undefined;
    this.max = undefined;
    this.step = undefined;
  }

  // --- private methods ---

  #emitValueUpdate(value) {
    const event = createCustomEvent(
      'update:value',
      { value },
      { bubbles: false },
    );

    this.dispatchEvent(event);
  }

  #handleInputChange(event) {
    const { value } = event.target;

    this.setValue(value);
  }

  // --- methods ---

  setValue(value) {
    let _value = value;

    if (this.type === 'number') {
      if (this.step != null) {
        _value = Math.round(_value / this.step) * this.step;
      }
      if (this.max != null) {
        _value = Math.min(_value, this.max);
      }
      if (this.min != null) {
        _value = Math.max(_value, this.min);
      }
    }

    this.#emitValueUpdate(_value);
  }

  clear() {
    this.setValue('');
  }

  // --- lifecycle ---

  firstUpdated(props) {
    if (props.has('autofocus')) {
      if (this.autofocus) {
        this.inputEl.value.focus();
      }
    }
  }

  updated(props) {
    if (props.has('value') && this.inputEl.value) {
      this.inputEl.value.value = this.value;
    }
  }

  // --- render

  render() {
    return html`
      <div ${ref(this.rootEl)} class="body">
        <input
          ${ref(this.inputEl)}
          part="input"
          type="${this.type}"
          min="${this.min}"
          max="${this.max}"
          step="${this.step}"
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          @change=${this.#handleInputChange}
        />
      </div>
    `;
  }

  // --- styles ---

  static styles = css`
    :host {
      --border-color: transparent;
      --border-width: 1px;
      --height: 32px;

      height: var(--height);
      display: inline-flex;
    }

    .body {
      align-items: stretch;
      border-radius: 0 4px 4px 0;
      border: var(--border-width) solid var(--border-color);
      box-sizing: border-box;
      display: flex;
      flex: 1 0 auto;

      *,
      *::after,
      *::before {
        box-sizing: inherit;
      }
    }

    input {
      padding: 4px;
      border: none;
      border-radius: 4px;
      flex: 1 1 auto;
      width: 100%;

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }

      &[type='number'] {
        -moz-appearance: textfield;

        text-align: right;
      }
    }
  `;
}
