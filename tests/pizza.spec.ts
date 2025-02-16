import { test, expect } from 'playwright-test-coverage';

test('home page', async ({ page }) => {
  await page.goto('/');

  expect(await page.title()).toBe('JWT Pizza');
});

test('buy pizza with login', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Order now' }).click();
  await page.getByRole('combobox').selectOption('1');
  await page.getByRole('link', { name: 'Image Description Veggie A' }).click();
  await page.getByRole('link', { name: 'Image Description Pepperoni' }).click();
  await page.getByRole('link', { name: 'Image Description Margarita' }).click();
  await page.getByRole('link', { name: 'Image Description Crusty A' }).click();
  await page.getByRole('link', { name: 'Image Description Charred' }).click();
  await page.getByRole('button', { name: 'Checkout' }).click();

  await page.getByPlaceholder('Email address').click();
  await page.getByPlaceholder('Email address').fill('d@jwt.com');
  await page.getByPlaceholder('Email address').press('Tab');
  await page.getByPlaceholder('Password').fill('diner');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Pay now' }).click();
  await page.getByRole('button', { name: 'Verify' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
});


test('register and logout', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Register' }).click();
  await page.getByRole('textbox', { name: 'Full name' }).fill('random');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('random@random.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('random');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});

  // await page.getByRole('main').getByText('Register').click();
  // await page.getByRole('textbox', { name: 'Full name' }).fill('Test100');
  // await page.getByRole('textbox', { name: 'Email address' }).click();
  // await page.getByRole('textbox', { name: 'Email address' }).fill('test100@email.com');
  // await page.getByRole('textbox', { name: 'Password' }).click();
  // await page.getByRole('textbox', { name: 'Password' }).fill('test100');
  // await page.getByRole('button', { name: 'Register' }).click();