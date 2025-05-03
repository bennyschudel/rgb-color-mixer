import { LitElement } from 'lit';

export type RGB = [number, number, number];

// ---

export class RgbColorMixer extends LitElement {
  channels: string;
  format: 'hex' | 'rgb';
  initialValue: string;
  noBlender: boolean;
  noCopy: boolean;
  noValue: boolean;
  // ---
  get value(): string | undefined;
  get colorCss(): string;
  // ---
  setColor(text: string): void;
  setRgb(rgb: RGB): void;
  setRgbNormalized(rgb: RGB): void;
}
