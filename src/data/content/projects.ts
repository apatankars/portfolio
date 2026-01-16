import type { ProjectData } from '../../components/FileSystem/ProjectCard';

export const projects: ProjectData[] = [
  {
    id: 'dinodb',
    title: 'DinoDB: Hybrid Relational & Vector Database',
    description: 'Full-featured database engine built from scratch in Go.',
    fullDescription: 'Built a complete database engine supporting both relational operations and vector embeddings, implementing B+Tree and hash indexing with lock crabbing to enable 50,000+ concurrent ACID transactions. Architected crash recovery system using write-ahead logging with undo/redo operations and checkpointing. Developed Grace Hash Join with Bloom filter optimization, reducing unnecessary comparisons by 65% and achieving 90%+ cache hit rates.',
    technologies: ['Go', 'Database Systems', 'Concurrency', 'B+Tree', 'WAL'],
    images: ['/assets/projects/dinodb/1.png', '/assets/projects/dinodb/2.png'],
    links: {
        github: 'https://github.com/apatankars/dinodb'
    }
  },
  {
     id: 'ata',
     title: 'ATA: Artificial Teaching Assistant',
     description: 'LLM-powered grading and feedback system for CS courses.',
     fullDescription: 'Architected full-stack AI system using LangChain RAG pipeline with Postgres vector database, processing assignments and lecture slides to retrieve relevant materials, serving 3,200+ student sessions. Engineered Docker-based sandboxed execution environment with parallelized autograder integration. Fine-tuned Mistral 3 on 50,000 pedagogy examples with Socratic prompting, resulting in 35% reduction in office hours utilization and achieving 8.4/10 student satisfaction.',
     technologies: ['Python', 'LangChain', 'RAG', 'Postgres', 'Docker', 'NLP'],
     images: ['/assets/projects/ata/1.png', '/assets/projects/ata/2.png', '/assets/projects/ata/3.png'],
     links: {
        github: 'https://github.com/apatankars/ata'
     }
  },
  {
     id: 'taxi',
     title: 'Taxi: Distributed Search Engine',
     description: 'Fault-tolerant distributed search engine for Wikipedia.',
     fullDescription: 'Implemented a distributed search engine from scratch including fault-tolerant MapReduce and distributed tables that can process 120,000+ Wikipedia taxonomy pages with 99.8% availability. Developed a distributed prefix routing system with efficient batching that reduced inter-node communication by 73%. Created a taxonomy-aware search algorithm incorporating directed acyclic graph representations, achieving 2.5x higher precision using distributed BFS traversals.',
     technologies: ['Distributed Systems', 'MapReduce', 'Go', 'Fault Tolerance'],
     images: ['/assets/projects/taxi/1.png'],
     links: {
        github: 'https://github.com/Kauhentus/cs1380-final-project-repo'
     }
  },
  {
     id: 'llm-scaling',
     title: 'LLM Scaling: Parallelism & Inference Optimization',
     description: 'Distributed training and inference optimization for transformers.',
     fullDescription: 'Implemented 4 distributed training paradigms (DDP, Model Parallel, Pipeline Parallel, FSDP) for transformer models, achieving 3.8x throughput using strategic partitioning. Developed robust KV-caching mechanism reducing inference memory complexity from O(n²) to O(n) and achieving up to 9.7x speedup in token generation. Developed speculative decoding system leveraging a smaller draft model, resulting in 3.2x inference acceleration.',
     technologies: ['PyTorch', 'CUDA', 'Distributed Training', 'Transformers', 'Systems for ML'],
     images: ['/assets/projects/llm-scaling/1.png'],
     links: {
        github: 'https://github.com/apatankars/llm-scaling'
     }
  },
  {
     id: 'textswap',
     title: 'TextSwap: Campus Textbook Marketplace',
     description: 'Peer-to-peer marketplace for Brown University students.',
     fullDescription: 'Developed full-stack web application using React.js and Java, facilitating a peer-to-peer marketplace for 1,000+ Brown University students to buy and sell used textbooks. Implemented scalable RESTful API endpoints and a Firebase database schema to support textbook listing, retrieval, and search features. Led development of end-to-end testing suite using Playwright for both frontend and backend, achieving 95% test coverage. [NOTE] Website is not longer actively deployed.',
     technologies: ['React', 'Java', 'Firebase', 'REST API', 'Playwright'],
     images: ['/assets/projects/textswap/1.png', '/assets/projects/textswap/2.png'],
     links: {
        github: 'https://github.com/apatankars/TextSwap',
     }
  },
  {
     id: 'election-model',
     title: '2024 Presidential Election Prediction Model',
     description: 'ML model predicting election outcomes with 71% F1-score.',
     fullDescription: 'Engineered comprehensive data pipeline using Selenium and BeautifulSoup to scrape and parse over 5 million records from 2002-2022, encompassing 100+ variables such as incumbency, campaign finance, and polling data. Implemented a LightGBM classification model with 1000+ decision trees to predict election outcomes, achieving a weighted average F1-score of 71%. Deployed automated pipeline using GitHub Actions and AWS Lambda/S3 powering 24cast.org with 5,000+ total visitors. [NOTE] Website is not longer actively deployed.',
     technologies: ['Python', 'LightGBM', 'Selenium', 'AWS Lambda', 'Machine Learning'],
     images: ['/assets/projects/election-model/1.png', '/assets/projects/election-model/2.png'],
     links: {
        github: 'https://github.com/apatankars/Election2024',
     }
  }
];