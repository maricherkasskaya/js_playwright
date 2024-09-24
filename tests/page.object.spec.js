import { test, expect } from '@playwright/test';
import {userCreate} from '../instruments/user.data';
import {articleCreate} from '../instruments/articles.data';
import {commentCreate} from '../instruments/comment.data'
import { MainPage, RegisterPage, SettingsPage, ArticlePage } from '../src/pages/index';

const url  = 'https://realworld.qa.guru/#/';
let newUser;

test.describe ('PageObject', ()=> {
   test.beforeEach (async ({ page })  => {

newUser = userCreate();

const mainPage = new MainPage (page);
const registerPage = new RegisterPage(page);

await mainPage.open(url);
await mainPage.goToRegister ();
await registerPage.register (newUser.userName, newUser.userEmail, newUser.userPassword);

});

test('Пользователь может изменить bio', async ({ page }) => {

       const mainPage = new MainPage (page);
       const settingsPage = new SettingsPage(page);

       await mainPage.goToSettings();
       await settingsPage.updateBio(newUser.userBio);
       await expect(settingsPage.bioField).toContainText(newUser.userBio);
   
     });
    
     test('Пользователь может изменить имя', async ({ page }) => {

      const mainPage = new MainPage (page);
      const settingsPage = new SettingsPage(page);
  
      await mainPage.goToSettings();
      await settingsPage.changeName(newUser.userName);
      await expect(settingsPage.nameField).toHaveValue(newUser.userName);
  
    });

   test('Пользователь может добавить URL', async ({ page }) => {

    const mainPage = new MainPage (page);
    const settingsPage = new SettingsPage(page);

    await mainPage.goToSettings();
    await settingsPage.addUrl(newUser.url);
    await expect(settingsPage.urlField).toHaveValue(newUser.url);

  });

  test('Пользователь может выйти из аккаунта', async ({ page }) => {

    const mainPage = new MainPage (page);

    await mainPage.goToLogout();
    await expect(mainPage.signupButton).toBeVisible;

  });

  test('Пользователь может опубликовать статью', async ({ page }) => {

    const mainPage = new MainPage (page);
    const articlePage = new ArticlePage(page);

    let newArticle;
    newArticle = articleCreate();

    await mainPage.goToNewArticle();
    await articlePage.publish(newArticle.articleTitle, newArticle.articleAbout, newArticle.articleWrigt, newArticle.articleTags)
    await expect (page.getByRole('heading', { name: newArticle.articleTitle })).toBeVisible();

  });

  test('Пользователь может добавить комментарий', async ({ page }) => {

    const mainPage = new MainPage (page);
    const articlePage = new ArticlePage(page);

    let newArticle;
    newArticle = articleCreate();

    let newComment;
    newComment = commentCreate();

    await mainPage.goToNewArticle();
    await articlePage.publish(newArticle.articleTitle, newArticle.articleAbout, newArticle.articleWrigt, newArticle.articleTags)
    await articlePage.addComment(newComment.comment);
    await expect(page.getByText(newComment.comment)).toBeVisible();

  });

});
