import Backdrop from './components/Backdrop';
import Modal from './components/Modal';
import Todo from './components/Todo';
function App() {
  return (
    <div>
      <h1>My Todo</h1>
      <Todo text="learn react" />
      <Todo text="master react" />
      <Todo text="advance react" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
