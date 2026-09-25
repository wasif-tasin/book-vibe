"use client";
import { BooksContext } from "@/Context/BooksContext";
import type { IBook } from "@/Types/books.type";
import { useContext, type Context, type Dispatch, type SetStateAction } from "react";

type BooksContextValue = {
  wishlist: IBook[];
  setWishlist: Dispatch<SetStateAction<IBook[]>>;
};

const WishlistButton = ({book} : {book: IBook}) => {

    const { wishlist, setWishlist } = useContext(
      BooksContext as unknown as Context<BooksContextValue>
    );

      const handleReadBook = () => {
        console.log("wish button trigerred", book)
        setWishlist([...wishlist, book]);
      };

    return (
        <button className="btn btn-primary px-8 shadow-md hover:shadow-lg" onClick={() => handleReadBook()}>
            Whishlist
        </button>
    );
};

export default WishlistButton;