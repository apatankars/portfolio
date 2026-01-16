export const experienceLog = `
[2025-01-01 09:00:00] [HEAD TA] Deep Learning Head Teaching Assistant at Brown University
    > Led a team of 10+ undergraduate teaching assistants and collaborated with faculty to develop lectures and assignments for 200+ student course
    > Designed and facilitated weekly technical workshops on advanced deep learning applications such as input optimization and multi-modal models

[2024-05-01 10:00:00] [INTERN] Machine Learning Engineer Intern at STR
    > Optimized multi-agent reinforcement learning system using PyTorch and RLLib, improving task success rate from 80% to 96%
    > Implemented centralized critic architecture reducing training time from 5 days to 1.5 days (70% reduction) while maintaining 96% task accuracy
    > Implemented reward shaping and temporal feature engineering for multi-phase environments, increasing agent rewards by 30%

[2023-09-01 08:00:00] [WEB] Web Director at Brown Political Review
    > Led overhaul of BPR website using Next.js, TypeScript, and WordPress REST API to serve 1,500+ monthly visitors with 60% faster page loads
    > Engineered scalable data infrastructure with Redis caching and Cloudflare CDN, achieving 94% cache hit rate and reducing API response times from 20s to 0.05ms
    > Spearheaded development of Brown Games section with four logic games and campus-wide leaderboard, driving 300+ student account creations in one month
`;
export const educationData = {
    'brown': {
        name: 'brown',
        type: 'directory',
        content: {
            'transcript.pdf': {
                name: 'transcript.pdf',
                type: 'file',
                content: 'GPA: 4.0/4.0\nDegree: Sc.B. Computer Science - AI/ML & Systems\nExpected Graduation: May 2026'
            },
            'activities.txt': {
                name: 'activities.txt',
                type: 'file',
                content: 'Head TA (CS1470 Deep Learning), Web Director (Brown Political Review)'
            }
        }
    }
} as const;
