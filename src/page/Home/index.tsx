import React from 'react';
import ProfileCard from '../../components/ProfileCard';
import MyInfoCard from '../../components/MyInfoCard';
import TechStackCard from '../../components/TechStackCard';
import './index.scss';

const Home : React.FC = () => { 
    return (
      <div className='bg-container'>
        <div className='details-container'>
          <ProfileCard />
          <MyInfoCard />
          <TechStackCard />
        </div>

        <div className='works-container'>
          {/* Projects Seciton */}
          <div className="section">
            <h2>My Projects</h2>
            <div className="card">card</div>
            <div className="card">card</div>
          </div>

          {/* Contributions Section */}
          <div className="section">
            <h2>Open Source Contributions</h2>
            <div className="card">card</div>
          </div>
        </div>
      </div>
    );
}

export default Home
