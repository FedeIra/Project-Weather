import React from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  getClimate,
  eliminateCity,
  dragAndDropCities,
} from './actions/index.js';

function App() {
  const dispatch = useDispatch();

  const cities_weather = useSelector((state) => state.cities_weather);

  function onSearch(ciudad) {
    if (cities_weather.some((city) => city.name === ciudad)) {
      alert('City already added');
    }
    dispatch(getClimate(ciudad));
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
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards
        cities={cities_weather}
        onClose={onClose}
        handleOnDragEnd={handleOnDragEnd}
      />
    </div>
  );
}

export default App;
