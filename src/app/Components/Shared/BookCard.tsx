import type { IBook } from "@/Types/books.type";
import Image from "next/image";

interface IBookCardProps {
    book : IBook;
}

const BookCard = ({ book }: IBookCardProps) => {
    return (
        <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            {/* Book Image */}
            <div className="relative h-72 overflow-hidden bg-gray-100">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-gray-700 shadow">
                    {book.category}
                </span>

                {/* Rating */}
                <span className="absolute right-4 top-4 rounded-full bg-black/75 px-3 py-1 text-sm font-semibold text-white">
                    ⭐ {book.rating}
                </span>
            </div>

            {/* Content */}
            <div className="p-5">
                <h2 className="mb-1 line-clamp-1 text-xl font-bold text-gray-900">
                    {book.bookName}
                </h2>

                <p className="mb-3 text-sm text-gray-500">
                    By {book.author}
                </p>

                {/* Tags */}
                <div className="mb-5 flex flex-wrap gap-2">
                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Bottom Info */}
                <div className="mb-5 flex items-center justify-between border-t border-gray-100 pt-4 text-sm">

                    <div>
                        <p className="text-gray-400">Published</p>
                        <p className="font-semibold text-gray-800">
                            {book.yearOfPublishing}
                        </p>
                    </div>

                    <div>
                        <p className="text-gray-400">Publisher</p>
                        <p className="font-semibold text-gray-800">
                            {book.publisher}
                        </p>
                    </div>
                </div>

                {/* Button */}
                <button className="w-full rounded-xl bg-gray-900 px-5 py-3 font-semibold text-white transition hover:bg-gray-700">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default BookCard;

