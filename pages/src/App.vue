<script setup lang="ts">
import { onMounted, ref, useTemplateRef, watch, type ShallowRef } from 'vue';
import { useEventListener, useDark, useToggle } from '@vueuse/core';

import 'rgb-color-mixer';
import { type RgbColorMixer } from 'rgb-color-mixer';

import { APP_VERSION, API_DOCUMENTATION_URL, GITHUB_URL } from './config';

const initialColor = ref('hotpink');

const color = ref('black');

const isDark = useDark();
const toggleDark = useToggle(isDark);

const TOTAL_MIXERS = 8;

const mixers: Array<ShallowRef<RgbColorMixer | null>> = [
  ...Array(TOTAL_MIXERS).keys(),
].map((i) => {
  return useTemplateRef<RgbColorMixer>(`mixer${i}`);
});

function handleValueUpdate(event: CustomEvent) {
  color.value = event.detail.value;
}

watch(color, (value) => {
  mixers.map((ref: ShallowRef<RgbColorMixer | null>) => {
    if (!ref.value) return;

    ref.value.setColor(value);
  });
});

onMounted(() => {
  mixers.map((ref: ShallowRef<RgbColorMixer | null>) => {
    if (!ref.value) return;

    useEventListener(ref.value, 'update:value', handleValueUpdate);
  });
});
</script>

<template>
  <div class="app">
    <div class="head">
      <button @click="toggleDark()">
        <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>
      </button>
      <a :href="API_DOCUMENTATION_URL">API Documentation</a>
      <a :href="GITHUB_URL">Github</a>
    </div>

    <h1>&lt;rgb-color-mixer&gt;</h1>

    <div class="badge">{{ APP_VERSION }}</div>

    <rgb-color-mixer
      ref="mixer0"
      :initialValue="initialColor"
      @update:value="handleValueUpdate"
    ></rgb-color-mixer>

    <h2>RGB Only</h2>
    <code>channels="rgb"</code>
    <rgb-color-mixer
      ref="mixer1"
      :initialValue="initialColor"
      channels="rgb"
    ></rgb-color-mixer>

    <h2>HSL Only</h2>
    <code>channels="hsl"</code>
    <rgb-color-mixer
      ref="mixer2"
      :initialValue="initialColor"
      channels="hsl"
    ></rgb-color-mixer>

    <h2>No Blender</h2>
    <code>noBlender</code>
    <rgb-color-mixer
      ref="mixer3"
      :initialValue="initialColor"
      noBlender
    ></rgb-color-mixer>

    <h2>No Value</h2>
    <code>noValue</code>
    <rgb-color-mixer
      ref="mixer4"
      :initialValue="initialColor"
      noValue
    ></rgb-color-mixer>

    <h2>No Copy & No Picker</h2>
    <code>noCopy noPicker</code>
    <rgb-color-mixer
      ref="mixer5"
      :initialValue="initialColor"
      noCopy
      noPicker
    ></rgb-color-mixer>

    <h2>Minimal RGB</h2>
    <code>channels="rgb" noBlender noValue</code>
    <rgb-color-mixer
      ref="mixer6"
      :initialValue="initialColor"
      channels="rgb"
      noBlender
      noValue
    ></rgb-color-mixer>

    <h2>Minimal HSL</h2>
    <code>channels="hsl" noBlender noValue</code>
    <rgb-color-mixer
      ref="mixer7"
      :initialValue="initialColor"
      channels="hsl"
      noBlender
      noValue
    ></rgb-color-mixer>

    <p class="note">
      2025, by
      <a href="https://twitter.com/bennyschudel" target="_blank"
        >@bennyschudel</a
      >, MIT License
    </p>
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
  background: linear-gradient(
    to right in hsl shorter hue,
    hsl(330 100 70.59),
    hsl(60 100 70.59)
  );
  color: transparent;
  background-clip: text;
  margin-bottom: 0;
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

.badge {
  background-color: light-dark(#d0d0d0, #303030);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
}

.note {
  margin-top: 64px;
}
</style>
