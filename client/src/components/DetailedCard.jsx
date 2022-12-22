import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const DetailedCard = ({ week }) => {
  return (
    <div>
      {/* make one column per day for 4 days: */}
      <Container>
        <Row>
          <Col>
            <p>Day 1</p>
            {/* <p>{week.first_day}</p> */}
          </Col>
          {/* divider: */}

          <Col>
            <p>Day 2</p>
            {/* <p>{week.second_day}</p> */}
          </Col>
          <Col>
            <p>Day 3</p>
            {/* <p>{week.third_day}</p> */}
          </Col>
          <Col>
            <p>Day 4</p>
            {/* <p>{week.fourth_day}</p> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetailedCard;
