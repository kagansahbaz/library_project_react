import React from "react";
import "../style/cardList.scss";
import Card from "./Card";

function CardList({card}) {
  return (
    <div className="card-container">
      {card.map(book => <Card key={book.id} book={book}/>)}      
    </div>
  );
}

export default CardList;
