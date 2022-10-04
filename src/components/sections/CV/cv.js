import React, { Component } from 'react';
import EdCV from './edCV.js';
import GenCV from './genCV.js';
import WorkCV from './workCV.js';
import uniqid from "uniqid";

class CV extends Component  {
    constructor(props) {
      super(props);
    }
    
    

    render() {
        const {schools, general, jobs } = this.props;
        

        return (
            
            <div className='cv'>
                <GenCV general={general}/>
                <div>{schools.map((item) => <EdCV school={item} key={item.key} />)}</div>
                <div>{jobs.map((item) => <WorkCV job={item} key={item.key} />)}</div>
            </div>
        )          
    }
  }
  
  export default CV;
  