import React from 'react';

const GenCV = ({general}) => {
      return (
          <div className='genCV'>
            <div>{general.name}</div>
              <div>
              <div>{general.location}</div>
                <div>{general.email}</div>
                <div>{general.phone}</div>
              </div>
          </div>
      )          
  };
  
  
  export default GenCV;
  