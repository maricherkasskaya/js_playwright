import { faker } from '@faker-js/faker';

export const commentCreate = (comment) =>{
    return {
            comment: faker.word.words(10)
    }
}