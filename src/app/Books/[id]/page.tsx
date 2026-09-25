import ReadButton from '@/app/Components/Bookdetails/ReadButton';
import WishlistButton from '@/app/Components/Bookdetails/WishlistButton';
import type { IBook } from '@/Types/books.type';
import Image from 'next/image';
import React from 'react';

interface IBookDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}


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


const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {
    const { id } = await params;
    const booksData = await getBooks();
    const book = booksData.find((book: IBook) => book.bookId === Number(id),) as IBook;

    return (
        <div className=" container mx-auto card lg:card-side overflow-hidden bg-base-100 shadow-xl border border-base-200 transition-all duration-300 hover:shadow-2xl">
            {/* Book Image */}
            <figure className="lg:w-2/5 bg-base-200 p-6">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={300}
                    height={500}
                    className="h-125 w-75 rounded-xl object-cover shadow-lg"
                />
            </figure>

            {/* Details */}
            <div className="card-body lg:w-3/5 p-6 lg:p-8">

                {/* Category + Rating */}
                <div className="flex items-center justify-between gap-3">
                    <span className="badge badge-primary badge-outline">
                        {book.category}
                    </span>

                    <div className="flex items-center gap-1">
                        <span className="text-yellow-500 text-lg">★</span>
                        <span className="font-semibold">{book.rating}</span>
                        <span className="text-sm text-base-content/50">/ 5</span>
                    </div>
                </div>

                {/* Title */}
                <h2 className="card-title mt-2 text-3xl font-bold tracking-tight">
                    {book.bookName}
                </h2>

                {/* Author */}
                <p className="text-base-content/60">
                    By <span className="font-semibold text-base-content">{book.author}</span>
                </p>

                {/* Review */}
                <div className="mt-3">
                    <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-base-content/50">
                        About this book
                    </h3>

                    <p className="text-sm leading-7 text-base-content/70">
                        {book.review}
                    </p>
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="badge badge-ghost px-3 py-3"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Book Information */}
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">

                    <div className="rounded-xl bg-base-200 p-3">
                        <p className="text-xs text-base-content/50">Pages</p>
                        <p className="mt-1 font-bold">{book.totalPages}</p>
                    </div>

                    <div className="rounded-xl bg-base-200 p-3">
                        <p className="text-xs text-base-content/50">Published</p>
                        <p className="mt-1 font-bold">{book.yearOfPublishing}</p>
                    </div>

                    <div className="rounded-xl bg-base-200 p-3">
                        <p className="text-xs text-base-content/50">Publisher</p>
                        <p className="mt-1 font-bold">{book.publisher}</p>
                    </div>

                    <div className="rounded-xl bg-base-200 p-3">
                        <p className="text-xs text-base-content/50">Rating</p>
                        <p className="mt-1 font-bold">⭐ {book.rating}</p>
                    </div>

                </div>

                {/* Action */}
                <div className="card-actions mt-6 justify-end">
                   <ReadButton book = {book}></ReadButton>
                   <WishlistButton book = {book}></WishlistButton>
                </div>

            </div>
        </div>
    );
};

export default BookDetailsPage;