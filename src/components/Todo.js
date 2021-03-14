import Modal from './Modal';
import Backdrop from './Backdrop';
import { useState } from 'react';
function Todo({ text }) {
  // data array pertama bisa kita angap sebagai variable, data kedua sebagai method yang merubah nilai pada variable
  const [isModalOpen, setIsModalOpen] = useState(false);
  function deleteHandler() {
    setIsModalOpen(true);
  }

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="card">
      <h2>Title</h2>
      <div className="action">
        <span>{text}</span>
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {isModalOpen && (
        <>
          <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
          <Backdrop onCancel={closeModalHandler} />
        </>
      )}
    </div>
  );
}

export default Todo;
