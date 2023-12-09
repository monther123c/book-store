import './App.css';
import { Route, Routes } from 'react-router-dom';
import BookDetails from './components/BookDetails';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Favorites  from './components/Favorites';
import Settings from './components/Settings'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

function App() {
  return (
    <div className="App">
        <I18nextProvider i18n={i18n}>
      <Navbar/>
      <Routes>
     <Route path='/' element={<BookList/>} />
     <Route path='/books/:id' element={<BookDetails/>} />
     <Route path='/favorites' element={<Favorites/>} />
     <Route path='/settings' element={<Settings/>} />
      </Routes>
      <Footer/>
      </I18nextProvider>
 
    </div>
  );
}

export default App;
