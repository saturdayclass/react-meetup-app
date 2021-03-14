import { Route } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';
function App() {
  return (
    <div>
      <MainNavigation />
      <Route path="/" exact component={AllMeetupsPage} />
      <Route path="/new-meetup" component={NewMeetupPage} />
      <Route path="/favorites" component={FavoritesPage} />
    </div>
  );
}

export default App;
