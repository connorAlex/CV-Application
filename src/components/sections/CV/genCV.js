import React, { Component } from 'react';

class GenCV extends Component  {
    constructor(props) {
      super(props);
    }
    
    

    render() {
        const { general } = this.props;
        return (
            
            <div className='genCV'>
               {general.name}
            </div>
        )          
    }
  }
  
  export default GenCV;
  