import React, {Component} from 'react';
import Education from './sections/education';
import Experience from './sections/experience';
import General from './sections/general';
import CV from './sections/cv.js';

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
    handleChange = (e) => {
        const category = {...this.state[e.target.parentNode.parentNode.getAttribute('id')]};
        const key = e.target.getAttribute('name');
        const value = e.target.value;

        category[key] = value;
        this.setState({ [e.target.parentNode.parentNode.getAttribute('id')]: category})
    }

    render() {
        const { generalExp, educationExp, workExp, schools } = this.state;
        return (

            <div>
                <div className = "main">
                    <General info={generalExp} onChange={this.handleChange}/>
                    <Experience onChange={this.handleChange}/>
                    <Education onChange={this.handleChange}/>
                </div>
                <CV schools={schools}/>
            </div>
        );
    };
}

export default Main;