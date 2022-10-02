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
                
            ],
            schools:[
                {
                    school: 'Fake School',
                    degree: 'STEM',
                    major: 'Fake Major',
                    gradDate: '2016',
                    key: uniqid(),
                }
            ],
            generalExp: {
                name: 'test',
                email: 'fffff',
                phone: 'asdf',
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

    render() {
        const { jobs, schools, generalExp } = this.state;
        
        return (
            
            <div>
                <div className = "main">
                    <General info={generalExp} onChange={this.handleChange}/>
                    <Experience onChange={this.handleChange}/>
                    <Education onChange={this.handleChange}/>
                </div>
                <CV jobs={jobs} schools={schools} general={generalExp}/>
            </div>
        );
    };
}

export default Main;