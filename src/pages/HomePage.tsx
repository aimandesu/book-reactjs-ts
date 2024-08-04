import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Button, Paper, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { BookLoadState, fetchBooks } from "../services/state/book/bookSlice";
import { AppDispatch, RootState } from "../services/state/store";
import { BookClass } from "../data/bookClass";

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const books: BookLoadState = useSelector((state: RootState) => state.data);

  useEffect(() => {
    if (!books.data || books.data.length === 0) {
      dispatch(fetchBooks());
    }
  }, [dispatch, books.data]);

  return (
    <>
      {books.status === "loading" && <div>Loading...</div>}
      {books.status === "succeeded" && (
        <div className="w-full">
          <Carousel
            NextIcon={
              <span className="material-symbols-outlined">
                arrow_forward_ios
              </span>
            }
            PrevIcon={
              <span className="material-symbols-outlined">arrow_back_ios</span>
            }
          >
            {books.data.map((book: BookClass) => (
              <BookItem key={book.id} book={book} />
            ))}
          </Carousel>
        </div>
      )}
      {books.status === "failed" && <div>Error: {books.error}</div>}
    </>
  );
};

function BookItem({ book }: { book: BookClass }) {
  return (
    <Paper>
      <h2>{book.name}</h2>
      <h2>{book.author}</h2>
      <h2>{book.year}</h2>
      <h2>{book.description}</h2>
      <img
        src={book.image}
        alt={book.name}
        style={{ width: "200px", height: "200px" }}
      />
      <h2>{book.isbn}</h2>
      <Typography variant="body2">
        Created At: {new Date(book.createdAt).toLocaleDateString()}
      </Typography>
      <Typography variant="body2">
        Updated At: {new Date(book.updatedAt).toLocaleDateString()}
      </Typography>
      <Button>View Book</Button>
    </Paper>
  );
}

export default HomePage;
