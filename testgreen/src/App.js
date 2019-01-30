import React, { Component } from 'react';
import Landing from './LandingPage';
class App extends Component {
  render() {
    return (
      <div className='App' style={{margin: '0 auto', maxWidth: '1000px'}}>
        Testing the GREENSOCK
        <img src="https://sallysbakingaddiction.com/wp-content/uploads/2018/07/best-black-bean-burgers-2.jpg" alt="burger" style={{height: '300px', }}/>
        <Landing />
      </div>
    );
  }
}
export default App;
