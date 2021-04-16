const PopupWithForm = ({isOpen, name, title, children, onClose}) => {
  return (
    <section
      className={`overlay overlay_type_${name} ${isOpen ? 'page__popup_opened' : ''}`}
      onClick={
        (evt) => {
          if (evt.target === evt.currentTarget) {
            onClose();
          }
          if (evt.target.classList.contains('overlay__close')) {
            onClose();
          }
        }
      }
    >
      <div className="overlay__container">
        <button className="overlay__close" type="reset"></button>
        <form className={`overlay__form overlay__form_type_${name}`} name={name} noValidate>
          <h2 className="overlay__title">{title}</h2>
          {children}
        </form>
      </div>
    </section>
  )
}

export default PopupWithForm;
