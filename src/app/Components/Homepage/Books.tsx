import BookCard from "../Shared/BookCard";
import type { IBook } from "@/Types/books.type";


const getBooks = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto px-4 py-17.5">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {booksData.slice(0, 6).map((book: IBook) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;

