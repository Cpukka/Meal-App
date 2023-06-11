
import './App.css';
import Favorites from './components/Favorites';
import Meals from './components/Meals';
import Modal from './components/Modal';
import Search from './components/Search';
import { useGlobalContext } from './Context';

function App() {
  const {showModal,favorites}=useGlobalContext()
  return (
    <main className="App">
   
    <h1 className='title'>This is a Meal App</h1>
    {favorites.length> 0 && <Favorites />}
    <Meals />
    {showModal && <Modal />}
    <Search />

    </main>
  );
}

export default App;
