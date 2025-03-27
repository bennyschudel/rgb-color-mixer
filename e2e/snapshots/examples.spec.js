// @ts-check
import { test, expect } from '@playwright/test';

const examples = [
  'default',
  'hsl-only',
  'rgb-only',
  'set-color',
];

examples.forEach((name) => {
  test(`visual: compare ${name}`, async ({ page }) => {
    await page.goto(`/examples/${name}`);

    await page.waitForTimeout(500);

    await expect(page).toHaveScreenshot(`${name}.png`, { fullPage: true });
  });
})

