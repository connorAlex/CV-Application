import React, {useState, useEffect} from 'react';
import Education from './sections/form/education';
import Experience from './sections/form/experience';
import General from './sections/form/general';
import {defaultJobs, defaultSchools} from './defaults';
import CV from './sections/CV/cv.js';
import uniqid from "uniqid";

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
        const {value} = e.target;
        setEducation({ [e.target.parentNode.parentNode.getAttribute('id')]: value})
    }
    const handleChangeGen = (e) => {
        const {value} = e.target;
        setGen({ [e.target.parentNode.parentNode.getAttribute('id')]: value})
    }
    const handleChangeWork = (e) => {
        const {value} = e.target;
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