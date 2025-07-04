import React from 'react';
import { FaMobileAlt, FaTabletAlt, FaLaptop, FaGithub, FaGlobe } from 'react-icons/fa';
import './index.scss';

interface ProjectCardProps {
  thumbnail: string;
  description: string;
  githubLink: string;
  liveLink?: string;
  technologies: string[];
  devices: ('mobile' | 'tablet' | 'computer')[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  thumbnail,
  description,
  githubLink,
  liveLink,
  technologies,
  devices,
}) => {
  const getDeviceIcon = (device: 'mobile' | 'tablet' | 'computer') => {
    switch (device) {
      case 'mobile':
        return <FaMobileAlt className='icon' />;
      case 'tablet':
        return <FaTabletAlt className='icon' />;
      case 'computer':
        return <FaLaptop className='icon' />;
      default:
        return null;
    }
  };

  const formatDeviceName = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <div className="project-card">
      <div className="project-card-thumbnail">
        <img src={thumbnail} alt="Project thumbnail" loading="lazy" />
      </div>

      <div className="project-card-body">
        <p className="project-card-description">{description}</p>

        <div className="project-card-badges">
          {devices.map((device) => (
            <span key={device} className={`badge device-badge ${device}`}>
              {getDeviceIcon(device)} {formatDeviceName(device)}{devices.length === 1 ? ' Only' : ''}
            </span>
          ))}
        </div>
        
        <div className="project-card-badges">
          {technologies.map((tech) => (
            <span key={tech} className="badge tech-badge">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-card-links-container">
          <button onClick={() => window.open(githubLink, '_blank')}>
            <FaGithub className='icon' />
            GitHub
          </button>
          {liveLink && (
            <button onClick={() => window.open(liveLink, '_blank')}>
              <FaGlobe className='icon' />
              Live Demo
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
