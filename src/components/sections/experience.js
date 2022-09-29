import React, {Component} from 'react';

class Experience extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form id="workExp">
                    <label htmlFor='companyName'>Company Name</label>
                    <input
                        type="text"
                        id="companyName"
                        placeholder='Company Name'
                    />
                    <label htmlFor='jobTitle'>Position Title</label>
                    <input
                        type="text"
                        id="jobTitle"
                        name='jobTitle'
                        placeholder='Job Title'
                    />
                    <label htmlFor='tasks'>Tasks and Responsibilities</label>
                    <textarea
                        type="text"
                        id="tasks"
                        name='tasks'
                        placeholder='Tasks and Responsibilities'
                    />
                    <label htmlFor='jobStart'>Start Date</label>
                    <input 
                        type="date"
                        id="jobStart"
                    />
                    <label htmlFor='jobEnd'>End Date</label>
                    <input 
                        type="date"
                        id="jobEnd"
                        name='jobEnd'
                    />
                </form>
            </div>
        );
    };
}

export default Experience;