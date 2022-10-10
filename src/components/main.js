import React, {useState, useEffect} from 'react';
import Education from './sections/form/education';
import Experience from './sections/form/experience';
import General from './sections/form/general';
import {defaultJobs, defaultSchools} from './defaults';
import CV from './sections/CV/cv.js';
import uniqid from "uniqid";

// class Main extends Component {
    
//     constructor(props) {
//         super(props);

//         this.state = {
//             jobs:[
                // {
                //     companyName: 'Apple',
                //     jobTitle: 'Frontend UI Engineer',
                //     tasks: '- Creat cloud infrastructure metric reporting for AppleTV+\n- Utilize TypeScript and React to redesign AppleTV UI\n- Work in parallel with many cross-collaborative specialists under tight deadlines',
                //     dateBegin: '2018',
                //     dateEnd: 'Current',
                //     key: uniqid(),
                // },
                // {
                //     companyName: 'Datadog',
                //     jobTitle: 'Frontend Engineer',
                //     tasks: '- Built intuitive responsive user-interfaces utilizing React and Redux\n- Assisted in developing design framework for data visualizations \n- Lead Typescript migration for codebase',
                //     dateBegin: '2016',
                //     dateEnd: '2018',
                //     key: uniqid(),
                // },
                // {
                //     companyName: 'Cisco',
                //     jobTitle: 'Frontend Developer',
                //     tasks: '- Conducted user-story interviewing sessions to develop UI/UX framework\n- Implemented  \n- Converted user interfaces to be screen-reader accessible',
                //     dateBegin: '2016',
                //     dateEnd: '2018',
                //     key: uniqid(),
                // }
//             ],
//             schools:[
//                 {
//                     school: 'Indiana University, Bloomington',
//                     degree: 'Bachelor',
//                     degreeType: 'Science',
//                     major: 'Computer Science',
//                     startDate: '2012',
//                     gradDate: '2016',
//                     key: uniqid(),
//                 },
//             ],
//             generalExp: {
//                 name: 'John Doe',
//                 email: 'john.doe@gmail.com',
//                 phone: '555-555-5555',
//                 location: 'Chicago, IL 60640'
//             },
//             educationExp: {
//                 school: '',
//                 degree: '',
//                 degreeType: '',
//                 major: '',
//                 startDate: '',
//                 gradDate: '',
//                 key: uniqid(),
//             },
//             workExp: {
//                 companyName: '',
//                 jobTitle: '',
//                 tasks: '',
//                 dateBegin: '',
//                 dateEnd: '',
//                 key: uniqid(),
//             }
//         }
//     }

    // handleChange = (e) => {
    //     const category = {...this.state[e.target.parentNode.parentNode.getAttribute('id')]};
    //     const key = e.target.getAttribute('name');
    //     const value = e.target.value;
        
    //     category[key] = value;
    //     this.setState({ [e.target.parentNode.parentNode.getAttribute('id')]: category})
    // }

//     submitReset = (e) => {
//         e.preventDefault();
//         this.setState({
//             jobs: [],
//             schools: [],
//         });
//     }

    // submitJob = (e) => {
    //     e.preventDefault();
    //     this.setState({
    //         jobs: this.state.jobs.concat(this.state.workExp),
    //         workExp: {
    //             companyName: '',
    //             jobTitle: '',
    //             tasks: '',
    //             dateBegin: '',
    //             dateEnd: '',
    //             key: uniqid(),
    //         }
    //     });
    // };

//     submitEducation = (e) => {
//         e.preventDefault();
//         this.setState({
//             schools: this.state.schools.concat(this.state.educationExp),
//             educationExp: {
//                 school: '',
//                 degree: '',
//                 degreeType: '',
//                 major: '',
//                 startDate: '',
//                 gradDate: '',
//                 key: uniqid(),
//             },
//         });
//     }

//     render() {
//         const { jobs, schools, generalExp, educationExp, workExp } = this.state;
        
//         return (
            
//             <div className='content'>
//                 <div className = "main">
//                     {/* need to put in an id for each experience and education div to be able to later edit */}
//                     <General info={generalExp} onChange={this.handleChange}/>
//                     <Experience info={workExp} onChange={this.handleChange} onSubmit={this.submitJob}/>
//                     <Education info={educationExp} onChange={this.handleChange} onSubmit={this.submitEducation}/>
//                     <button className="resetBtn" onClick={this.submitReset}>Reset</button>
//                 </div>
//                 <CV jobs={jobs} schools={schools} general={generalExp}/>
//             </div>
//         );
//     };
// }

const Main = () => {
    
    const generalExp =  {
        name: 'John Doe',
        email: 'john.doe@gmail.com',
        phone: '555-555-5555',
        location: 'Chicago, IL 60640'
    };
    const educationExp = {
        school: '',
        degree: '',
        degreeType: '',
        major: '',
        startDate: '',
        gradDate: '',
        key: uniqid()
    };
    const workExp =  {
        companyName: '',
        jobTitle: '',
        tasks: '',
        dateBegin: '',
        dateEnd: '',
        key: uniqid()
    };

    const [jobs, setJobs] = useState(defaultJobs);
    const [schools, setSchools] = useState(defaultSchools);

    const [gen, setGen] = useState(generalExp);
    const [education, setEducation] = useState(educationExp);
    const [work, setWork] = useState(workExp);

    const handleChangeEd = (e) => {
        const { name, value, type } = e.target;
        setEducation({ [e.target.parentNode.parentNode.getAttribute('id')]: value})
    }
    const handleChangeGen = (e) => {
        const { name, value, type } = e.target;
        setGen({ [e.target.parentNode.parentNode.getAttribute('id')]: value})
    }
    const handleChangeWork = (e) => {
        const { name, value, type } = e.target;
        setWork({ [e.target.parentNode.parentNode.getAttribute('id')]: value})
    }

    const submitReset = (e) => {
        e.preventDefault();
        setEducation({
            school: '',
            degree: '',
            degreeType: '',
            major: '',
            startDate: '',
            gradDate: '',
            key: uniqid()
        });
        setWork({
            companyName: '',
            jobTitle: '',
            tasks: '',
            dateBegin: '',
            dateEnd: '',
            key: uniqid(),
        });
    }
    const submitJob = (e) => {
        e.preventDefault();
        setJobs(jobs.concat(workExp));
        setWork({
            companyName: '',
            jobTitle: '',
            tasks: '',
            dateBegin: '',
            dateEnd: '',
            key: uniqid(),
        })
    };

    const submitEducation = (e) => {
        e.preventDefault();
        setSchools(schools.concat(educationExp));
        setEducation({
            school: '',
            degree: '',
            degreeType: '',
            major: '',
            startDate: '',
            gradDate: '',
            key: uniqid()
        });
    }

    return (
        <div className='content'>
            <div className='main'>
                <General info={generalExp} onChange={handleChangeGen}/>
                <Experience info={workExp} onChange={handleChangeWork} onSubmit={submitJob}/>
                <Education info={educationExp} onChange={handleChangeEd} onSubmit={submitEducation}/>
                <button className='resetBtn' onClick={submitReset}>Reset</button>
            </div>
            <CV jobs={jobs} schools={schools} general={generalExp}/>
        </div>
    )

};

export default Main;