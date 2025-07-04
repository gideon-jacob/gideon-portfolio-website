import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { SiLeetcode as LeetCodeLogo } from "react-icons/si";
import { RxLinkedinLogo as LinkedInLogo } from "react-icons/rx";
import { MdLocationOn as LocationIcon } from "react-icons/md";
import { MdEmail as EmailLogo } from "react-icons/md";
import { FaGithub as GithubLogo } from "react-icons/fa";
import MyInfoRecord from '../MyInfoRecord';

const myInfoList = [
    {
        id: uuidv4(),
        Logo: LocationIcon,
        title: "Based In:",
        value: "Chennai"
    },
    {
        id: uuidv4(),
        Logo: EmailLogo,
        title: "Email:",
        value: "gideonjacob.in@gmail.com",
        url: "mailto:gideonjacon.in@gmail.com",
        isLink: true
    },
    {
        id: uuidv4(),
        Logo: LinkedInLogo,
        title: "LinkedIn:",
        value: "Gideon Jacob S",
        url: "https://www.linkedin.com/in/gideonjacob/",
        isLink: true
    },
    {
        id: uuidv4(),
        Logo: GithubLogo,
        title: "Github:",
        value: "gideon-jacob",
        url: "https://www.github.com/gideon-jacob",
        isLink: true
    },
    {
        id: uuidv4(),
        Logo: LeetCodeLogo,
        title: "LeetCode:",
        value: "gideonjacob",
        url: "https://www.leetcode.com/u/gideonjacob",
        isLink: true
    },
];

const MyInfoCard: React.FC = () => {
    return (
        <div className='card' style={{ width: '100%' }}>
            {myInfoList.map(eachInfo => (
                <MyInfoRecord key={eachInfo.id} {...eachInfo} />
            ))}
        </div>
    )
}

export default MyInfoCard;