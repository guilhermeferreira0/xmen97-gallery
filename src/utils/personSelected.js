import { dados } from '../api/dados';

export const personSelected = (title) => {
    const person = dados.filter((data) => {
        if (data.title === title) {
            return {
                title: data.title,
                text: data.text,
                url: data.url
            };
        }
    });

    return person;
}