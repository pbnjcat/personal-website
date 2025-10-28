import workData from '$lib/data/work.json';
import educationData from '$lib/data/education.json';

interface Project {
    title: string;
    image: string;
    startDate: Date;
    description: string;
    demo: string;
}

const allProjects: Project[] = [];

const projectFiles = import.meta.glob('$lib/data/projects/*.json', {
    query: '?raw',
    eager: true,
    import: 'default'
});

Object.entries(projectFiles).map(([path, rawFile]) => {
    const content = JSON.parse(rawFile as string);
    allProjects.push({
        ...content,
        startDate: new Date(content.startDate)
    })
});

interface Work {
    employer: string;
    title: string;
    startDate: Date;
    endDate: Date;
    description: string | null;
}
const convertToInterfaceWork = (value: { employer: string, title: string, startDate: string, endDate: string, description: string; }): Work => {
    return {
        employer: value.employer,
        title: value.title,
        startDate: new Date(value.startDate),
        endDate: new Date(value.endDate),
        description: value.description
    }
}
const allWork = workData.work.map(convertToInterfaceWork)

interface Education {
    school: string;
    study: string;
    startDate: Date;
    endDate: Date | null;
    description: string;
}

const convertToInterfaceEducation = (value: { school: string, study: string, startDate: string, endDate: string, description: string; }): Education => {
    return {
        school: value.school,
        study: value.study,
        startDate: new Date(value.startDate),
        endDate: new Date(value.endDate),
        description: value.description
    }
}
const allEducation = educationData.education.map(convertToInterfaceEducation);

export function load() {
    return {
        projects: allProjects,
        education: allEducation,
        work: allWork
    }
};

