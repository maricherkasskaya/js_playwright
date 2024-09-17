import {BasePage} from './base.page';

//todo сократить нейминги
export class ArticlePage extends BasePage {
    constructor (page) {
        super (page);
        this.articleTitleField = this.page.getByPlaceholder('Article Title');
        this.articleAboutField = this.page.getByPlaceholder('What\'s this article about?');
        this.articleWrigteField = this.page.getByPlaceholder('Write your article (in');
        this.articleTagsField = this.page.getByPlaceholder('Enter tags');
        this.publishButton = this.page.getByRole('button', { name: 'Publish Article' });
        this.commentField = this.page.getByPlaceholder('Write a comment...');
        this.postCommentButton = this.page.getByRole('button', { name: 'Post Comment' });
    }

    //Заполняем поля статьи и публикуем
    async publish (articleTitle, articleAbout, articleWrigt, articleTags) {
        await this.articleTitleField.click();
        await this.articleTitleField.fill (articleTitle);
        await this.articleAboutField.click();
        await this.articleAboutField.fill (articleAbout);
        await this.articleWrigteField.click();
        await this.articleWrigteField.fill (articleWrigt);
        await this.articleTagsField.click();
        await this.articleTagsField.fill (articleTags);
        await this.publishButton.click();
}

    //Добавляем комментарий к статье

    async addComment(comment) {
        await this.commentField.click();
        await this.commentField.fill(comment);
        await this.postCommentButton.click();
    }   
}