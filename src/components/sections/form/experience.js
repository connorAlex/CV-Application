import React, {Component} from 'react';

class Experience extends Component {
    
    constructor(props) {
        super(props);
    }

    // write a function to parse \n within the textarea
    // create a new string for each line
    // create a new div?

    parseTextArea = (value) => {


    };


    render() {
        const { info, onChange, onSubmit} = this.props;

        return (
            <div className = "experience" onSubmit={onSubmit}>
                <form id="workExp" autoComplete='off'>
                    <div>Work</div>
                    <div>
                        <label htmlFor='companyName'>Company Name</label>
                        <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={info.companyName}
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='jobTitle'>Position Title</label>
                        <input
                            type="text"
                            id="jobTitle"
                            name='jobTitle'
                            value={info.jobTitle}
                            onChange={onChange}
                        />
                    </div>
                    <label htmlFor='tasks'>Tasks and Responsibilities</label>
                    <div>
                        
                        <textarea
                            type="text"
                            id='tasks'
                            name='tasks'
                            value={info.tasks}
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='jobStart'>Start Date</label>
                        <input
                            type="date"
                            id="dateBegin"
                            name='dateBegin'
                            value={info.dateBegin}
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='jobEnd'>End Date</label>
                        <input
                            type="date"
                            id="dateEnd"
                            name='dateEnd'
                            value={info.dateEnd}
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