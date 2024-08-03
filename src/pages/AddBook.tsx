import React from "react";
import { BookLoadState, addBook } from "../services/state/book/bookSlice";
import { AppDispatch, RootState } from "../services/state/store";
import { useDispatch, useSelector } from "react-redux";
import { BookClass } from "../data/bookClass";

const AddBook = () => {
  const dispatch = useDispatch<AppDispatch>();
  const books: BookLoadState = useSelector((state: RootState) => state.data);

  return (
    <>
      <button
        onClick={() => {
          const newBook: BookClass = {
            id: 876,
            isbn: "978-3-16-148410-0",
            name: "New Book",
            year: 2024,
            author: "Author Name",
            description: "A description of the new book.",
            image: "url/to/image.jpg",
            createdAt: "2024-06-26T00:00:00Z",
            updatedAt: "2024-06-26T00:00:00Z",
          };
          dispatch(addBook(newBook));
        }}
      >
        Test
      </button>
    </>
  );
};

export default AddBook;
