#!/bin/sh

npx jsdoc \
  --destination pages/dist/docs/api \
  --readme docs/api/README.md \
  src/RgbColorMixer.js \
  src/RgbColorMixerBlender.js \
  src/RgbColorMixerBlenderStop.js \
  src/RgbColorMixerValue.js \
  src/RgbColorSlider.js \
  src/RgbColorSliderItem.js
