import { Fragment } from 'react';
import Header from './components/Header';
import Auth from './components/Auth';
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';

import { useSelector } from 'react-redux'
function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  return (
    <Fragment>
      {isAuthenticated && <Header/>}
      {!isAuthenticated && <Auth/>}
      {isAuthenticated && <UserProfile/>}
      <Counter/>
    </Fragment>
  );
}

export default App;
