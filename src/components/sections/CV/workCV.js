import React from 'react';

const WorkCV = ({job}) => {
    
    return (
        <div className='workCV'>
            <div>
                <div>{job.companyName}</div>
                <div>{job.dateBegin} - {job.dateEnd}</div>
            </div>
            <div>{job.jobTitle}</div>
            <div>{job.tasks}</div>
        </div>
    )
};

export default WorkCV;
  