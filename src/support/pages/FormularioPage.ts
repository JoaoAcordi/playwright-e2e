import { Page } from '@playwright/test';

export default class FormularioPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async preencherFormulario() {
    await this.page.fill('input[name="username"]', 'usuario_teste');
    await this.page.fill('input[name="password"]', 'senha_teste');
    await this.page.fill('textarea[name="comment"]', 'Comentário de teste');
    await this.page.setInputFiles('input[name="filename"]', 'caminho/para/seu/arquivo.txt');
    await this.page.check('input[name="checkbox1"]');
    await this.page.check('input[name="checkbox2"]');
    await this.page.check('input[name="checkbox3"]');
    await this.page.click('input[name="radio1"]');
    await this.page.selectOption('select[name="multipleselect"]', 'item1');
    await this.page.selectOption('select[name="multipleselect"]', 'item3');
    await this.page.selectOption('select[name="dropdown"]', 'Drop Down Item 2');
  }

  async enviarFormulario() {
    await this.page.click('input[type="submit"]');
  }
}
