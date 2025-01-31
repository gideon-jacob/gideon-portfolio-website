import React from 'react';
import { MdLocationOn as LocationIcon } from "react-icons/md";
import { MdEmail as EmailLogo } from "react-icons/md";
import { FaGithub as GithubLogo } from "react-icons/fa";
import MyInfoRecord from '../MyInfoRecord';
import ViewAll from '../ViewAll';

const myInfoList = [
    {
        id: 1,
        Logo: LocationIcon,
        title: "Based In:",
        value: "Chennai"
    },
    {
        id: 2,
        Logo: EmailLogo,
        title: "Email:",
        value: "gideonjacob.in@gmail.com",
        url: "mailto:gideonjacon.in@gmail.com",
        isLink: true
    },
    {
        id: 3,
        Logo: GithubLogo,
        title: "Github:",
        value: "github.com/gideon-jacob",
        url: "https://www.github.com/gideon-jacob",
        isLink: true
    },
];

const MyInfoCard: React.FC = () => {
    return (
        <div className='card'>
            {myInfoList.map(eachInfo => (
                <MyInfoRecord key={eachInfo.id} {...eachInfo} />
            ))}

            <ViewAll to="/about" />
        </div>
    )
}

export default MyInfoCard;