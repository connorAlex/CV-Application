import React, { Component } from 'react';

class WorkCV extends Component  {
    constructor(props) {
      super(props);
    }
    
    

    render() {
        const { job } = this.props;
        return (
            
            <div className='workCV'>
                {job.jobTitle}
            </div>
        )          
    }
  }
  
  export default WorkCV;
  