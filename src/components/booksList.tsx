import { getBooks } from "@/utils/API/booksAPI"

export default async function BooksList(props: any) {

    const books = await getBooks();

    const searchTerm = props.searchTerm;

    // console.log(searchTerm, books);

    return (

        <ul className="flex flex-col items-center justify-center gap-4">
            {books
                .filter((book: any) => {
                    if (searchTerm == null) {
                        return book
                    } else if (book.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return book
                    }
                })
                .map((book: any) => (
                    <li key={book.id} className="flex flex-col items-center justify-center">

                        <h3 className="text-3xl">{book.name}</h3>
                        <p className="text-xl">{book.type}</p>
                    </li>
                ))}
        </ul>

    )
}