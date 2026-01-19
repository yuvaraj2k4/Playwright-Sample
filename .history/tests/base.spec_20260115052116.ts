import { test, expect } from '@playwright/test';
import { BasePage } from '../page/base';

test.beforeEach(async ({ page }) => {
  await page.goto('https://demoqa.com/elements');
})

test('Verify Text Box Functionality', async ({ page }) => {

