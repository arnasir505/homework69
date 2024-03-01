import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Search from './pages/Search/Search';
import Show from './pages/Show/Show';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Search />} />
        <Route path='/shows/:id' element={<Show />} />
      </Routes>
    </>
  );
};

export default App;
