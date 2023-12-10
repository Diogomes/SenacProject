// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://diogigaverse.github.io/SenacProject/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/SportGear/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://diogigaverse.github.io/SenacProject/pagina_login');

  // Click the get started link.
  await page.getByLabel('Email').fill('diogo.gomes@test.com');
  await page.getByLabel('Senha').fill('senha123');
  await page.locator('Button', { name: 'ENTRAR' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Bem-vindo à sua Área Pessoal' })).toBeVisible();
});
