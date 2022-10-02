import React, { Component } from 'react';

class EdCV extends Component  {
    constructor(props) {
      super(props);
    }
    
    

    render() {
        const { school } = this.props;
        return (
            
            <div className='edCV'>
                {school.school}
            </div>
        )          
    }
  }
  
  export default EdCV;
  