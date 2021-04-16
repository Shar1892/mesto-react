const Card = ({card, onCardClick}) => {

  const handelClick = () => {
    onCardClick(card);
  }

  return (
    <div className="element">
      <button className="element__basket" type="button"></button>
      <img src={card.link} alt={card.name} className="element__photo" onClick={handelClick} />
      <div className="element__container">
        <h2 className="element__name">{card.name}</h2>
        <div className="element__like-container">
          <button className="element__like" type="button"></button>
          <p className="element__like-counter">{card.likes ? card.likes.length : 0}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;