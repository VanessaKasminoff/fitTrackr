import React from 'react';

const DashboardCircularGraphCard = () => {
    return (
        <div className='circular-graph-card'>
            <div className='circular-graph'>
                <div className='circle'></div>
                <div className='circle-mask'>
                    <div className='circle-fill'></div>
                </div>
                <div className='circle-content'>
                    <span className='percentage'>75%</span>
                    <span className='label'>Completed</span>
                </div>
            </div>
        </div>
    );
};

export default DashboardCircularGraphCard;

