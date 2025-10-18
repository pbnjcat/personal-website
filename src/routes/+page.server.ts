
interface Project {
    title: string;
    image: string;
    date: Date;
    description: string;
    demo: string;
}

const allProjects: Project[] = [];

const jsonFiles = import.meta.glob('$lib/data/projects/*.json', {
    query: '?raw',
    eager: true,
    import: 'default'
});

Object.entries(jsonFiles).map(([path, rawFile]) => {
    const fileRegex = /([^/]+)\.json$/;
    const [, slug] = path.match(fileRegex) || [];
    const content = JSON.parse(rawFile as string);

    allProjects.push({
        slug,
        ...content
    })
});

export function load() {
    return {
        projects: allProjects
    }
};

