import React, {Component} from 'react';

class Experience extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const { onChange } = this.props;

        return (
            <div>
                <form id="workExp">
                    <label htmlFor='companyName'>Company Name</label>
                    <input
                        type="text"
                        id="companyName"
                        placeholder='Company Name'
                        onChange={onChange}
                    />
                    <label htmlFor='jobTitle'>Position Title</label>
                    <input
                        type="text"
                        id="jobTitle"
                        name='jobTitle'
                        placeholder='Job Title'
                        onChange={onChange}
                    />
                    <label htmlFor='tasks'>Tasks and Responsibilities</label>
                    <textarea
                        type="text"
                        id="tasks"
                        name='tasks'
                        placeholder='Tasks and Responsibilities'
                        onChange={onChange}
                    />
                    <label htmlFor='jobStart'>Start Date</label>
                    <input 
                        type="date"
                        id="jobStart"
                        onChange={onChange}
                    />
                    <label htmlFor='jobEnd'>End Date</label>
                    <input 
                        type="date"
                        id="jobEnd"
                        name='jobEnd'
                        onChange={onChange}
                    />
                </form>
            </div>
        );
    };
}

export default Experience;