import React, { Component } from 'react';

class WorkCV extends Component  {
    constructor(props) {
      super(props);
    }
    
    

    render() {
        const { job } = this.props;
        return (
            
            <div className='workCV'>
                <div>{job.companyName}</div>
                <div>{job.jobTitle}</div>
                <div>{job.tasks}</div>
                <div>{job.dateBegin}</div>
                <div>{job.dateEnd}</div>

            </div>
        )          
    }
  }
  
  export default WorkCV;
  