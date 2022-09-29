import React, {Component} from 'react';

class Education extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input 
                    type="text"
                    id="school"
                    placeholder="School"
                />
                <input 
                    type="text"
                    id="degree"
                    placeholder='Bachelor'
                />
                <input
                    type="text"
                    id="major"
                    placeholder='Science'
                />
                <input 
                    type="date"
                    id="gradStart"
                />
                <input
                    type="date"
                    id="gradEnd"
                />
            </div>
        );
    };
}

export default Education;