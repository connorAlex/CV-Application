import uniqid from "uniqid";

const defaultJobs = [
    {
        companyName: 'Apple',
        jobTitle: 'Frontend UI Engineer',
        tasks: '- Create cloud infrastructure metric reporting for AppleTV+\n- Utilize TypeScript and React to redesign AppleTV UI\n- Work in parallel with many cross-collaborative specialists under tight deadlines',
        dateBegin: '2018',
        dateEnd: 'Current',
        key: uniqid()
    },
    {
        companyName: 'Datadog',
        jobTitle: 'Frontend Engineer',
        tasks: '- Built intuitive responsive user-interfaces utilizing React and Redux\n- Assisted in developing design framework for data visualizations \n- Lead Typescript migration for codebase',
        dateBegin: '2016',
        dateEnd: '2018',
        key: uniqid()
    },
    {
        companyName: 'Cisco',
        jobTitle: 'Frontend Developer',
        tasks: '- Conducted user-story interviewing sessions to develop UI/UX framework\n- Implemented  \n- Converted user interfaces to be screen-reader accessible',
        dateBegin: '2016',
        dateEnd: '2018',
        key: uniqid()
    }
];

const defaultSchools = [
    {
        school: 'Indiana University, Bloomington',
        degree: 'Bachelor',
        degreeType: 'Science',
        major: 'Computer Science',
        startDate: '2012',
        gradDate: '2016',
        key: uniqid()
    },
];

export {defaultJobs, defaultSchools}