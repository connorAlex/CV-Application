import React, {Component} from 'react';
import Education from './sections/education';

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
                positionTitle: '',
                tasks: '',
                dateBegin: '',
                dateEnd: '',
            }
        }
    }

    render() {
        return (
            <Education />
        );
    };
}

export default Main;