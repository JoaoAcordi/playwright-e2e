import { test, expect } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import FormularioPage from '../support/pages/FormularioPage';

test.describe('Formulário de Teste EvilTester', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let formularioPage: FormularioPage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.testFormulario')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    formularioPage = new FormularioPage(page);
    await page.goto(BASE_URL);
  });

  test('Preencher formulário válido', async ({ page }) => {
    await formularioPage.fillValidForm();
    const successMessage = await formularioPage.checkSuccessMessage();
    expect(successMessage).toContain('Sucesso');
  });

  test('Preencher formulário inválido', async ({ page }) => {
    await formularioPage.fillInvalidForm();
    const errorMessage = await formularioPage.checkErrorMessage();
    expect(errorMessage).toContain('Erro');
  });
});
