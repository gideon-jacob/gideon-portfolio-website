import React, { useState } from 'react';
import { FaMobileAlt, FaTabletAlt, FaLaptop, FaGithub, FaGlobe, FaInfoCircle } from 'react-icons/fa';
import './index.scss';

interface ProjectCardProps {
  thumbnail: string;
  title: string;
  description: string;
  warningInfo?: string;
  githubLinks: {
    client?: string;
    server?: string;
  } | { src: string; };
  originalAppLink?: string;
  liveLink?: string;
  technologies: string[];
  devices: ('mobile' | 'tablet' | 'computer')[];
  isCompleted: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  thumbnail,
  title,
  description,
  warningInfo,
  githubLinks,
  originalAppLink,
  liveLink,
  technologies,
  devices,
  isCompleted,
}) => {
  const [showAllTechs, setShowAllTechs] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const VISIBLE_TECHS_COUNT = 3;
  const DESCRIPTION_CHAR_LIMIT = 150;

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

  const visibleTechs = showAllTechs ? technologies : technologies.slice(0, VISIBLE_TECHS_COUNT);
  const isDescriptionLong = description.length > DESCRIPTION_CHAR_LIMIT;
  const visibleDescription = showFullDescription ? `${description} ` : `${description.slice(0, DESCRIPTION_CHAR_LIMIT)}... `;

  return (
    <div className="project-card">
      {!isCompleted && (
        <span className="project-card-status">
          In Progress
        </span>
      )}
      <div className="project-card-thumbnail">
        <img src={thumbnail} alt="Project thumbnail" loading="lazy" />
      </div>

      <div className="project-card-body">
        <div className="project-card-title-description-container">
          <h3 className="project-card-title">{title}</h3>
          <p className="project-card-description">
            {isDescriptionLong ? visibleDescription : description}
            {isDescriptionLong && (
              <span className="description-toggle" onClick={() => setShowFullDescription(!showFullDescription)}>
                {showFullDescription ? 'Show less' : 'Show more'}
              </span>
            )}
          </p>

          {warningInfo && (
            <p className="project-card-warning-info">
              <FaInfoCircle className='icon' />
              {warningInfo}
            </p>
          )}

        </div>

        <div className="project-card-badges">
          {devices.map((device) => (
            <span key={device} className={`badge device-badge ${device}`}>
              {getDeviceIcon(device)} {formatDeviceName(device)}{devices.length === 1 ? ' Only' : ''}
            </span>
          ))}
        </div>

        <div className="project-card-badges">
          {visibleTechs.map((tech) => (
            <span key={tech} className="badge tech-badge">
              {tech}
            </span>
          ))}
          {technologies.length > VISIBLE_TECHS_COUNT && (
            <span className="tech-badge-toggle" onClick={() => setShowAllTechs(!showAllTechs)}>
              {showAllTechs ? 'Show less' : 'Show all'}
            </span>
          )}
        </div>

        <div className="project-card-links-container">
          {'client' in githubLinks && githubLinks.client && (
            <button onClick={() => window.open(githubLinks.client, '_blank')}>
              <FaGithub className='icon' />
              <span className='button-text'>{'Frontend'}</span>
            </button>
          )}
          {'server' in githubLinks && githubLinks.server && (
            <button onClick={() => window.open(githubLinks.server, '_blank')}>
              <FaGithub className='icon' />
              <span className='button-text'>{'Backend'}</span>
            </button>
          )}
          {'src' in githubLinks && githubLinks.src && (
            <button onClick={() => window.open(githubLinks.src, '_blank')}>
              <FaGithub className='icon' />
              <span className='button-text'>{'GitHub'}</span>
            </button>
          )}
          {originalAppLink && (
            <button onClick={() => window.open(originalAppLink, '_blank')}>
              <FaGlobe className='icon' />
              <span className='button-text'>{'Official Site'}</span>
            </button>
          )}
          {liveLink && !originalAppLink && (
            <button onClick={() => window.open(liveLink, '_blank')}>
              <FaGlobe className='icon' />
              <span className='button-text'>{'Live Site'}</span>
            </button>
          )}
          {liveLink && originalAppLink && (
            <button onClick={() => window.open(liveLink, '_blank')}>
              <FaGlobe className='icon' />
              <span className='button-text'>{'My Demo (Clone)'}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
