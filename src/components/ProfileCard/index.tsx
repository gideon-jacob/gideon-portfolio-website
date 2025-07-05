import React from "react";
import './index.scss'

const avatarUrl = "https://res.cloudinary.com/ddixkodsj/image/upload/t_Profile/v1751614802/LinkedIn3.2_xfdmwg.jpg";
const resumeUrl = "https://d78lukmxqzxnm.cloudfront.net/GideonJacob_R%C3%A9sum%C3%A9.pdf";

const ProfileCard: React.FC = () => {
	return (
		<div className="profile-card">
			<div
				style={{
					backgroundImage: `url(${avatarUrl})`
				}}
				className="avatar"
				aria-label="Profile photo of Gideon Jacob"
				role="img"
			/>

			<div className="profile-info">
				<h1>Gideon Jacob S</h1>
				<p>Aspiring Software Developer | Highly Collaborative | Actively Learning Advanced DSA & System Design</p>
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