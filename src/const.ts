export interface Skill {
    icon: string;
}
    

export interface Project {
    title: string;
    type: string;
    description: string;
    link: string;
    skills: Skill[];
    }


export const projects: Project[] = [
    {
        title: "Vitametrics",
        type: "Open-source Web Application & Docker Program",
        description: "Target for researchers--Vitametrics captures data from Fitbit trackers for researchers to export and analyze.",
        link: "https://vitametrics.org/",
        skills: [
            {icon: "react"},
            {icon: "nodejs"},
            {icon: "mongodb"},
            {icon: "docker"},
            {icon: "express"},
            {icon: "typescript"},
        ]
    },{
        title: "Miso",
        type: "Web Application",
        description: "Invite your friends to study in your room--sanctioned for boosting your productivity and creativity.",
        link: "https://github.com/brandontranle/miso",
        skills: [
            {icon: "react"},
            {icon: "mongodb"},
            {icon: "nodejs"},
            {icon: "express"},
            {icon: "typescript"},

        ]
    },
    {
        title: "MSUB",
        type: "Static Web Application",
        description: "Designed to showcase Math-Science Upward Bound to hundreds of High School Students every year.",
        link: "https://github.com/brandontranle/msub",
        skills: [
            {icon: "react"},
            {icon: "sass"},
            {icon: "typescript"},
        ]
    },
    {
        title: "notzsh",
        type: "Terminal Application",
        description: "A mimic of shell command piping, such that the output of each command becomes the input for the next.",
        link: "https://github.com/brandontranle/notzsh",
        skills: [
            {icon: "c"},
            {icon: "python"},
        ]
    },
    {
        title: "Thriftopia",
        type: "Web Application (Work in progress)",
        description: "A thrift store for students! Desgined to help students sell or exchange goods to other students at nearby campuses!",
        link: "https://github.com/brandontranle/thriftopia",
        skills: [
            {icon: "react"},
            {icon: "typescript"},
            {icon: "java"},
            {icon: "mysql"},
        ]
    },
    {
        title: "Tug-o-Word",
        type: "Web Application",
        description: "Imagine tug-o-war but with your keyboard! Battle in an intense team fight or 1v1 with your typing speed.",
        link: "https://github.com/brandontranle/tug-o-word",
        skills: [
            {icon: "laravel"},
            {icon: "php"},
            {icon: "mysql"},
        ]
    },
    {
        title: "Peach Party",
        type: "Game",
        description: "Peach and Yoshi battle around an obstacle course to collect the most coins while avoiding Bowser and Boo",
        link: "https://github.com/brandontranle/peach-party",
        skills: [
            {icon: "cplusplus"},
            {icon: "opengl"},
        ]
    }
    ]
