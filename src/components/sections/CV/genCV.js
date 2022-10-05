import React, { Component } from 'react';

class GenCV extends Component  {
    constructor(props) {
      super(props);
    }
    
    

    render() {
        const { general } = this.props;
        return (
            
            <div className='genCV'>
              <div>{general.name}</div>
               <div>
                <div>{general.location}</div>
                 <div>{general.email}</div>
                 <div>{general.phone}</div>
               </div>
            </div>
        )          
    }
  }
  
  export default GenCV;
  