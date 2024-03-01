import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Search from './pages/Search/Search';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Search/>} />
      </Routes>
    </>
  );
};

export default App;
