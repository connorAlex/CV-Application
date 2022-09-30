import React, {Component} from 'react';

class Education extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const {onChange} = this.props;
        return (
            
            <div>
                <form id="educationExp">
                    <label htmlFor='school'>School</label>
                    <input
                        type="text"
                        id="school"
                        name='school'
                        onChange={onChange}
                    />
                    <label htmlFor="degree">Degree</label>
                    <input
                        type="text"
                        id="degree"
                        name="degree"
                        placeholder='Bachelor'
                        onChange={onChange}
                    />
                    <label htmlFor="major">Major</label>
                    <input
                        type="text"
                        id="major"
                        name='major'
                        placeholder='Science'
                        onChange={onChange}
                    />
                    <label htmlFor='gradStart'>Start Date</label>
                    <input
                        type="date"
                        name='gradStart'
                        id="gradStart"
                        onChange={onChange}
                    />
                    <label htmlFor='gradEnd'>Graduation Date</label>
                    <input
                        type="date"
                        id="gradEnd"
                        name='gradEnd'
                        onChange={onChange}
                    />
                </form>
            </div>
        );
    };
}

export default Education;