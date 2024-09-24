import { faker } from '@faker-js/faker';

export const articleCreate = (articleTitle, articleAbout, articleWrigt, articleTags) =>  {
    return {
    articleTitle: faker.word.words(5),
    articleAbout: faker.word.words(15),
    articleWrigt: faker.word.words(50),
    articleTags: faker.word.words(1),
  }
}