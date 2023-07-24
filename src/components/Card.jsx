import React from "react";
import "../style/card.scss";

function Card({book}) {
  return (
    <div className="card-container">
      <div className="card">
        <button className="delete" title="Remove!">
          DELETE
        </button>
        <img src={book.bookCoverUrl} alt="Book Cover" />
        <div className="card-body">
          <p><b>{book.bookName}</b></p>
          <p>Yazar: {book.author}</p>
          <p>Kategori: {book.category}</p>
          <p>Sayfa Sayısı: {book.page}</p>
          <p>Açıklama: {book.bookDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
