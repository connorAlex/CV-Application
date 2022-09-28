import React, {Component} from 'react';

class Main extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            generalExp: {
                name: '',
                email: '',
                phone: '',
            },
            educationExp: {
                school: '',
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
            <div>This is main</div>
        );
    };
}

export default Main;