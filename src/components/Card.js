const Card = (props) => {

  const handelClick = () => {
    props.onCardClick(props.card);
  }

  return (
    <div className="element" onClick={handelClick}>
      <button className="element__basket" type="button"></button>
      <img src={props.card.link} alt={props.card.name} className="element__photo" />
      <div className="element__container">
        <h2 className="element__name">{props.card.name}</h2>
        <div className="element__like-container">
          <button className="element__like" type="button"></button>
          <p className="element__like-counter">{props.card.likes ? props.card.likes.length : 0}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;