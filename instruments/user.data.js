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
