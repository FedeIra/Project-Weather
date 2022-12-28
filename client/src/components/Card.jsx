import React, { useState } from 'react';
import '../hoja-de-estilos/Card.css';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import * as images from '../Assets/climate/climate_images.js';
import DetailedCard from './DetailedCard.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getWeekClimate } from '../actions/index.js';

function Card({
  temp,
  max,
  min,
  name,
  img,
  onClose,
  humidity,
  lon,
  lat,
  date,
  description,
  wind,
  pressure,
}) {
  const [detailed, setDetailed] = useState(false);
  const dispatch = useDispatch();

  const week = useSelector((state) => state.week_weather);

  const handleClose = () => setDetailed(false);
  const handleShow = () => setDetailed(true);

  const searchWeek = ({ lon, lat }) => {
    dispatch(getWeekClimate({ lon, lat })).then(() => {
      handleShow();
    });
  };

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Container className="container.front">
            <h3
              style={{
                marginTop: '15px',
              }}
            >
              {name}
            </h3>
            <p> {`Today - ${date}`}</p>
            <img
              src={
                description === 'clear sky'
                  ? images.sunny
                  : description === 'few clouds'
                  ? images.cloudy
                  : description === 'scattered clouds'
                  ? images.cloudy
                  : description === 'broken clouds'
                  ? images.cloudy
                  : description === 'overcast clouds'
                  ? images.cloudy
                  : description === 'shower rain'
                  ? images.rainy
                  : description === 'rain'
                  ? images.rainy
                  : description === 'light rain'
                  ? images.rainy
                  : description === 'moderate rain'
                  ? images.rainy
                  : description === 'thunderstorm'
                  ? images.stormy
                  : description === 'snow'
                  ? images.snowy
                  : description === 'mist'
                  ? images.misty
                  : `http://openweathermap.org/img/wn/${img}@2x.png`
              }
              alt={'image_weather'}
              style={{
                height: '45%',
                width: '45%',
              }}
            />
            <p>
              {description
                .split(' ')
                .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
                .join(' ')}
            </p>
            <h2>{`${temp}°C`}</h2>
          </Container>
        </div>
        <div className="flip-card-back">
          <Row xs={2} md={2} lg={2}>
            <Col xs={7} md={7} lg={7}>
              <Container className="container.back">
                <Row xs={1} md={1} lg={1}>
                  <Col>
                    <p>{`Min: ${min}°C`}</p>
                  </Col>
                </Row>
                <Row xs={1} md={1} lg={1}>
                  <Col>
                    <p>{`Max: ${max}°C`}</p>
                  </Col>
                </Row>
                <Row xs={1} md={1} lg={1}>
                  <Col>
                    <p>{`Humidity: ${humidity}%`}</p>
                  </Col>
                </Row>
                <Row xs={1} md={1} lg={1}>
                  <Col>
                    <p>{`Wind: ${wind}`}</p>
                  </Col>
                </Row>
                <Row xs={1} md={1} lg={1}>
                  <Col>
                    <p>{`Pressure: ${pressure}`}</p>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col xs={1} md={1} lg={1}>
              <img
                src={`http://openweathermap.org/img/wn/${img}@2x.png`}
                alt={'image_weather'}
                style={{
                  paddingRight: '40px',
                }}
              />
            </Col>
          </Row>
          <Row className="button_row">
            <Col xs={6} md={6} lg={6}>
              <button
                onClick={() => {
                  searchWeek({ lon, lat });
                }}
              >
                <span className="circle" aria-hidden="true">
                  <span className="arrow_icon"></span>
                </span>
                <span className="button_text">View Week</span>
              </button>
            </Col>
            <Col xs={6} md={6} lg={6}>
              <button className="close_button" onClick={onClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-trash3-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                </svg>
              </button>
            </Col>
          </Row>
        </div>
      </div>
      <Modal
        show={detailed}
        onHide={handleClose}
        size="lg"
        centered
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        }}
      >
        <Modal.Body>
          <DetailedCard week={week} />
        </Modal.Body>
        <Modal.Header closeButton></Modal.Header>
      </Modal>
    </div>
  );
}

export default Card;
