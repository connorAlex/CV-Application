import React, { Component } from 'react';

class WorkCV extends Component  {
    constructor(props) {
      super(props);
    }
    
    

    render() {
        const { job } = this.props;
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
    }
  }
  
  export default WorkCV;
  