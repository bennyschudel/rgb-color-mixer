<script setup lang="ts">
import { onMounted, ref, useTemplateRef, watch, type ShallowRef } from 'vue';
import { useEventListener, useDark, useToggle } from '@vueuse/core';

import 'rgb-color-mixer';
import { type RgbColorMixer } from 'rgb-color-mixer';

const initialColor = ref('hotpink');

const color = ref('black');

const isDark = useDark();
const toggleDark = useToggle(isDark);

const mixer1 = useTemplateRef<RgbColorMixer>('mixer1');
const mixer2 = useTemplateRef<RgbColorMixer>('mixer2');
const mixer3 = useTemplateRef<RgbColorMixer>('mixer3');
const mixer4 = useTemplateRef<RgbColorMixer>('mixer4');

function handleValueUpdate(event: CustomEvent) {
  color.value = event.detail.value;
}

watch(color, (value) => {
  [mixer1, mixer2, mixer3, mixer4].map(
    (ref: ShallowRef<RgbColorMixer | null>) => {
      if (!ref.value) return;

      ref.value.setColor(value);
    },
  );
});

onMounted(() => {
  [mixer1, mixer2, mixer3, mixer4].map(
    (ref: ShallowRef<RgbColorMixer | null>) => {
      if (!ref.value) return;

      useEventListener(ref.value, 'update:value', handleValueUpdate);
    },
  );
});
</script>

<template>
  <div class="app">
    <div class="head">
      <button @click="toggleDark()">
        <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>
      </button>
      <a href="http://github.com/bennyschudel/rgb-color-mixer">Github</a>
    </div>

    <h1>&lt;rgb-color-mixer&gt;</h1>
    <rgb-color-mixer
      ref="mixer1"
      :initialValue="initialColor"
      @update:value="handleValueUpdate"
    ></rgb-color-mixer>
    <h2>RGB Only</h2>
    <code>channels="rgb"</code>
    <rgb-color-mixer
      ref="mixer2"
      :initialValue="initialColor"
      channels="rgb"
    ></rgb-color-mixer>
    <h2>HSL Only</h2>
    <code>channels="hsl"</code>
    <rgb-color-mixer
      ref="mixer3"
      :initialValue="initialColor"
      channels="hsl"
    ></rgb-color-mixer>
    <h2>No Blender</h2>
    <code>noBlender</code>
    <rgb-color-mixer
      ref="mixer4"
      :initialValue="initialColor"
      noBlender
    ></rgb-color-mixer>

    <p class="note">2025, by <a href="https://twitter.com/bennyschudel" target="_blank">@bennyschudel</a>, MIT License</p>
  </div>
</template>

<style scoped>
.app {
  max-width: 1280px;
  margin: 96px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  display: block;
  font-size: 40px;
  background: linear-gradient(to right in hsl shorter hue, hsl(330 100 70.59), hsl(60 100 70.59));
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}

h2 {
  font-size: 24px;
  margin-top: 64px;
}

code {
  background-color: light-dark(#f0f0f0, #202020);
  padding: 12px 16px;
  border-radius: 4px;
}

rgb-color-mixer {
  margin-top: 32px;
}

.head {
  align-items: center;
  display: inline-flex;
  gap: 16px;
}

.note {
  margin-top: 64px;
}
</style>
