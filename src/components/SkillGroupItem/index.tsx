import React from "react";
import "./index.scss";

interface SkillGroupItemProps {
	title: string;
	skills: string[];
}

const SkillGroupItem: React.FC<SkillGroupItemProps> = ({ title, skills }) => {
	return (
		<div className="skill-group-item">
			<div className="skill-group-marker"></div>
			<div className="skill-group-content">
				<div className="card">
					<div className="card-header">
						<div className="card-header-title">{title}</div>
					</div>
					<div className="card-body">
						{skills.map((skill) => (
							<span key={skill} className="skill-badge">{skill}</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkillGroupItem;   