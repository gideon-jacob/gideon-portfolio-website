import React from "react";
import { FaHtml5 as HtmlLogo } from "react-icons/fa";
import { IoLogoCss3 as CssLogo } from "react-icons/io";
import { FaReact as ReactLogo } from "react-icons/fa6";
import { SiSass as SassLogo } from "react-icons/si";
import { RiJavascriptFill as JavaScriptLogo } from "react-icons/ri";
import { TbBrandTypescript as TypeScriptLogo } from "react-icons/tb";
import { IoLogoNodejs as NodeJSLogo } from "react-icons/io";
import { SiExpress as ExpressJSLogo } from "react-icons/si";
import ViewAll from "../ViewAll";
import "./index.scss";

const techStackList = [
    {
        name: "HTML",
        LogoEl: <HtmlLogo style={{color: "#e54c21"}} />,
    },
    {
        name: "CSS",
        LogoEl: <CssLogo style={{color: "#2062af"}} />,
    },
    {
        name: "Sass",
        LogoEl: <SassLogo style={{color: "#e98cb8"}} />,
    },
    {
        name: "JavaScript",
        LogoEl: <JavaScriptLogo style={{color: "#d6ba32"}} />,
    },
    {
        name: "Typescript",
        LogoEl: <TypeScriptLogo style={{color: "#3178c6"}} />,
    },
    {
        name: "React",
        LogoEl: <ReactLogo style={{color: "#00d4e9"}} />,
    },
    {
        name: "Node JS",
        LogoEl: <NodeJSLogo style={{color: "#7cb602"}} />,
    },
    {
        name: "Express JS",
        LogoEl: <ExpressJSLogo style={{color: "#000"}} />,
    }
];

const TechStackCard: React.FC = () => {
    return (
        <div className="tech-stack-card">
            <h2>Tech Stack</h2>
            <ul>
                {techStackList.map((eachTech, index) => (
                    <li key={index}>
                        {eachTech.LogoEl}
                        <span>{ eachTech.name }</span>
                    </li>
                ))}

            </ul>
            
            <ViewAll to="/about#techStack" className="link" />
        </div>
    );
};

export default TechStackCard;   