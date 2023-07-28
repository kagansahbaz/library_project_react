import React, { useState } from "react";
import "../style/form.scss";

function Form({newBookAdd, bookList}) {
  const [bookCategory, setBookCategory] = useState("empty");
  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [page, setPage] = useState("");
  const [bookDescription, setBookDescription] = useState("");
  const [bookCoverUrl, setBookCoverUrl] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    newBookAdd({
      id: (bookList.length + 1),
      bookName: bookName,
      author: author,
      category: bookCategory,
      bookCoverUrl: bookCoverUrl,
      page: page,
      bookDescription: bookDescription,
    });
    setBookCategory("Kategori Seçiniz...");
    setBookName("");
    setAuthor("");
    setPage("");
    setBookDescription("");
    setBookCoverUrl("");
  };

  return (
    <form onSubmit={HandleSubmit}>
      <h3>Yeni Kitap Ekle</h3>
      <select
        value={bookCategory}
        onChange={(e) => setBookCategory(e.target.value)}
      >
        <option value={"empty"}>Kategori Seçiniz...</option>
        <option value={1}>Software</option>
        <option value={2}>History</option>
        <option value={3}>Biogrophy</option>
        <option value={4}>Detective</option>
      </select>
      <input
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
        type="text"
        placeholder="Kitap Adı"
      />
      <input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        type="text"
        placeholder="Kitap Yazarı"
      />
      <input
        value={page}
        onChange={(e) => setPage(e.target.value)}
        type="number"
        placeholder="Kitap Sayfa"
      />
      <input
        onChange={(e) => setBookDescription(e.target.value)}
        value={bookDescription}
        type="text"
        placeholder="Kitap Açıklaması"
      />
      <input
        onChange={(e) => setBookCoverUrl(e.target.value)}
        value={bookCoverUrl}
        type="text"
        placeholder="Kitap Kapağı"
      />
      <input disabled={!bookName || !author || !page || !bookDescription || !bookCoverUrl || bookCategory === "empty"} type="submit" value={"Ekle"} />
    </form>
  );
}

export default Form;
