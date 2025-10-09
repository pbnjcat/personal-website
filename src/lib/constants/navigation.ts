interface NavLink {
    label: string;
    path: string;
    anchor?: string;
}

export const navLinks: NavLink[] = [
    // {
    //     label: 'work',
    //     path: '/',
    //     anchor: '#work'
    // },
    {
        label: 'about',
        path: '/',
        anchor: '#about'
    },
    {
        label: 'projects',
        path: '/',
        anchor: '#projects'
    }
] as const;