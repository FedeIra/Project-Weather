import React from 'react';
import Card from './Card';
import '../hoja-de-estilos/Cards.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function Cards({ cities, onClose, handleOnDragEnd }) {
  return (
    <div
      className="allCards"
      style={{
        marginTop: '130px',
      }}
    >
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="cities_list">
          {(provided) => (
            <div
              className="cities_list"
              style={{
                listStyleType: 'none',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',

                gap: '1rem',
              }}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {cities.map((ciudad, index) => (
                <Draggable
                  key={ciudad.id}
                  draggableId={ciudad.name}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Card
                        temp={ciudad.temp}
                        max={ciudad.max}
                        min={ciudad.min}
                        name={ciudad.name}
                        img={ciudad.img}
                        onClose={() => onClose(ciudad.id)}
                        handleOnDragEnd={() => handleOnDragEnd()}
                        key={ciudad.id}
                        humidity={ciudad.humidity}
                        lon={ciudad.lon}
                        lat={ciudad.lat}
                        description={ciudad.description}
                        date={new Date().toLocaleDateString('en-US', {
                          weekday: 'long',
                        })}
                        wind={ciudad.wind
                          .toString()
                          .replace('.', ',')
                          .concat(' km/hr')
                          .replace(',', '.')}
                        pressure={ciudad.pressure.toString().concat(' hPa')}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default Cards;
