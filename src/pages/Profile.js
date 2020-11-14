import React from 'react';
import { useHistory } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { useAuth } from '../states/userState';
import { firestore } from '../assets/firebase'

import defaultProfileImage from '../images/default-profile-img.jpg';

const Profile = () => {
  const { logout } = useAuth();
  const redirect = useHistory();
  const usersCollection = firestore.collection('users');

  function handleLogOut() {
    logout();
    redirect.push('/');
  }

  function getData(){
    usersCollection.doc("test1234").get().then(function(doc) {
      var scores = doc.data().scores;
      if(scores)
      {
        scores.reverse();
        console.log(scores);
      }
      else
      {
        console.log("Empty");
      }});
  }

  return (
    <div className='container mw-100'>
      <div className='row profile-container'>
        <div className='col m-3 profile-user-col'>
          <Card className='profile-card' border='primary'>
            <Image
              className='profile-image'
              src={defaultProfileImage}
              roundedCircle
            />
            <Card.Title>Maria Vasquez</Card.Title>
            <button
              type='button'
              className='btn btn-primary py-2 px-5 mb-3'
              onClick={handleLogOut}
            >
              Log Out
            </button>
            <Card.Text className='profile-card-text'>
              Email: Mari123@gmail.com
              <br />
              School: Kendale Lakes Elementary <br />
            </Card.Text>
            <Card.Text className='profile-card-text'>
              Last Survey Taken: October 10th, 2020
              <br />
              Number of Survey's Taken: 12
              <br />
              Average Score: 78 points
              <br />
            </Card.Text>
            <div className='profile-center-container'>
              <button type='button' className='btn btn-primary py-2 px-5 mb-3'>
                Take Survey
              </button>
            </div>
          </Card>
        </div>

        <div className='col m-3 profile-table-col'>
          <Card className='profile-card' border='primary'>
            <h3 className='mb-0'>Survey History</h3>
            {getData() && <div>Hello</div>}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
