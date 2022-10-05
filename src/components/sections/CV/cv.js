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
                <div className="subject">
                    <div>
                        <div className="edTitle">Education</div>
                        <div className ="edGroup">{schools.map((item) => <EdCV school={item} key={item.key} />)}</div>
                    </div>
                    <div>
                        <div className="workTitle">Work Experience</div>
                        <div className ="workGroup">{jobs.map((item) => <WorkCV job={item} key={item.key} />)}</div>
                    </div>
                </div>
            </div>
        )          
    }
  }
  
  export default CV;
  