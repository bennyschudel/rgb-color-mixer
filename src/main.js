import { RgbColorMixerUiField } from './ui/RgbColorMixerUiField.js';
import { RgbColorMixerUiIcon } from './ui/RgbColorMixerUiIcon.js';
import { RgbColorMixerUiIconButton } from './ui/RgbColorMixerUiIconButton.js';
import { RgbColorMixerUiInput } from './ui/RgbColorMixerUiInput.js';
import { RgbColorPickerUiSeparator } from './ui/RgbColorMixerUiSeparator.js';
import { RgbColorMixerUiToolTip } from './ui/RgbColorMixerUiToolTip.js';

import { RgbColorMixerBlender } from './RgbColorMixerBlender.js';
import { RgbColorMixerBlenderStop } from './RgbColorMixerBlenderStop.js';
import { RgbColorMixerValue } from './RgbColorMixerValue.js';

import { RgbColorSlider } from './RgbColorSlider.js';
import { RgbColorSliderItem } from './RgbColorSliderItem.js';

import { RgbColorMixer } from './RgbColorMixer.js';

export {
  RgbColorMixer,
};

// ---

window.customElements.define('rgb-color-mixer-ui-field', RgbColorMixerUiField);
window.customElements.define('rgb-color-mixer-ui-icon', RgbColorMixerUiIcon);
window.customElements.define('rgb-color-mixer-ui-icon-button', RgbColorMixerUiIconButton);
window.customElements.define('rgb-color-mixer-ui-input', RgbColorMixerUiInput);
window.customElements.define('rgb-color-mixer-ui-separator', RgbColorPickerUiSeparator);
window.customElements.define('rgb-color-mixer-ui-tool-tip', RgbColorMixerUiToolTip);

window.customElements.define('rgb-color-mixer-blender', RgbColorMixerBlender);
window.customElements.define('rgb-color-mixer-blender-stop', RgbColorMixerBlenderStop);
window.customElements.define('rgb-color-mixer-value', RgbColorMixerValue);

window.customElements.define('rgb-color-slider', RgbColorSlider);
window.customElements.define('rgb-color-slider-item', RgbColorSliderItem);

window.customElements.define('rgb-color-mixer', RgbColorMixer);
