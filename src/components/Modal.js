// Setiap component memiliki paramters props secara default berbentuk object
const Modal = (props) => {
  const cancelHandler = () => {
    props.onCancel();
  };

  const confirmHandler = () => {};
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
};

export default Modal;
