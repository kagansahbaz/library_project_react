import './App.css';
import { useEffect, useState } from 'react';
import Nav from "../src/components/Nav";
import Form from "../src/components/Form";
import CardList from "../src/components/CardList";
import Footer from "../src/components/Footer";
import axios from 'axios';

// useState
// const [deger, setDeger] = useState(default değer girilebilir.)

function App() {
  const [books, setBooks]=useState([]);
  const [categories, setCategories]=useState([]);
  const [selectedCategory, setSelectedCategory]=useState();

  const getBooks = async () => {
    let url = "http://localhost:3005/books";

    if (selectedCategory != null) {
      url += `?categoryId=${selectedCategory}`;
    }

    const response = await axios(url);
    const data = response.data;
    setBooks(data);
  };

  const getCategories = async () => {
    let url = "http://localhost:3005/categories";
    const response = await axios(url);
    const data = response.data;
    setCategories(data);
  }

  // useEffect
  // CDM 
  useEffect(() => {
    getBooks();
    getCategories();
  },[selectedCategory]);

  const newBookAdd = async (newBook) => {
    let url = "http://localhost:3005/books";
    await axios.post(url,newBook);
    getBooks();
  }

  const deleteBook = (id) => {
    setBooks(books => books.filter(book => book.id !== id));
  }

  return (
    <>
    <Nav setSelectedCategory={setSelectedCategory} categories = {categories}/>
    <Form newBookAdd = {newBookAdd} bookList={books}/>
    <CardList card={books} deleteBook={deleteBook}/>
    <Footer/>
    </>
  );
}

export default App;