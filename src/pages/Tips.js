import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar';

const Tips = () => {
  return (
    <div>
      <div className='tips-container'>
        <div className='transportation-tips'>
          <div className='form-group mb-2'>
            <h1 className='mb-2 text-center font-weight-bold'>Tips</h1>

            <h2 className='transportation-tips'>Transportation</h2>
            <div className='answer'>
              {' '}
              🍃 Reduce the amount of times you drive. Consider talking, taking
              public transportation, carpooling or riding a bike to your
              destination. This will reduce the amount of CO2 emitted and
              lessens traffic congestion.
            </div>
            <div className='answer'>
              {' '}
              🍃 If you are driving, avoid making unnecesarry braking and
              acceleration. Studies have found that aggressive driving can
              result in more fuel consumption compared to consistent and calm
              driving.
            </div>
            <br />

            <h2 className='home-tips'>Household</h2>
            <div className='answer'>
              {' '}
              🍃 Consider using LED lightbulbs instead of the traditional ones.
              LED bulbs may cost more but they use a quarter of the energy of
              the incandescent ones and last up to 25 times longer.
            </div>
            <div className='answer'>
              {' '}
              🍃 Make sure you turn off all electronic devices when not in use
              and dont forget to turn off the light when leaving your room.
            </div>
            <br />

            <h2 className='food-tips'>Food</h2>
            <div className='answer'>
              {' '}
              🍃 Reduce the amount of food you waste by planning your meals
              ahead of time, freezing any leftovers, and reusing any leftovers
              that could be left behind.
            </div>
            <div className='answer'>
              {' '}
              🍃 Consider eating more plant-based meals. Meat and dairy are
              responsible for 14.5 percent of manmade global greenhouse gas
              emissions. You can reduce your carbon footprint by consuming more
              vegetables, fruits, and grains.
            </div>
            <br />

            <h2 className='shopping-tips'>Shopping</h2>
            <div className='answer'>
              {' '}
              🍃 Reduce the amount of stuff you purchase and consider using
              recycled items when possible.
            </div>
            <div className='answer'>
              {' '}
              🍃 If youre looking to purchase a new computer, try purchasing a
              laptop instead of a traditional desktop. Dekstops require more
              energy than laptops, making them less environmentally friendly.
            </div>
            <br />

            <h2 className='clothing-tips'>Clothing</h2>
            <div className='answer'>
              {' '}
              🍃 Washing your clothes in cold water could save up to 500 pounds
              of carbon dioxide. Using cold water instead of hot/warm water can
              also clean your clothes better.
            </div>
            <div class='class'>
              {' '}
              🍃 Buying secondhand clothes can save the resources used to
              otherwise create a new clothing piece. Shopping for second hand
              items can also save you more money.
            </div>
            <br />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tips;
