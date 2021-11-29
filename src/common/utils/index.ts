import { BookProps } from './../../const/books';

function getReadYearList({ books }: { books: BookProps[] }) {
    const years = [];
    for (let book of books) {
        const { date } = book;
        if (date && date.length) {
            years.push(date.split('.')[0]);
        }
    }
    return Array.from(new Set(years));
}

export {
    getReadYearList
}