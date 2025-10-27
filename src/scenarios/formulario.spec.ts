import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import FormularioPage from '../support/pages/FormularioPage';

test.describe('Formulário de Teste EvilTester', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let formularioPage: FormularioPage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.eviltester_form')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    formularioPage = new FormularioPage(page);
    await page.goto(BASE_URL);
  });

  test('Preencher formulário válido', async () => {
    await formularioPage.preencherFormulario();
    await formularioPage.enviarFormulario();
    // Adicione asserções conforme necessário
  });

  test('Preencher formulário inválido', async () => {
    // Modifique os dados para causar erro
    await formularioPage.preencherFormulario();
    await formularioPage.enviarFormulario();
    // Adicione asserções conforme necessário
  });
});
