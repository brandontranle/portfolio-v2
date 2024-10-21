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

export interface Experience {
    title: string;
    role: string;
    description: string[];
    skills: Skill[];
}


export const projects: Project[] = [
    {
        title: "S&P Scraper",
        type: "Python Script",
        description: "Scrapes social media posts, comments, and likes to generate CSV data of Security & Privacy (S&P) info.",
        link: "https://github.com/brandontranle/scraper",
        skills: [
            {icon: "python"},
            {icon: "bash"},
        ],
    },
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





    export const experiences: Experience[] = [
        {
        title: "U.S. Naval Research Laboratory",
        role: "Security Research Intern - Oct.2024 to Present",
        description: [
            "Conducting network security research under the supervision of officer Jonathan Decker, focusing on Explainable AI to improve transparency in AI/ML models. ",
            "Surveying existing literature on the use of visual metaphors to explain AI decision-making processes, contributing to the development of more interpretable machine learning models.",
            "Collaborating with the research team to explore the implications of hidden inference mechanisms in AI systems and their potential security vulnerabilities.",
        ],
        skills: [
            { "icon": "powershell" },
            { "icon": "python" },
        ],
        },
        {
         title: "UCLA (Computer Security Lab)",
        role: "Undergraduate Researcher - Oct. 2024 to Present",
        description: [
            "Conducting security-related research under Professor Yuan Tian, analyzing over 100K+ data points from online platforms to identify gaps in digital literacy",
            "Developed a web scraper in Python to collect and analyze data from SideQuest VR, and Reddit, reducing runtime by 95% through multi-threading and API handling",
        ],
        skills: [
            { "icon": "python" },
            { "icon": "c" },
            { "icon": "bash" },
        ]

        },

        {
            title: "Vitametrics",
            role: "Founder, Software Security Engineer - Jan. 2024 to Oct. 2024",
            description: [
                "Wrote 40K+ lines of code, developing HIPAA compliance in secure, reusable React.js components and back-end solutions. Improved loading times by 80% while ensuring secure data exchange in APIs",
                "Managed a beta test with 100+ Fitbit devices at Iowa State University, collecting security-related feedback and performance data to identify vulnerabilities and optimize application performance",
                "Implemented security practices, including encryption, secure session management, and input validation, to protect sensitive data and ensure ISO 27001 compliance during collaboration with academic partners"
            ],
            skills: [
                { "icon": "react" },
                { "icon": "nodejs" },
                { "icon": "mongodb" },
                { "icon": "docker" },
                { "icon": "express" },
                { "icon": "typescript" }
            ]
        },
        {
            title: "Intern Guys",
            role: "Software Security Engineer Intern - Jan. 2024 to Apr. 2024",
            description: [
                "Fixed a security vulnerability in an HTML form exploited by spam, SQL injection, and XSS attacks. Implemented CAPTCHA, rate limiting, and input sanitation, stopping potential attacks for 20,000+ users",
                "Deployed a Two-Factor Authentication (2FA) system using email verification methods, strengthening security posture and reducing unauthorized access attempts per month by 90%",
                "Engineered a full-stack blog platform in C# and React.js, raising monthly user engagement by 2500+ users",
            ],
            skills: [
                { "icon": "react" },
                { "icon": "csharp" },
                { "icon": "mysql" },
                { "icon": "javascript" }
            ]
        },
        {
            title: "Monterey Peninsula College",
            role: "Web App Security Developer - June 2023 to Dec. 2023",
            description: [
                "Managed production web server for a community college application, implementing role-based access control, SSL encryption, and firewall configurations, ensuring secure access and 99.9% uptime",
                "Created a peer-grading website using PHP, Bootstrap, and SQLite to handle 600 project submissions, enforcing input sanitation to prevent parameter tampering and reduce front-end security vulnerabilities",
                "Built a Python API to sort and allocate 3 project links to each user for peer grading, automating and reducing manual processing time by 99.87%",
],
            skills: [
                { "icon": "php" },
                { "icon": "sqlite" },
                { "icon": "bootstrap" },
                { "icon": "powershell"}
            ]
        },
        {
            title: "Hexfork",
            role: "Security Engineer Intern - June 2023 to Dec. 2023",
            description: [
                "Led a team of five interns to achieve a 10,000+ increase in user clicks while increasing protection against common web vulnerabilities in the company’s React.js site",
  "Performed security assessments using WireShark and Nmap, identifying and mitigating 6 vulnerabilities across multiple services and web applications, enhancing the company’s security posture",
 "Developed an automated Python bot for recording employee hours, implementing security measures that reduced the risk of tampering by 90% using verification",
            ],
            skills: [
                { "icon": "react" },
                { "icon": "mongodb" },
                { "icon": "python" },
                { "icon": "typescript" }
            ]
        }
    ];
    