import { Page } from '@playwright/test';

export default class FormularioPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillValidForm() {
    await this.page.fill('#name', 'João Teste');
    await this.page.fill('#email', 'joao@test.com');
    await this.page.fill('#message', 'Mensagem de teste válida');
    await this.page.click('#submit');
  }

  async fillInvalidForm() {
    await this.page.fill('#name', '');
    await this.page.fill('#email', 'invalido');
    await this.page.fill('#message', '');
    await this.page.click('#submit');
  }

  async checkSuccessMessage() {
    return this.page.locator('#success-message').textContent();
  }

  async checkErrorMessage() {
    return this.page.locator('#error-message').textContent();
  }
}
