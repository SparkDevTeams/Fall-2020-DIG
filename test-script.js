import React from 'react';
import ReactDOM from 'react-dom';
// import Navbar from './components/Header'
import Footer from './components/Footer';

class App extends React.Component {
  // Logic goes here
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <h1>Hello from react</h1>
        <Footer marginTop={0} test='hello' />
      </div>
    );
  }
}

ReactDOM.render(<App name='Yomi' />, document.getElementById('root'));
