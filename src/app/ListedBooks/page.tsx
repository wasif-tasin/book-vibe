"use client";

import { BooksContext } from "@/Context/BooksContext";
import React, { useContext } from "react";
import BookCard from "../Components/Shared/BookCard";

const ReadBookPage = () => {
    const { readBooks, wishlist } = useContext(BooksContext);

    console.log(readBooks, "Read BOoks");
    console.log(wishlist, "wish BOoks");

    return (
        <div className="container mx-auto px-4 py-8">

            {/* Page Header */}
            <div className="mb-8 rounded-3xl bg-linear-to-r from-primary/10 via-base-200 to-secondary/10 px-6 py-10 text-center shadow-sm">
                <h2 className="text-3xl font-extrabold tracking-tight text-base-content md:text-4xl">
                    My Books
                </h2>

                <p className="mt-2 text-sm text-base-content/60 md:text-base">
                    Keep track of the books you have read and saved for later.
                </p>
            </div>

            {/* Tabs */}
            <div className="tabs tabs-lift w-full">

                {/* Read Books Tab */}
                <input
                    type="radio"
                    name="my_tabs_3"
                    className="tab text-sm font-semibold md:text-base"
                    aria-label={`Read Books (${readBooks.length})`}
                />

                <div className="tab-content rounded-b-2xl border-base-300 bg-base-100 p-4 md:p-8">

                    {readBooks.length > 0 ? (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {readBooks.map((book) => {
                                return (
                                    <BookCard
                                        key={book.bookId}
                                        book={book}
                                    />
                                );
                            })}
                        </div>
                    ) : (
                        <div className="flex min-h-[250px] items-center justify-center rounded-2xl bg-base-200/50">
                            <div className="text-center">
                                <div className="mb-3 text-5xl">📚</div>
                                <h3 className="text-xl font-bold">
                                    No Read Books
                                </h3>
                                <p className="mt-1 text-sm text-base-content/50">
                                    Books you read will appear here.
                                </p>
                            </div>
                        </div>
                    )}

                </div>

                {/* Wishlist Tab */}
                <input
                    type="radio"
                    name="my_tabs_3"
                    className="tab text-sm font-semibold md:text-base"
                    aria-label={`Wishlist Books (${wishlist.length})`}
                    defaultChecked
                />

                <div className="tab-content rounded-b-2xl border-base-300 bg-base-100 p-4 md:p-8">

                    {wishlist.length > 0 ? (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {wishlist.map((book) => {
                                return (
                                    <BookCard
                                        key={book.bookId}
                                        book={book}
                                    />
                                );
                            })}
                        </div>
                    ) : (
                        <div className="flex min-h-[250px] items-center justify-center rounded-2xl bg-base-200/50">
                            <div className="text-center">
                                <div className="mb-3 text-5xl">❤️</div>
                                <h3 className="text-xl font-bold">
                                    Your Wishlist Is Empty
                                </h3>
                                <p className="mt-1 text-sm text-base-content/50">
                                    Save books you want to read later.
                                </p>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default ReadBookPage;