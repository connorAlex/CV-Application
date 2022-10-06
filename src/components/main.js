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
                    tasks: 'Fake Tasks',
                    dateBegin: '10-08-2020',
                    dateEnd: '11-45-2021',
                    key: uniqid(),
                },
            ],
            schools:[
                {
                    school: 'Fake School',
                    degree: 'Bachelor',
                    degreeType: 'Science',
                    major: 'Fake Major',
                    startDate: '2012',
                    gradDate: '2016',
                    key: uniqid(),
                },
            ],
            generalExp: {
                name: 'Connor Cochrane',
                email: 'connor.alex.cochrane@gmail.com',
                phone: '555-555-5555',
                location: 'Chicago, IL 60640'
            },
            educationExp: {
                school: '',
                degree: '',
                degreeType: '',
                major: '',
                startDate: '',
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
                degreeType: '',
                major: '',
                startDate: '',
                gradDate: '',
                key: uniqid(),
            },
        });
    }

    render() {
        const { jobs, schools, generalExp, educationExp, workExp } = this.state;
        
        return (
            
            <div className='content'>
                <div className = "main">
                    {/* need to put in an id for each experience and education div to be able to later edit */}
                    <General info={generalExp} onChange={this.handleChange}/>
                    <Experience info={workExp} onChange={this.handleChange} onSubmit={this.submitJob}/>
                    <Education info={educationExp} onChange={this.handleChange} onSubmit={this.submitEducation}/>
                </div>
                <CV jobs={jobs} schools={schools} general={generalExp}/>
            </div>
        );
    };
}

export default Main;