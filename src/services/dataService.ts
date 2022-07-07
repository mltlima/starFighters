import axios from 'axios';
//import * as dataRepository from '../repositories/dataRepository.js';
import { notFound } from '../middlewares/handleErrorsMiddleware.js';

function url(user: string) { 
    return `
        https://api.github.com/users/${user}/repos
    `
}

export async function battle(firstUser: string, secondUser: string) {
    const respFirstUser = await axios.get(url(firstUser));
    const respSecondUser = await axios.get(url(secondUser));

    if (respFirstUser.data.message || respSecondUser.data.message) {
        throw notFound();
    }

    if ( respFirstUser.data[0].stargazers_count > respSecondUser.data[0].stargazers_count ) {
        return { winner: firstUser, loser: secondUser, draw: false };
    } else if ( respFirstUser.data[0].stargazers_count < respSecondUser.data[0].stargazers_count ) {
        return { winner: secondUser, loser: firstUser, draw: false };
    } else {
        return { winner: null, loser: null, draw: true };
    }
}