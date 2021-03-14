function Todo({ text }) {
  function deleteHandler() {
    console.log('clicked!');
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
    </div>
  );
}

export default Todo;
