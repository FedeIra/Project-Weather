import React, { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';

function App() {
  /* ciudades empieza como arreglo vacío */
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

  /* Se puede usar axios pero tene que importarlo. */
  function onSearch(ciudad) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    ) /* hace el pedido de fetch. El fetch no lo tenes que importar pq es parte de JS */
      .then((r) => r.json()) /* transforma a jason la respuesta */
      .then((recurso) => {
        if (cities.find((c) => c.id === recurso.id)) {
          alert('You have already selected this city.');
          return;
        }

        if (recurso.main !== undefined) {
          /* si existe se crea un objeto con su info. Formatea sus datos y luego lo guarda en las ciudades. */
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
          setCities((previousCities) => [
            ...previousCities,
            ciudad,
          ]); /* agrega la ciudad formateada al arreglo de ciudades */
        } else {
          alert('Ciudad no encontrada');
        }
      });
  }

  function onClose(id) {
    setCities(
      (previousCities) =>
        previousCities.filter(
          (ciudad) => ciudad.id !== id
        ) /* tiene que recibir lo q se llama el estado anterior. Le podes poner cualquier nombre (previousCities). Cuando hay que identificar algo, lo mejor es ir por su id (si es q lo tiene) */
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
      {/* le tengo que hacer llegar la función onSearch a Nav para que luego Nav se lo pase a SearchBar. Las propiedades y funciones pasan de padre a hijo para que las puedan usar. Luego la función nieto o lo que sea puede usar la función modificando el estado del componente padre. */}
      <Cards
        cities={cities}
        onClose={onClose}
        handleOnDragEnd={handleOnDragEnd}
      />
      {/* cards recibe un array de ciudades que lo tenemos en cities =  const [cities, setCities] = useState([]);*/}
    </div>
  );
}

export default App;
