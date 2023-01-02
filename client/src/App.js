import React from 'react';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  getClimate,
  eliminateCity,
  dragAndDropCities,
} from './actions/index.js';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import './App.css';
import Footer from './components/Footer.jsx';

function App() {
  const dispatch = useDispatch();

  const notifyFailure = () =>
    toast.error('City not found', {
      position: 'top-right',
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifySuccess = () =>
    toast.success('City added', {
      position: 'top-right',
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifyRepeated = () =>
    toast.warn('City already added', {
      position: 'top-right',
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const cities_weather = useSelector((state) => state.cities_weather);

  function onSearch(ciudad) {
    if (
      cities_weather.some((c) => c.name.toLowerCase() === ciudad.toLowerCase())
    ) {
      notifyRepeated();
      return;
    }
    dispatch(getClimate(ciudad)).then(
      (result) => {
        notifySuccess();
      },
      (error) => {
        notifyFailure();
      }
    );
  }

  function onClose(id) {
    dispatch(eliminateCity(id));
  }

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(cities_weather);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    dispatch(dragAndDropCities(items));
  };

  return (
    <div>
      <div className="App">
        <Nav onSearch={onSearch} />
        <Cards
          cities={cities_weather}
          onClose={onClose}
          handleOnDragEnd={handleOnDragEnd}
        />
        <ToastContainer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
