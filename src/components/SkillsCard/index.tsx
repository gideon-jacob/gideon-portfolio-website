import React from "react";
import "./index.scss";
import SkillGroupItem from "../SkillGroupItem";

const SkillsCard: React.FC = () => {
    return (
        <div className="skills-card-container">
            <h2>Skills</h2>

            <div className="skill-group-list">
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

            {/* <ViewAll to="/about#techStack" className="link" /> */}
        </div>
    );
};

export default SkillsCard;   