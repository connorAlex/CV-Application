import React, {Component} from 'react';
import Education from './sections/form/education';
import Experience from './sections/form/experience';
import General from './sections/form/general';
import CV from './sections/CV/cv.js';
import uniqid from "uniqid";

class Main extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            jobs:[
                {
                    companyName: 'Fake Job',
                    jobTitle: 'Fake Position',
                    tasks: 'Fask Tasks',
                    dateBegin: '10-08-2020',
                    dateEnd: '11-45-2021',
                    key: uniqid(),
                },
            ],
            schools:[
                {
                    school: 'Fake School',
                    degree: 'STEM',
                    major: 'Fake Major',
                    startDate: '2012',
                    gradDate: '2016',
                    key: uniqid(),
                },
            ],
            generalExp: {
                name: 'Connor',
                email: 'connor.alex.cochrane@gmail.com',
                phone: '555-555-5555',
            },
            educationExp: {
                school: '',
                degree: '',
                major: '',
                gradDate: '',
                key: uniqid(),
            },
            workExp: {
                companyName: '',
                jobTitle: '',
                tasks: '',
                dateBegin: '',
                dateEnd: '',
                key: uniqid(),
            }
        }
    }

    handleChange = (e) => {
        const category = {...this.state[e.target.parentNode.parentNode.getAttribute('id')]};
        const key = e.target.getAttribute('name');
        const value = e.target.value;

        category[key] = value;
        this.setState({ [e.target.parentNode.parentNode.getAttribute('id')]: category})
    }

    submitJob = (e) => {
        e.preventDefault();
        this.setState({
            jobs: this.state.jobs.concat(this.state.workExp),
            workExp: {
                companyName: '',
                jobTitle: '',
                tasks: '',
                dateBegin: '',
                dateEnd: '',
                key: uniqid(),
            }
        });
    };

    submitEducation = (e) => {
        e.preventDefault();
        this.setState({
            schools: this.state.schools.concat(this.state.educationExp),
            educationExp: {
                school: '',
                degree: '',
                major: '',
                gradDate: '',
                key: uniqid(),
            },
        });
    }

    render() {
        const { jobs, schools, generalExp } = this.state;
        
        return (
            
            <div className='content'>
                <div className = "main">
                    <General info={generalExp} onChange={this.handleChange}/>
                    <Experience onChange={this.handleChange} onSubmit={this.submitJob}/>
                    <Education onChange={this.handleChange} onSubmit={this.submitEducation}/>
                </div>
                <CV jobs={jobs} schools={schools} general={generalExp}/>
            </div>
        );
    };
}

export default Main;