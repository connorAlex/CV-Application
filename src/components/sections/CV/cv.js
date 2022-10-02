import React, { Component } from 'react';
import edCV from './edCV.js';
import genCV from './genCV.js';
import workCV from './workCV.js';

class CV extends Component  {
    constructor(props) {
      super(props);
    }
    
    

    render() {
        const { schools } = this.props;
        return (
            
            <div className='cv'>
                <div> this is the cv</div>
                {schools.map((school) => {
                    return <div>{school.school}</div>
                })}
            </div>
        )          
    }
  }
  
  export default CV;
  