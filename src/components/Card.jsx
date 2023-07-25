import React from "react";
import "../style/card.scss";

function Card({book, deleteBook}) {
  return (
    <div className="card-container">
      <div className="card">
        <button onClick={()=>deleteBook(book.id)} className="delete" title="Remove!">
          DELETE
        </button>
        <img src={book.bookCoverUrl} alt="Book Cover" />
        <div className="card-body">
          <p><b>{book.bookName}</b></p>
          <p>Yazar: {book.author}</p>
          <p>Kategori: {book.category}</p>
          <p>Sayfa Sayısı: {book.page}</p>
          <p><b>Açıklama:</b> {book.bookDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
