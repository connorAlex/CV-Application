import React, {Component} from 'react';

class Education extends Component {
    
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        const { info, onChange, onSubmit } = this.props;
        return (
            
            <div className = "education">
                <form id="educationExp" onSubmit={onSubmit}>
                    <div>Education</div>
                    <div>
                        <label htmlFor='school'>School</label>
                        <input
                            type="text"
                            id="school"
                            name='school'
                            value={info.school}
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="degree">Degree</label>
                        <input
                            type="text"
                            id="degree"
                            name="degree"
                            value={info.degree}
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="degreeType">Degree Type</label>
                        <input
                            type="text"
                            id="degreeType"
                            name="degreeType"
                            value={info.degreeType}
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="major">Major</label>
                        <input
                            type="text"
                            id="major"
                            name='major'
                            value={info.major}
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='gradStart'>Start Date</label>
                        <input
                            type="date"
                            name='gradStart'
                            id="gradStart"
                            value={info.gradStart}
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='gradEnd'>Graduation Date</label>
                        <input
                            type="date"
                            id="gradEnd"
                            name='gradEnd'
                            value={info.gradEnd}
                            onChange={onChange}
                        />
                    </div>
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    };
}

export default Education;