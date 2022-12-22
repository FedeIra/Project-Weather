import React from 'react';
import '../hoja-de-estilos/Card.css';
import { Container, Row, Col } from 'react-bootstrap';

function Card({
  temp,
  max,
  min,
  name,
  img,
  onClose,
  handleOnDragEnd,
  humidity,
  lon,
  lat,
  date,
  description,
  wind,
  pressure,
}) {
  console.log(description);
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h3>{name}</h3>
          <p> {`Today - ${date}`}</p>
          <img
            src={`http://openweathermap.org/img/wn/${img}@2x.png`}
            alt={'image_weather'}
          />
          <p>{description}</p>
          <h2>{`${temp}°C`}</h2>
        </div>

        <div className="flip-card-back">
          <Container fluid="md">
            <Row xs={1} md={1} lg={1}>
              <Col>
                <button onClick={onClose}>X</button>
              </Col>
            </Row>
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
            <Row xs={1} md={1} lg={1}>
              <Col>
                <button>
                  <span className="circle" aria-hidden="true">
                    <span className="arrow_icon"></span>
                  </span>
                  <span className="button_text">View Week</span>
                </button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Card;
