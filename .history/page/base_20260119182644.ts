import { Locator, Page } from 'playwright';

export class BasePage {
    page : Page;
    title: Locator;
    txtBoxBtn: Locator;
    fillName: Locator;
    fillEmail: Locator;
    fillCurrentAddress: Locator;
    fillPermanentAddress: Locator;
    submitBtn: Locator;
    txtBoxOutput: Locator;
    CheckBoxBtn: Locator;
    CheckBoxTitle: Locator;
    CheckBoxHome: Locator;
    CheckBoxResult: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('h1');
        this.txtBoxBtn = page.getByText('Text Box', { exact: true });
        this.fillName = page.getByRole('textbox', { name: 'Full Name' });
        this.fillEmail = page.getByRole('textbox', { name: 'name@example.com' });
        this.fillCurrentAddress = page.locator('#currentAddress');
        this.fillPermanentAddress = page.locator('#permanentAddress');
        this.submitBtn = page.getByRole('button', { name: 'Submit' });
        this.txtBoxOutput = page.locator('.border');
        this.CheckBoxBtn = page.locator(`span:has-text("Check Box")`);
        this.CheckBoxTitle = page.getByRole('heading', { name: 'Check Box', level: 1 });
        this.CheckBoxHome = page.locator(`label > span.rct-checkbox > svg`);
        this.CheckBoxResult = page.locator('#result');
    }

    async clickSideBarMenu(option: Locator) {
        await option.click();
    }

    async fillTextBox(fullName: string, email: string, currentAddress: string, permanentAddress: string) {
        await this.fillName.fill(fullName);
        await this.fillEmail.fill(email);
        await this.fillCurrentAddress.fill(currentAddress);
        await this.fillPermanentAddress.fill(permanentAddress);
        await this.submitBtn.click();
    }

    

}