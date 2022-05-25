import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Recommendation.css";
import re1 from '../../../Assets/Recommendation/re1.jpg'
import re2 from '../../../Assets/Recommendation/re2.jpg'
import re3 from '../../../Assets/Recommendation/re3.jpg'

const Recommendation = () => {
    return (
        <div className="recommendation">
      <h1>Our recommendations</h1>
      <div className="recommendation-container">
          <Col className="p-0 m-2">
            <Card>
              <Card.Img variant="top" src={re1} />
              <Card.Body>
                <Card.Title className='fs-3'>Best overall</Card.Title>
                <Card.Text className="fs-4">
                Samsung’s QLED TVs are highly rated—the Q90T was our best overall pick last year, and we like the manufacturer’s Neo QLED (“New QLED”) TVs make the QN90A our top pick for 2022.
                </Card.Text>
              </Card.Body>
              <Link to={'/'} className="link">Explore Offers</Link>
            </Card>
          </Col>
          <Col className="p-0 m-2">
            <Card>
              <Card.Img variant="top" src={re2} />
              <Card.Body>
                <Card.Title className='fs-3'>Best picture</Card.Title>
                <Card.Text className="fs-4">
                QLED displays are a Samsung technology that uses a layer of quantum dots with a LED backlight and LCD screen. Neo QLED improves on its by adding mini-LEDs and even smaller nanoparticles.
                </Card.Text>
              </Card.Body>
              <Link to={'/'} className="link">Explore Offers</Link>
            </Card>
          </Col>
          <Col className="p-0 m-2">
            <Card>
              <Card.Img variant="top" src={re3} />
              <Card.Body>
                <Card.Title>Best under $1,000</Card.Title>
                <Card.Text className="fs-4">
                Add to that AI upscaling from HD to 4K, NextGen TV (ATSC 3.0) compatibility (so you can tune into free 4K broadcasts), and speakers all around the TV plus Object Tracking Sound+ (OTS+).
                </Card.Text>
              </Card.Body>
              <Link to={'/'} className="link">Explore Offers</Link>
            </Card>
          </Col>
      </div>
    </div>
    );
};

export default Recommendation;