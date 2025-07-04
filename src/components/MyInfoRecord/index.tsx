import React from 'react'
import { IconType } from 'react-icons';
import './index.scss'

interface InfoProps {
    Logo: IconType;
    title: string;
    value: string;
    url?: string;
    isLink?: boolean;
}

const MyInfoRecord: React.FC<InfoProps> = props => {
    const { Logo, title, value, url, isLink } = props;

    return (
        <div className='info-record'>
            <div className='info-record-header'>
                <Logo className='icon' /> 
                <p className='info-record-title'>{ title }</p>
            </div>

            {/* Display only if isLink is undefined or null */}
            {isLink ?? <p>{value}</p>}
            
            {/* Display only if isLink = true */}
            {isLink && <a href={url} target='_blank' rel='noopener noreferrer' className='info-record-link'>{ value }</a>}
        </div>
    )
}

export default MyInfoRecord