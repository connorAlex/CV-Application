import React, {Component} from 'react';
import Education from './sections/education';
import Experience from './sections/experience';
import General from './sections/general';

class Main extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            jobs:[],
            schools:[],
            generalExp: {
                name: '',
                email: '',
                phone: '',
            },
            educationExp: {
                school: '',
                degree: '',
                major: '',
                gradDate: '',
            },
            workExp: {
                companyName: '',
                jobTitle: '',
                tasks: '',
                dateBegin: '',
                dateEnd: '',
            }
        }
    }

    render() {
        return (
            <div>
                <General />
                <Experience />
                <Education />
            </div>
        );
    };
}

export default Main;