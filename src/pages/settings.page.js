import {BasePage} from './base.page';

export class SettingsPage extends BasePage {
    constructor (page) {
        super (page)
        this.updateButton = this.page.getByRole('button', 'Update Settings');
        this.nameField = this.page.getByPlaceholder('Your Name');
        this.bioField = this.page.getByPlaceholder('Short bio about you');
        this.urlField = this.page.getByPlaceholder('URL of profile picture');
        this.passwordField = this.page.getByPlaceholder('Password');
    }
    async updateBio (userBio) {
        await this.bioField.click();
        await this.bioField.fill(userBio);
        await this.updateButton.click();
    }
    async addUrl (userUrl) {
        await this.urlField.click();
        await this.urlField.fill(userUrl);
        await this.updateButton.click();
    }

    async changeName (userName){
        await this.nameField.click();
        await this.nameField.fill(userName);
        await this.updateButton.click();
    }
}

