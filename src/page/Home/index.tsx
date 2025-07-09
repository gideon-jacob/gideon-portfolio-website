import React, { useRef } from 'react';
import ProfileCard from '../../components/ProfileCard';
import MyInfoCard from '../../components/MyInfoCard';
import SkillsCard from '../../components/SkillsCard';
import ProjectCard from '../../components/ProjectCard';
import { v4 as uuidv4 } from 'uuid';
import './index.scss';

type Device = 'computer' | 'tablet' | 'mobile';

interface Project {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  warningInfo?: string;
  githubLinks: {
    client?: string;
    server?: string;
  } | {
    src: string;
  };
  originalAppLink?: string;
  liveLink?: string;
  technologies: string[];
  devices: Device[];
  isCompleted: boolean;
}

const device = {
  COMPUTER: 'computer' as const,
  TABLET: 'tablet' as const,
  MOBILE: 'mobile' as const,
}

const projects: Project[] = [
  {
    id: uuidv4(),
    title: 'PEC Student Hub',
    thumbnail: 'https://res.cloudinary.com/ddixkodsj/image/upload/t_Banner 16:9/v1751958535/pec-student-1_jwxji3.png',
    description: 'A student-centric web application designed to streamline academic management. It provides students with a centralized hub to view their timetable, track assignments, and monitor academic performance. Built with React and TypeScript, it offers a clean, responsive interface for a seamless user experience on any device.',
    githubLinks: {
      client: 'https://github.com/gideon-jacob/pec-student-client',
      server: 'https://github.com/gideon-jacob/pec-student-server'
    },
    liveLink: 'https://pecstudent.gideonjacob.in/',
    technologies: ['React', 'TypeScript', 'Vite', 'Sass', 'Node.js', 'Express', 'MongoDB', 'AWS', 'Docker', 'CI/CD', 'Git'],
    devices: [device.COMPUTER, device.TABLET, device.MOBILE],
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: 'Gideon Portfolio Website',
    thumbnail: 'https://res.cloudinary.com/ddixkodsj/image/upload/t_Banner%2016:9/v1751984298/portfolio_y1du0q.png',
    description: 'My personal portfolio, designed to showcase my projects and skills. This website is a modern single-page application built from the ground up using React, TypeScript, and Sass. It is fully responsive and the very platform you are using to view my work.',
    githubLinks: { src: 'https://github.com/gideon-jacob/gideon-portfolio-website'},
    liveLink: 'https://portfolio.gideonjacob.in/',
    technologies: ['React', 'TypeScript', 'Vite', 'Sass', 'Docker'],
    devices: [device.COMPUTER, device.TABLET, device.MOBILE],
    isCompleted: true,
  },
  { 
    id: uuidv4(),
    title: 'Marine Drone Mission Planner',
    thumbnail: 'https://res.cloudinary.com/ddixkodsj/image/upload/t_Banner%2016:9/v1751988031/aquatic-drone-web_ndfcew.png',
    description: 'A proof-of-concept web interface for planning and executing aquatic drone missions. It ensures operational safety and efficiency with intuitive geofencing, real-time path tracking, and a fail-safe "Return to Base" function.',
    warningInfo: 'This live demo is a simulation and is not connected to a real drone.',
    githubLinks: { src: 'https://github.com/gideon-jacob/aquaticDrone'},
    liveLink: 'https://aquaticdrone.gideonjacob.in/',
    technologies: ['React', 'TypeScript', 'Vite', 'Sass', 'Docker', 'Google Maps API'],
    devices: [device.COMPUTER],
    isCompleted: true,
  },
  {
    id: uuidv4(),
    title: 'NxtTalks Clone',
    thumbnail: 'https://res.cloudinary.com/ddixkodsj/image/upload/t_Banner%2016:9/v1751985163/nxt-talks_blpprr.png',
    description: 'A web clone of the NxtTalk application, built using fundamental web technologies. This project focuses on recreating the user interface and layout of the original application using HTML, CSS, and Sass, with custom styling on top of the Bootstrap framework.',
    githubLinks: { src: 'https://github.com/gideon-jacob/nxt-talk-web-clone' },
    originalAppLink: 'https://portal.ccbp.in/nxt-talks',
    liveLink: 'https://nxt-talks.gideonjacob.in/',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'Sass'],
    devices: [device.COMPUTER],
    isCompleted: true,
  },
  {
    id: uuidv4(),
    title: 'Youtube Clone',
    thumbnail: 'https://res.cloudinary.com/ddixkodsj/image/upload/t_Banner%2016:9/v1751985964/youtube_wxteqq.png',
    description: 'This is a web clone of the Youtube app.',
    githubLinks: { src: 'https://github.com/gideon-jacob/youtube-clone' },
    originalAppLink: 'https://www.youtube.com',
    liveLink: 'https://youtube.gideonjacob.in',
    technologies: ['HTML', 'Sass', 'npm'],
    devices: [device.COMPUTER, device.MOBILE],
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: 'Netflix Clone',
    thumbnail: 'https://res.cloudinary.com/ddixkodsj/image/upload/t_Banner%2016:9/v1751986411/netflix_wye7ds.png',
    description: 'This is a web clone of the Netflix app.',
    originalAppLink: 'https://www.netflix.com',
    liveLink: 'https://netflix.gideonjacob.in',
    githubLinks: { src: 'https://github.com/gideon-jacob/netflix-clone'},
    technologies: ['HTML', 'Sass', 'npm'],
    devices: [device.COMPUTER, device.MOBILE],
    isCompleted: false,
  },
];

const Home: React.FC = () => {
  const projectsRef = useRef<HTMLHeadingElement>(null);
  
  return (
    <div className='bg-container'>
      <div className='details-container'>
        <div className='section'>
          <ProfileCard />
          <MyInfoCard />
          <SkillsCard projectsRef={projectsRef as React.RefObject<HTMLHeadingElement>} />
        </div>
      </div>

      <div className='works-container'>
        {/* Projects Seciton */}
        <div className="section">
          <h2 ref={projectsRef}>My Projects</h2>
          <div className='card-container'>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                thumbnail={project.thumbnail}
                title={project.title}
                description={project.description}
                githubLinks={project.githubLinks}
                originalAppLink={project.originalAppLink}
                liveLink={project.liveLink}
                technologies={project.technologies}
                devices={project.devices}
                isCompleted={project.isCompleted}
                warningInfo={project.warningInfo}
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
