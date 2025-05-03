import { html, css, LitElement } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';

import { createCustomEvent } from '../helpers';

// ---

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
      --height: 24px;

      height: var(--height);
      display: inline-flex;
      box-sizing: border-box;

      *,
      *::after,
      *::before {
        box-sizing: inherit;
      }
    }

    .body {
      align-items: stretch;
      display: flex;
      flex: 1 1 auto;
    }

    input {
      padding: 4px;
      border: none;
      border-radius: 2px;
      flex: 1 1 auto;
      width: 100%;
      font-size: 13px;

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }

      &[type='number'] {
        -moz-appearance: textfield;

        font-variant-numeric: tabular-nums;
        text-align: right;
      }
    }
  `;
}
