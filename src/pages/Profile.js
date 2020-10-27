import React from 'react';
import Image from 'react-bootstrap/Image';
import defaultProfile from '../images/default-profile-img.jpg';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';


const Profile = () => {
  return (
    <div className='container mw-100'>
      <div className='row profile-container'>

        <div className='col m-3 profile-user-col'>
          <Card className='profile-card' border="primary">
            <Image className='profile-image' src={defaultProfile} roundedCircle/>
            <Card.Title>Maria Vasquez</Card.Title>
              <Card.Text className='profile-card-text'>
                Username: Mari123<br />
                School: Kendale Lakes Elementary <br />
                Grade: 5th
              </Card.Text>
              <Card.Text className='profile-card-text-btm'>
                Last Survey Taken: October 10th, 2020<br />
                Number of Survey's Taken: 12<br/>
                Average Score: 78 points<br />
                <div className='profile-center-container'>
                  <button
                    type='button'
                    className='btn btn-primary mt-3 py-2 px-5'
                  >
                    Take Survey
                  </button>
                </div>
              </Card.Text>
          </Card>
        </div>

        <div className='col m-3 profile-table-col'>
          <Card className='profile-card' border='primary'>
            <h3 className='mb-0'>Survey History</h3>
            <Table striped borderless hover className="mb-0">
              <thead>
                <tr>
                  <th>#</th><th>Date</th><th>Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12</td><td>October 10th 2020</td><td>90</td>
                </tr>
                <tr>
                  <td>11</td><td>October 2nd 2020</td><td>80</td>
                </tr>
                <tr>
                  <td>10</td><td>September 27th 2020</td><td>76</td>
                </tr>
                <tr>
                  <td>9</td><td>September 23rd 2020</td><td>71</td>
                </tr>
                <tr>
                  <td>8</td><td>September 20th 2020</td><td>64</td>
                </tr>
                <tr>
                  <td>7</td><td>September 15th 2020</td><td>52</td>
                </tr>
                <tr>
                  <td>6</td><td>September 12th 2020</td><td>57</td>
                </tr>
                <tr>
                  <td>5</td><td>September 10th 2020</td><td>58</td>
                </tr>
                <tr>
                  <td>4</td><td>September 3rd 2020</td><td>51</td>
                </tr>
                <tr>
                  <td>3</td><td>August 28th 2020</td><td>45</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default Profile;