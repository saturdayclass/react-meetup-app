function Todo({ text }) {
  return (
    <div className="card">
      <h2>Title</h2>
      <div className="action">
        <span>{text}</span>
        <button className="btn">Delete</button>
      </div>
    </div>
  );
}

export default Todo;
