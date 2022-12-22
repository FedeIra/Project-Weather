import React, { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';

function App() {
  const [cities, setCities] = useState([]);
  let apiKey = '4ae2636d8dfbdc3044bede63951a019b';

  useEffect(() => {
    const citiesSaved = JSON.parse(window.localStorage.getItem('My cities'));
    if (citiesSaved) {
      setCities(citiesSaved);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('My cities', JSON.stringify(cities));
  }, [cities]);
  function onSearch(ciudad) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (cities.find((c) => c.id === recurso.id)) {
          alert('You have already selected this city.');
          return;
        }
        if (recurso.main !== undefined) {
          const ciudad = {
            temp: Math.round(recurso.main.temp),
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            name: recurso.name,
            weather: recurso.weather[0].main,
            humidity: recurso.main.humidity,
            lon: recurso.coord.lon,
            lat: recurso.coord.lat,
            description: recurso.weather[0].description,
            wind: recurso.wind.speed,
            pressure: recurso.main.pressure,
          };
          setCities((previousCities) => [...previousCities, ciudad]);
        } else {
          alert('Ciudad no encontrada');
        }
      });
  }

  function onClose(id) {
    setCities((previousCities) =>
      previousCities.filter((ciudad) => ciudad.id !== id)
    );
  }

  // Move city:
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(cities);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setCities(items);
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards
        cities={cities}
        onClose={onClose}
        handleOnDragEnd={handleOnDragEnd}
      />
    </div>
  );
}

export default App;
