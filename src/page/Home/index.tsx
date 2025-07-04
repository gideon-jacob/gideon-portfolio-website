import React from 'react';
import ProfileCard from '../../components/ProfileCard';
import MyInfoCard from '../../components/MyInfoCard';
import SkillsCard from '../../components/SkillsCard';
import ProjectCard from '../../components/ProjectCard';
import { v4 as uuidv4 } from 'uuid';
import './index.scss';

type Device = 'computer' | 'tablet' | 'mobile';

interface Project {
  id: string;
  thumbnail: string;
  description: string;
  githubLink: string;
  liveLink?: string;
  technologies: string[];
  devices: Device[];
}

const device = {
  COMPUTER: 'computer' as const,
  TABLET: 'tablet' as const,
  MOBILE: 'mobile' as const,
}

const projects: Project[] = [
  {
    id: uuidv4(),
    thumbnail: 'https://images.indianexpress.com/2023/11/anthropic-claude-featured.jpg',
    description: 'PEC Student Hub is a student-centric application designed to provide a seamless and user-friendly interface for managing academic information.',
    githubLink: 'https://github.com/gideonkoh/gideon-portfolio-website',
    liveLink: 'https://gideon-koh.vercel.app/',
    technologies: ['React', 'TypeScript', 'Vite', 'Sass'],
    devices: [device.COMPUTER],
  },
  {
    id: uuidv4(),
    thumbnail: 'https://images.indianexpress.com/2023/11/anthropic-claude-featured.jpg',
    description: 'PEC Student Hub is a student-centric application designed to provide a seamless and user-friendly interface for managing academic information.',
    githubLink: 'https://github.com/gideonkoh/gideon-portfolio-website',
    liveLink: 'https://gideon-koh.vercel.app/',
    technologies: ['React', 'TypeScript', 'Vite', 'Sass'],
    devices: [device.MOBILE],
  },
  { 
    id: uuidv4(),
    thumbnail: 'https://images.indianexpress.com/2023/11/anthropic-claude-featured.jpg',
    description: 'PEC Student Hub is a student-centric application designed to provide a seamless and user-friendly interface for managing academic information.',
    githubLink: 'https://github.com/gideonkoh/gideon-portfolio-website',
    liveLink: 'https://gideon-koh.vercel.app/',
    technologies: ['React', 'TypeScript', 'Vite', 'Sass'],
    devices: [device.COMPUTER, device.TABLET, device.MOBILE],
  },
  {
    id: uuidv4(),
    thumbnail: 'https://miro.medium.com/v2/resize:fit:1200/0*UXRL6AmR6mpIMen_.jpg',
    description: 'This is another sample project description.',
    githubLink: 'https://github.com/gideonkoh/gideon-portfolio-website',
    technologies: ['React', 'TypeScript', 'Vite', 'Sass'],
    devices: [device.COMPUTER, device.TABLET, device.MOBILE],
  },
];

const Home: React.FC = () => {
  return (
    <div className='bg-container'>
      <div className='details-container'>
        <div className='section'>
          <ProfileCard />
          <MyInfoCard />
          <SkillsCard />
        </div>
      </div>

      <div className='works-container'>
        {/* Projects Seciton */}
        <div className="section">
          <h2>My Projects</h2>
          <div className='card-container'>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                thumbnail={project.thumbnail}
                description={project.description}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
                technologies={project.technologies}
                devices={project.devices}
              />
            ))}
          </div>
        </div>

        {/* Contributions Section */}
        <div className="section">
          <h2>Open Source Contributions</h2>
          <div className='card-container'>
            <div className="card text-grey">Coming Soon...</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
