interface NavLink {
    label: string;
    path: string;
    anchor?: string;
}

export const navLinks: NavLink[] = [
    {
        label: 'about',
        path: '/',
        anchor: '#about'
    },
    {
        label: 'work',
        path: '/',
        anchor: '#work'
    },
    {
        label: 'projects',
        path: '/',
        anchor: '#projects'
    }
] as const;