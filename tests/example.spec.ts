import { test, expect } from '@playwright/test';

test('todos will increment', async ({ page }) => {
  await page.goto('/');

  const initialCounter = await page.getByText('Clicks on todos: 0');
  await expect(initialCounter).toBeVisible();
  const initialText = await initialCounter.innerText();
  expect(initialText).toBe('Clicks on todos: 0');

  const locator = await page.getByText('1 - ct1', { exact: true });
  await expect(locator).toBeVisible();

  // await locator.evaluate((element) => {
  //   element.style.border = '2px solid red';
  // });

  // await page.pause();

  await locator.click();

  const updatedCounter = await page.getByText('Clicks on todos: 1');
  await expect(updatedCounter).toBeVisible();
  const updatedText = await updatedCounter.innerText();
  expect(updatedText).toBe('Clicks on todos: 1');

  await page.waitForTimeout(7000);
});
