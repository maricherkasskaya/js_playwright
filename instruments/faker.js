import { faker } from '@faker-js/faker';

export const userCreate = (userBio, userName, userEmail, userPassword, url) => {
    return {
    userBio: faker.music.genre(),  
    userName: faker.person.firstName('female'),
    userEmail: faker.internet.email(),
    userPassword: faker.internet.password(),
    url: faker.internet.url(),
    }
  }

export const articleCreate = (articleTitle, articleAbout, articleWrigt, articleTags) =>  {
    return {
    articleTitle: faker.word.words(5),
    articleAbout: faker.word.words(15),
    articleWrigt: faker.word.words(50),
    articleTags: faker.word.words(1),
  }
}

export const commentCreate = (comment) =>{
    return {
            comment: faker.word.words(10)
    }
}