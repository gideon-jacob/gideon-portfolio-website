import React from 'react';
import ProfileCard from '../../components/ProfileCard';
import MyInfoCard from '../../components/MyInfoCard';
import './index.scss';

const Home : React.FC = () => { 
    return (
      <div className='bg-container'>
        <div className='details-container'>
          <ProfileCard />
          <MyInfoCard />
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

export default Home
