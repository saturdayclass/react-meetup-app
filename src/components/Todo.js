import Modal from './Modal';
import Backdrop from './Backdrop';
import { useState } from 'react';
function Todo({ text }) {
  // data array pertama bisa kita angap sebagai variable, data kedua sebagai method yang merubah nilai pada variable
  const [isModalOpen, setIsModalOpen] = useState(false);
  function deleteHandler() {
    setIsModalOpen(true);
  }
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
          <Modal />
          <Backdrop />
        </>
      )}
    </div>
  );
}

export default Todo;
