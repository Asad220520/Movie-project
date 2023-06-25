import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
import Popular from './components/Popular';
import TopRated from './components/TopRated';
import Login from './components/Login';
import MovieDetail from './pages/MovieDetail';
import ActorDetail from './pages/ActorDetail';
import Search from './components/Search';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Popular' element={<Popular />} />
        <Route path='/TopRated' element={<TopRated />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Movies/Details/:movieId' element={<MovieDetail />} />
        <Route path='/Movies/Details/actor/:actorId' element={<ActorDetail />} />
        <Route path='/movie/search/:movieName' element={<Search/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
