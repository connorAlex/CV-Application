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
    handleChangeGeneral = (e) => {
        this.setState({
            generalExp: {
                name: '',
                email: '',
                phone: '',
            }
        });
    };
    
    handleChangeExperience = (e) => {
        this.setState({
            generalExp: {
                name: '',
                email: '',
                phone: '',
            }
        });
    };

    handleChangeEducation = (e) => {
        this.setState({
            generalExp: {
                name: '',
                email: '',
                phone: '',
            }
        });
    };

    render() {
        return (
            <div>
                <General handleChange={this.handleChangeGeneral}/>
                <Experience handleChange={this.handleChangeExperience}/>
                <Education handleChange={this.handleChangeEducation}/>
            </div>
        );
    };
}

export default Main;