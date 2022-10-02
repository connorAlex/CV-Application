import React, {Component} from 'react';

class Education extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const {onChange} = this.props;
        return (
            
            <div className = "education">
                <form id="educationExp">
                    <div>
                        <label htmlFor='school'>School</label>
                        <input
                            type="text"
                            id="school"
                            name='school'
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="degree">Degree</label>
                        <input
                            type="text"
                            id="degree"
                            name="degree"
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="major">Major</label>
                        <input
                            type="text"
                            id="major"
                            name='major'
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='gradStart'>Start Date</label>
                        <input
                            type="date"
                            name='gradStart'
                            id="gradStart"
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='gradEnd'>Graduation Date</label>
                        <input
                            type="date"
                            id="gradEnd"
                            name='gradEnd'
                            onChange={onChange}
                        />
                    </div>
                </form>
            </div>
        );
    };
}

export default Education;