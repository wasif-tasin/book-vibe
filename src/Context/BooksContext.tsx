'use client';
import React, { createContext, useState, type ReactNode } from 'react';

 export const BooksContext = createContext({})

const BooksProvider = ({children} : {children: ReactNode}) => {
     const [readBooks, setReadBooks] = useState([]);
     const [wishlist, setWishlist] = useState([]);

     const sharedData = {
        readBooks,
        setReadBooks,
        wishlist,
        setWishlist,
     }

    return ( <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
    );
};

export default BooksProvider;