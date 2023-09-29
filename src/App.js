import './App.css';
import { useEffect, useState } from 'react';
import StoreBox from './components/StoreBox/StoreBox';
import AppFooter from './components/AppFooter/AppFooter';
import AppHeader from './components/AppHeader/AppHeader';
import Loading from './components/Loading/Loading';
function App() {
  const [storesList, setStoresList] = useState([])
  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbwByZUhuyI7rCXvz7VsZ8Jkwyor4w-0oaZNcNtZuM2Cj_U3VJV_4ctVJeuUj-7pn7g-/exec')
      .then((response) => response.json())
      .then((data) => {
        setStoresList(data)
      })

  }, []);
  return (

    <div className="App">
      <AppHeader />
      <div className='main'>
        {storesList.length !== 0 ? storesList.map(store => {
          return <StoreBox name={store.Name} description={store.Description} openingTimes={store.OpeningTimes} phoneNumber={store.Phone} key={store.Name} />
        }) : <Loading />}

      </div>
      <AppFooter />


    </div>

  );
}

export default App;
