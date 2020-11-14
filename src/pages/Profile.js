import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { useAuth } from '../states/userState';
import { firestore } from '../assets/firebase';

import defaultProfileImage from '../images/default-profile-img.jpg';

const Profile = () => {
  const { logout, user } = useAuth();
  const redirect = useHistory();
  const usersCollection = firestore.collection('users');

  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [last, setLast] = useState("");
  const [avg, setAvg] = useState(0);
  const [scores, setScores] = useState(null);

  function handleLogOut() {
    logout();
    redirect.push('/');
  }

  useEffect(() => {
    usersCollection
      .doc(user.uid)
      .get()
      .then(function (doc) {
        if(doc.data().scores){

          let arr = doc.data().scores.reverse();
          setScores(arr);
          setLast(month[arr[0].createdAt.toDate().getMonth()]
                + " " + arr[0].createdAt.toDate().getDay()
               + ", " + arr[0].createdAt.toDate().getFullYear());
          var sum = 0;
          for(var i = 0; i < arr.length; i++){
            sum = sum + arr[i].score;
          }
          setAvg(sum/arr.length);
        }
        else {
          setScores(undefined);
          setLast("N/A")
        }

        setName(doc.data().firstName + " " + doc.data().lastName);
        setSchool(doc.data().school);
      });
  }, []);

  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  const htmlOfScores = (scores != null && scores != undefined) ? scores.slice(0,10).map((score, i) => {
    return (
      <tr key={i}>
        <td>{scores.length - i}</td>
        <td>{month[score.createdAt.toDate().getMonth()]} {score.createdAt.toDate().getDay()}, {score.createdAt.toDate().getFullYear()}</td>
        <td>{score.score}</td>
      </tr>
    );
  }) : ("");

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
            <Card.Title>{name}</Card.Title>
            <button
              type='button'
              className='btn btn-primary py-2 px-5 mb-3'
              onClick={handleLogOut}
            >
              Log Out
            </button>
            <Card.Text className='profile-card-text'>
              Email: {user.email}
              <br />
              School: {school} <br />
            </Card.Text>
            <Card.Text className='profile-card-text'>
              Last Survey Taken: {last}
              <br />
              Number of Survey's Taken: {scores ? scores.length : 0}
              <br />
              Average Score: {avg} points
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
            {scores &&  <Table striped borderless hover className='mb-0'>
                          <thead><tr><th>#</th><th>Date</th><th>Score</th></tr></thead>
                          <tbody>
                            {htmlOfScores}
                          </tbody>
                        </Table>}
            {scores == undefined && <h1>No scores</h1>}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
