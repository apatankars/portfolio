export const experienceLog = `
[2024-06-01 09:00:00] [INFO] Started SWE Intern at TechCorp
    > Built scalable microservices used by 1M+ users
    > Optimized database queries reducing latency by 40%

[2023-05-15 10:00:00] [INIT] Research Assistant at Brown Graphics Lab
    > Implemented novel rendering algorithms
    > Published paper at SIGGRAPH (pending)

[2022-09-01 08:00:00] [INFO] Head TA for CS101
    > Managed staff of 20 TAs
    > Redesigned curriculum for 300+ students
`;

export const educationData = {
    'brown': {
        name: 'brown',
        type: 'directory',
        content: {
            'transcript.pdf': {
                name: 'transcript.pdf',
                type: 'file',
                content: 'GPA: 4.0\nCourses: Deep Learning, Computer Vision, Distributed Systems, OS'
            },
            'activities.txt': {
                name: 'activities.txt',
                type: 'file',
                content: 'Teaching Assistant (CS101), Hackathon Organizer'
            }
        }
    }
} as const;
