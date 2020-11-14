import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

const Tips = () => {
  return (
    <div className='tips-page-container'>
      <div class='jumbotron jumbotron-fluid tips-jumbotron'>
        <div class='container'>
          <h1 class='display-4'>Tips 🍃</h1>
          <p class='lead'>Great tips for living a more eco friendly life.</p>
        </div>
      </div>
      <div className='container'>
        <Accordion defaultActiveKey='0'>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey='0'>
              Transportation
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='0'>
              <Card.Body>
                🍃 Reduce the amount of times you drive. Consider talking,
                taking public transportation, carpooling or riding a bike to
                your destination. This will reduce the amount of CO2 emitted and
                lessens traffic congestion.
                <br />
                🍃 If you are driving, avoid making unnecesarry braking and
                acceleration. Studies have found that aggressive driving can
                result in more fuel consumption compared to consistent and calm
                driving.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey='1'>
              Household
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='1'>
              <Card.Body>
                🍃 Consider using LED lightbulbs instead of the traditional
                ones. LED bulbs may cost more but they use a quarter of the
                energy of the incandescent ones and last up to 25 times longer.
                <br />
                🍃 Make sure you turn off all electronic devices when not in use
                and dont forget to turn off the light when leaving your room.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey='2'>
              Food
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='2'>
              <Card.Body>
                🍃 Reduce the amount of food you waste by planning your meals
                ahead of time, freezing any leftovers, and reusing any leftovers
                that could be left behind.
                <br />
                🍃 Consider eating more plant-based meals. Meat and dairy are
                responsible for 14.5 percent of manmade global greenhouse gas
                emissions. You can reduce your carbon footprint by consuming
                more vegetables, fruits, and grains.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey='3'>
              Shopping
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='3'>
              <Card.Body>
                🍃 Reduce the amount of stuff you purchase and consider using
                recycled items when possible.
                <br />
                🍃 If youre looking to purchase a new computer, try purchasing a
                laptop instead of a traditional desktop. Dekstops require more
                energy than laptops, making them less environmentally friendly.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey='4'>
              Clothing
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='4'>
              <Card.Body>
                🍃 Washing your clothes in cold water could save up to 500
                pounds of carbon dioxide. Using cold water instead of hot/warm
                water can also clean your clothes better.
                <br />
                🍃 Buying secondhand clothes can save the resources used to
                otherwise create a new clothing piece. Shopping for second hand
                items can also save you more money.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
};

export default Tips;
