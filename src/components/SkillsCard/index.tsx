import React, { useState } from "react";
import "./index.scss";
import SkillGroupItem from "../SkillGroupItem";

interface SkillsCardProps {
    projectsRef: React.RefObject<HTMLHeadingElement>;
}

const SkillsCard: React.FC<SkillsCardProps> = ({ projectsRef }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="skills-card-container">
            <h2>Skills</h2>

            <div className="skill-group-list" style={{
                "--max-height": isExpanded ? "none" : "280px",
                "--overflow-y": isExpanded ? "visible" : "hidden"
            } as React.CSSProperties}>

                <SkillGroupItem
                    title="Frontend"
                    skills={["HTML", "CSS", "SASS", "Bootstrap", "JavaScript", "TypeScript", "React JS"]}
                />

                <SkillGroupItem
                    title="Backend"
                    skills={["Node.js", "Express.js", "TypeScript", "Python", "Java", "Spring Boot"]}
                />

                <SkillGroupItem
                    title="Database"
                    skills={["SQL", "MongoDB", "PostgreSQL"]}
                />

                <SkillGroupItem
                    title="DevOps"
                    skills={["Git", "GitHub", "Docker", "CI/CD", "AWS", "Linux"]}
                />

                <SkillGroupItem
                    title="AWS Services"
                    skills={["EC2", "S3", "ECS", "Lambda", "Amplify", "API Gateway", "CloudFront", "Route 53", "CloudWatch"]}
                />

                <SkillGroupItem
                    title="Core"
                    skills={["C++", "Data Structures", "Algorithms", "Object-Oriented Programming", "Asynchronous Programming", "Concurrency"]}
                />

                <SkillGroupItem
                    title="Tools"
                    skills={["Git", "GitHub", "Cursor (VS Code)", "Postman", "Docker", "Vite"]}
                />
            </div>

            <div className="view-all-button-container">
                <button 
                    className="view-all-button"
                    onClick={() => {
                        if (isExpanded) {
                            setTimeout(() => {
                                projectsRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
                            }, 10);
                        }
                        setIsExpanded(!isExpanded);
                    }}
                >
                    <span className="view-all-button-text">
                        {isExpanded ? "\u00AB" : "\u00BB"}
                    </span>
                    {isExpanded ? "view less" : "view all"}
                </button>
            </div>
        </div>
    );
};

export default SkillsCard;   