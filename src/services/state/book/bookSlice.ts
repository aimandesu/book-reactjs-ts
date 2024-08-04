import {
  PayloadAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit/react";
import { BookClass } from "../../../data/bookClass";
import { bookMockData } from "../../../data/bookMockData";

export interface BookLoadState {
  data: BookClass[];
  status: String;
  error: String | null;
}

const initialState: BookLoadState = {
  data: [] as BookClass[],
  status: "idle",
  error: null as string | null,
};

const bookSlice: any = createSlice({
  name: "books",
  initialState,
  reducers: {
    //some action here,
    addBook: (state, action: PayloadAction<BookClass>) => {
      state.data.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchBooks.fulfilled,
        (state, action: PayloadAction<BookClass[]>) => {
          state.status = "succeeded";
          state.data = action.payload;
        }
      )
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const fetchBooks: any = createAsyncThunk("data/fetchBooks", async () => {
  //arg, thunkAPI
  // const response = await fetch(
  //   "https://portfolio-namia.000webhostapp.com/get_books.php"
  // );
  // const data: BookClass[] = await response.json();
  // return data.map((book) => ({
  //   ...book,
  //   createdAt: new Date(book.createdAt).toISOString(),
  //   updatedAt: new Date(book.updatedAt).toISOString(),
  // }));
  // console.log(JSON.stringify(bookMockData));
  return bookMockData;
});

export const { addBook } = bookSlice.actions;

export default bookSlice.reducer;
