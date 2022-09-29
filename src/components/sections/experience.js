import React, {Component} from 'react';

class Experience extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        id="companyName"
                        placeholder='Company Name'
                    />
                    <input
                        type="text"
                        id="jobTitle"
                        placeholder='Job Title'
                    />
                    <textarea
                        type="text"
                        id="tasks"
                        placeholder='Tasks and Responsibilities'
                    />
                    <input 
                        type="date"
                        id="jobStart"
                    />
                    <input 
                        type="date"
                        id="jobEnd"
                    />
                </form>
            </div>
        );
    };
}

export default Experience;