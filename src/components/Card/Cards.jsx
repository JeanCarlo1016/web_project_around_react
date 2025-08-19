import Card from "./Card";
import { useState } from "react";
import { initialCards } from "../../utils/utils";

const Cards = ({ cards, setCards, onOpenPopup, onClosePopup }) => {
  const handleDeleteCard = (index) => {
    const updatedCards = cards.filter((_, cardIndex) => cardIndex !== index);
    setCards(updatedCards);
  };

  const handleLikeCard = (index) => {
    const updatedCards = cards.map((card, cardIndex) => {
      if (cardIndex === index) {
        return { ...card, isliked: !card.isliked };
      }
      return card;
    });
    setCards(updatedCards);
  };

  return (
    <section className="places" id="cards__zone">
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            title={card.name}
            imageSrc={card.link}
            isliked={card.isliked}
            index={index}
            handleDeleteCard={handleDeleteCard}
            handleLikeCard={handleLikeCard}
            handleOpenPopup={onOpenPopup}
            handleClose={onClosePopup}
          />
        );
      })}
    </section>
  );
};
export default Cards;
