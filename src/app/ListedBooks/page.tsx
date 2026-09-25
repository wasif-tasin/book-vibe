"use client";
import { BooksContext } from '@/Context/BooksContext';
import React, { useContext } from 'react';

const ReadBookPage = () => {
    const {readBooks} = useContext(BooksContext)
    console.log(readBooks, "Read BOoks");
    return (
        <div>
            
        </div>
    );
};

export default ReadBookPage;