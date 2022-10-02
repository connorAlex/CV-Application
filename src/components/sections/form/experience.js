import React, {Component} from 'react';

class Experience extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const { onChange } = this.props;

        return (
            <div className = "experience">
                <form id="workExp">
                    <div>
                        <label htmlFor='companyName'>Company Name</label>
                        <input
                            type="text"
                            id="companyName"
                            
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='jobTitle'>Position Title</label>
                        <input
                            type="text"
                            id="jobTitle"
                            name='jobTitle'
                            
                            onChange={onChange}
                        />
                    </div>
                    <label htmlFor='tasks'>Tasks and Responsibilities</label>
                    <div>
                        
                        <textarea
                            type="text"
                            id="tasks"
                            name='tasks'
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='jobStart'>Start Date</label>
                        <input
                            type="date"
                            id="jobStart"
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='jobEnd'>End Date</label>
                        <input
                            type="date"
                            id="jobEnd"
                            name='jobEnd'
                            onChange={onChange}
                        />
                    </div>
                </form>
            </div>
        );
    };
}

export default Experience;