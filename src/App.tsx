import { Component } from 'react'
import ProfileCard from './components/ProfileCard';
import './App.sass'

class App extends Component {
  render() {
    return (
      <div className='bg-container'>
        <div className='details-container'>
          <ProfileCard />
          <div className="card">card</div>
        </div>

        <div className='works-container'>
          {/* Projects Seciton */}
          <div className="section">
            <div className="card">card</div>
          </div>

          {/* Contributions Section */}
          <div className="section">
            <div className="card">card</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App
