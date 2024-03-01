import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Show from './pages/Show/Show';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <>
      <Header />
      <Search />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shows/:id' element={<Show />} />
        <Route
          path='*'
          element={<h1 className='text-center mt-5'>Not found!</h1>}
        />
      </Routes>
    </>
  );
};

export default App;
