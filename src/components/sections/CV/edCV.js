import React, { Component } from 'react';

class EdCV extends Component  {
    constructor(props) {
      super(props);
    }
    
    

    render() {
        const { school } = this.props;
        return (
            
            <div className='edCV'>
                <div>{school.school}</div>
                <div>{school.degree}</div>
                <div>{school.major}</div>
            </div>
        )          
    }
  }
  
  export default EdCV;
  