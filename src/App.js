import './App.css';
import { useState } from 'react';
import Nav from "../src/components/Nav";
import Form from "../src/components/Form";
import CardList from "../src/components/CardList";
import Footer from "../src/components/Footer";
import { booksData } from './data/data';

// useState
// const [deger, setDeger] = useState(default değer girilebilir.)

function App() {
  const [books, setBooks]=useState(booksData);

  const newBookAdd = (newBook) => {
    // setBooks([...books,newBook]);
    setBooks(prev =>[...prev,newBook])
  }

  return (
    <>
    <Nav/>
    <Form newBookAdd = {newBookAdd} bookList={books}/>
    <CardList card={books}/>
    <Footer/>
    </>
  );
}

export default App;