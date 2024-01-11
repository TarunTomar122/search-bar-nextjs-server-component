export const getBooks = async () => {

    const response = await fetch('https://simple-books-api.glitch.me/books')
    const books = await response.json()
    return books

}