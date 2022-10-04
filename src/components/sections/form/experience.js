import React, {Component} from 'react';

class Experience extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const { onChange, onSubmit} = this.props;

        return (
            <div className = "experience" onSubmit={onSubmit}>
                <form id="workExp">
                    <div>
                        <label htmlFor='companyName'>Company Name</label>
                        <input
                            type="text"
                            id="companyName"
                            name="companyName"
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
                            id='tasks'
                            name='tasks'
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='jobStart'>Start Date</label>
                        <input
                            type="date"
                            id="dateBegin"
                            name='dateBegin'
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='jobEnd'>End Date</label>
                        <input
                            type="date"
                            id="dateEnd"
                            name='dateEnd'
                            onChange={onChange}
                        />
                    </div>
                    <button type='submit'>Add</button>
                </form>
            </div>
        );
    };
}

export default Experience;