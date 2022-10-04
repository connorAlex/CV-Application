import React, { Component } from 'react';

class EdCV extends Component  {
    constructor(props) {
      super(props);
    }
    
    

    render() {
        const { school } = this.props;
        return (
            
            <div className='edCV'>
                <div>
                    <div>{school.school}</div>
                    <div>{school.startDate} - {school.gradDate}</div>
                </div>
                <div>{school.degree} of {school.degreeType}</div>
                <div>{school.major}</div>
                
            </div>
        )          
    }
  }
  
  export default EdCV;
  