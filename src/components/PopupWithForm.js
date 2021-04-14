const PopupWithForm = (props) => {
  return (
    <section
      className={props.isOpen ? `overlay overlay_type_${props.name} page__popup_opened` : `overlay overlay_type_${props.name}`}
      onClick={
        (evt) => {
          if (evt.target.classList.contains('page__popup_opened')) {
            
            props.onClose();
          }
          if (evt.target.classList.contains('overlay__close')) {
            
            props.onClose();
          }
        }
      }
    >
      <div className="overlay__container">
        <button className="overlay__close" type="reset"></button>
        <form className={`overlay__form overlay__form_type_${props.name}`} name={props.name} noValidate>
          <h2 className="overlay__title">{props.title}</h2>
          {props.children}
        </form>
      </div>
    </section>
  )
}

export default PopupWithForm;
