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
        const { generalExp, educationExp, workExp } = this.state;
        return (

            <div className = "main">
                <General info={generalExp} onChange={this.handleChange}/>
                {/* <div>{generalExp.name}</div>
                <div>{generalExp.email}</div> */}
                <Experience onChange={this.handleChange}/>
                <Education onChange={this.handleChange}/>
            </div>
        );
    };
}

export default Main;