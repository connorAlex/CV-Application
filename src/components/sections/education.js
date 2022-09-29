import React, {Component} from 'react';

class Education extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form id="educationExp">
                    <label htmlFor='school'>School</label>
                    <input
                        type="text"
                        id="school"
                        name='school'
                    />
                    <label htmlFor="degree">Degree</label>
                    <input
                        type="text"
                        id="degree"
                        name="degree"
                        placeholder='Bachelor'
                    />
                    <label htmlFor="major">Major</label>
                    <input
                        type="text"
                        id="major"
                        name='major'
                        placeholder='Science'
                    />
                    <label htmlFor='gradStart'>Start Date</label>
                    <input
                        type="date"
                        name='gradStart'
                        id="gradStart"
                    />
                    <label htmlFor='gradEnd'>Graduation Date</label>
                    <input
                        type="date"
                        id="gradEnd"
                        name='gradEnd'
                    />
                </form>
            </div>
        );
    };
}

export default Education;