import React from 'react';

const EdCV = ({school}) => {

    return (
        <div className='edCV'>
            <div>
                <div>{school.school}</div>
                <div>{school.startDate} - {school.gradDate}</div>
            </div>
            <div>{school.degree} of {school.degreeType}</div>
            <div>{school.major}</div>
            
        </div>
    )          
  }
  
  export default EdCV;
  