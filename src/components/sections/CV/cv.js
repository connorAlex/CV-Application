import React, { Component } from 'react';
import EdCV from './EdCV.js';
import GenCV from './GenCV.js';
import WorkCV from './WorkCV.js';
import uniqid from "uniqid";

class CV extends Component  {
    constructor(props) {
      super(props);
    }
    
    

    render() {
        const {schools, general, jobs } = this.props;
        

        return (
            
            <div className='cv'>
                <GenCV />
                {console.log(schools)}
                {schools.map((item) => <EdCV school={item} key={item.key} />)}
                <WorkCV />
            </div>
        )          
    }
  }
  
  export default CV;
  