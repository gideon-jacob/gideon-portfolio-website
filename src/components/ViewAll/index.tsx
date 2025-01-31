import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRightLong as NextIcon } from "react-icons/fa6";

interface Props {
    className?: string;
    to: string;
}

const ViewAll: React.FC<Props> = props => {
    const { to, className } = props;

    return (
        <Link className={`view-more ${className}`} to={to}>
            View All &nbsp; <NextIcon className='icon' />
        </Link>
    );
}

export default ViewAll;