import React from "react";
import './index.scss'

// TODO 1: Replace the following URLs with your own avatar and resume URLs
const avatarUrl = "https://media.licdn.com/dms/image/v2/D4D03AQG2KWjigyc7QA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718249729153?e=1743638400&v=beta&t=zgsnCkSh6zAa77aQ4hAVb9uGTz8gdms05-xkUzw04XA";
const resumeUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

const ProfileCard: React.FC = () => {
    return (
        <div className="profile-card">
            <img
                src={avatarUrl} 
                alt="avatar"
                loading="lazy"
            />

            <div>
                <h1>Gideon Jacob</h1>
                <p>Full Stack Developer | Business Enthusiast | Expertise in React, Docker and AWS</p>
            </div>

            <a
                href={resumeUrl} 
                target="_blank"
                className="btn btn-outline btn-sm text-xs mt-6 opacity-50"
                download
                rel="noreferrer"
            >
                Download Resume
            </a>
        </div>
    );
}

export default ProfileCard