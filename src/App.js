import { Route } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
function App() {
  return (
    <div>
      <Route path="/" exact component={AllMeetupsPage} />
      <Route path="/new-meetup" component={NewMeetupPage} />
      <Route path="/favorites" component={FavoritesPage} />
    </div>
  );
}

export default App;
