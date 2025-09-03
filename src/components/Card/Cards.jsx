import Card from "./Card";

const Cards = ({
  cards,
  onLike,
  onDelete,
  onOpenPopup,
  onClosePopup,
  currentUser,
}) => {
  return (
    <section className="places" id="cards__zone">
      {cards.map((card, index) => {
        const isLiked = card.likes?.includes(currentUser._id);
        return (
          <Card
            key={card._id}
            card={card}
            title={card.name}
            imageSrc={card.link}
            isliked={isLiked}
            index={index}
            onLike={onLike}
            onDelete={onDelete}
            handleOpenPopup={onOpenPopup}
            handleClose={onClosePopup}
          />
        );
      })}
    </section>
  );
};
export default Cards;
