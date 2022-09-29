import React, {Component} from 'react';

class Experience extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form>
                    <label for='companyName'>Company Name</label>
                    <input
                        type="text"
                        id="companyName"
                        placeholder='Company Name'
                    />
                    <label for='jobTitle'>Position Title</label>
                    <input
                        type="text"
                        id="jobTitle"
                        name='jobTitle'
                        placeholder='Job Title'
                    />
                    <label for='tasks'>Tasks and Responsibilities</label>
                    <textarea
                        type="text"
                        id="tasks"
                        name='tasks'
                        placeholder='Tasks and Responsibilities'
                    />
                    <label for='jobStart'>Start Date</label>
                    <input 
                        type="date"
                        id="jobStart"
                    />
                    <label for='jobEnd'>End Date</label>
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