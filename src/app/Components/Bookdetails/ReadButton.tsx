"use client";
import { BooksContext } from "@/Context/BooksContext";
import type { IBook } from "@/Types/books.type";
import { useContext } from "react";
import type { Dispatch, SetStateAction } from "react";

const ReadButton = ({book} : {book: IBook}) => {

    const { readBooks, setReadBooks } = useContext(BooksContext) as unknown as {
      readBooks: IBook[];
      setReadBooks: Dispatch<SetStateAction<IBook[]>>;
    };

      const handleReadBook = () => {
        console.log("Read button trigerred", book)
        setReadBooks([...readBooks, book]);
      };

    return (
        <button className="btn btn-primary px-8 shadow-md hover:shadow-lg" onClick={() => handleReadBook()}>
            Read
        </button>
    );
};

export default ReadButton;