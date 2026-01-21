import { test, expect } from '@playwright/test';
import { BasePage } from '../page/base';

test.beforeEach(async ({ page }) => {
  await page.goto('https://demoqa.com/elements', { timeout: 60000 });
})

test('Verify Text Box Functionality', async ({ page }) => {
  const basePage = new BasePage(page);
  await basePage.clickSideBarMenu(basePage.txtBoxBtn);
  await basePage.fillTextBox('John Doe', 'john.doe@example.com', '123 Main St', '456 Oak Ave');
  await expect(basePage.txtBoxOutput).toContainText('John Doe');
  await expect(basePage.txtBoxOutput).toContainText('john.doe@example.com');
  await expect(basePage.txtBoxOutput).toContainText('123 Main St');
  await expect(basePage.txtBoxOutput).toContainText('456 Oak Ave');
});

test('Verify Check Box Functionality', async ({ page }) => {
  const basePage = new BasePage(page);
  await basePage.clickSideBarMenu(basePage.CheckBoxBtn);
  await basePage.clickCheckBoxHome();
  await expect(basePage.CheckBoxResult).toContainText('home');
});

test('Verify Check Box More Functionality', async ({ page }) => {
  const basePage = new BasePage(page);
  await basePage.clickSideBarMenu(basePage.CheckBoxBtn);
  await basePage.clickCheckBoxMore();
  await 
});