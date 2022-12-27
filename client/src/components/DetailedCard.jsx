import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../hoja-de-estilos/DetailedCard.css';

const DetailedCard = ({ week }) => {
  return (
    <div className="detailed_card">
      <Container className="container_detail">
        <Row className="row">
          <Col className="columns">
            <h4>{week.four_days[0].day}</h4>
            <img src={week.four_days[0].icon} alt="icono del clima" />
            <h5>{`${week.four_days[0].temp}°C`}</h5>
          </Col>
          <Col className="columns">
            <h4>{week.four_days[1].day}</h4>
            <img src={week.four_days[1].icon} alt="icono del clima" />
            <h5>{`${week.four_days[1].temp}°C`}</h5>
          </Col>
          <Col className="columns">
            <h4>{week.four_days[2].day}</h4>
            <img src={week.four_days[2].icon} alt="icono del clima" />
            <h5>{`${week.four_days[2].temp}°C`}</h5>
          </Col>
          <Col className="columns">
            <h4>{week.four_days[3].day}</h4>
            <img src={week.four_days[3].icon} alt="icono del clima" />
            <h5>{`${week.four_days[3].temp}°C`}</h5>
          </Col>
          <Col className="last_column">
            <h4>{week.four_days[4].day}</h4>
            <img src={week.four_days[4].icon} alt="icono del clima" />
            <h5>{`${week.four_days[4].temp}°C`}</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetailedCard;
