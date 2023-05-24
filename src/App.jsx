import { 
    createBrowserRouter,
    RouterProvider,
    Route,
    BrowserRouter as Router,
    Routes
} from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar/NavBar';
import UserProfile from './pages/UserProfile/UserProfile';
import UserMovies from './pages/UserMovies/UserMovies';
import MoviePage from './pages/MoviePage/MoviePage';
import UserPage from './pages/Userpage/UserPage';


function App(){

  
  
  return (
    <Router>
    <div className="App">
      <NavBar />
      {/* <header className="header">
        <h1 className='heading-1'>Users</h1>
      </header> */}
      <main className="main">
        <Routes>
          <Route path="/" element={<UserPage />} />  
          <Route exact path="/userprofile" element={<UserProfile />} /> 
          <Route exact path="/usermovies" element={<UserMovies />}/>
          <Route exact path="/topmovies" element={<MoviePage />}/>
        </Routes>
      </main>
    </div>
    </Router>
  );
}

export default App
