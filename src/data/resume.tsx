import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Armaan Patankar",
  initials: "AP",
  url: "https://apatankars.github.io",
  location: "New York, NY",
  locationLink: "https://www.google.com/maps/place/newyork",
  description:
    "I'm a computer science and economics student at Brown University. My passions lie in machine learning, software engineering, and market theory. I enjoy working on projects that combine my technical and creative interests, and I'm always looking for new opportunities to learn and grow.",
  skills: [
    "Python",
    "Java",
    "C",
    "TypeScript",
    "JavaScript",
    "Git",
    "React.js",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "Firebase",
    "PostgreSQL",
    "Figma",
    "AWS",
    "Docker",
    "TensorFlow",
    "PyTorch",
    "NumPy",
    "pandas",
    "scikit",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/resume.pdf", icon: NotebookIcon, label: "Resume" },
  ],
  contact: {
    email: "armaan_patankar@brown.edu",
    tel: "+6316450240",
    social: {
      Email: {
        name: "Email",
        url: "mailto:armaan_patankar@brown.edu",
        icon: Icons.email,

        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://www.github.com/apatankars",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/armaan-patankar",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Brown University Department of Computer Science",
      href: "https://www.brown.edu/",
      badges: ["Python", "TensorFlow", "PyTorch", "NumPy"],
      location: "FILL IN",
      title: "Incoming Deep Learning Teaching Assistant",
      logoUrl: "/brown.png",
      start: "January 2025",
      end: "Present",
      description:
        "Collaborate with course instructors to develop assignments emphasizing real-world applications of deep learning, including neural network quantization, generative models, and attention mechanisms. Lead weekly discussion sessions for over 50 students on CNNs, RNNs, and transformer architectures.",
    },
    {
      company: "Full-Stack@Brown",
      href: "https://fullstackatbrown.com/",
      badges: ["React.js", "Tailwind CSS", "Firebase", "PostgreSQL", "Figma"],
      location: "FILL IN",
      title: "Full-Stack Software Engineer",
      logoUrl: "/full.png",
      start: "January 2024",
      end: "Present",
      description:
        "Aided in developing the Conversational AI Lab’s website, utilizing React.js and Tailwind CSS to create a responsive, mobile-friendly interface. Designed a comprehensive digital database using PostgreSQL and integrated Elasticsearch to enhance retrieval efficiency. Collaborated with RISD designers and developers to translate Figma prototypes into functional web interfaces.",
    },
    {
      company: "Brown Political Review",
      href: "https://brownpoliticalreview.org/",
      badges: ["WordPress", "React.js", "Next.js", "Figma", "Redis", "AWS"],
      location: "Providence, RI",
      title: "Web Director",
      logoUrl: "/bpr.png",
      start: "September 2023",
      end: "Present",
      description:
        "Implemented a robust CMS using WordPress to manage 500+ historic student articles; reduced page load times by 40% and improved site reliability by 30%. Overhauled the BPR website using React.js and Next.js for a modern frontend experience, redesigned article previews with responsive layouts, converting 20% of print magazine-only readers to digital readers.",
    },
  ],
  projects: [
    {
      title: "2024 Presidential Election Prediction Model",
      href: "https://www.24cast.org",
      dates: "November 2023 - Present",
      active: true,
      description:
        "Engineered a data pipeline using Selenium and BeautifulSoup to scrape 5M+ records from 2002-2022, including 100+ variables such as incumbency, campaign finance, and polling data. Implemented a LightGBM classification model with 1000+ decision trees, achieving a weighted F1-score of 71%. Deployed an automated pipeline with GitHub Actions and AWS (Lambda, S3) for daily prediction updates, powering real-time visualizations.",
      technologies: [
        "Python",
        "NumPy",
        "NLP",
        "BeautifulSoup",
        "AWS",
        "GitHub Actions",
      ],
      links: [
        {
          type: "Website",
          href: "https://election2024-puce.vercel.app/about",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/apatankars/Election2024",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/24cast.png",
      video: "",
    },
    {
      title: "Earthquake Prediction Modeling",
      href: "",
      dates: "May 2024",
      active: false,
      description:
        "Engineered an LSTM RNN using TensorFlow to predict earthquakes from 27M+ ground acceleration time-series measurements (2017-2020). Modeled seismic activity with a mixed Weibull distribution, achieving 80% accuracy in validation tests. Built a Python pipeline using AWS S3 and EC2 to process and analyze 1,200+ seismic events, reducing processing time by 40%.",
      technologies: ["Python", "TensorFlow", "NumPy", "LSTM", "AWS"],
      links: [
        {
          type: "Source",
          href: "https://github.com/apatankars/Earthquake-Modeling",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/rnn.mp4",
    },
    {
      title: "Reddit Post Depression Sentiment Analysis",
      href: "",
      dates: "December 2024",
      active: false,
      description:
        "Processed 100K+ Reddit posts to build balanced datasets, improving preprocessing efficiency by 60%. Developed a pipeline to detect depression symptoms, achieving an AUC of 0.85 with random forest classifiers. Analyzed ethical considerations of NLP in mental health, presenting findings to promote responsible research practices.",
      technologies: ["Python", "PyTorch", "NumPy", "NLP", "Random Forest"],
      links: [
        {
          type: "Source",
          href: "https://github.com/apatankars/Reddit-Sentiment-Analysis",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/reddit.svg",
      video: "",
    },
    {
      title: "TextSwap: Campus Textbook Marketplace",
      href: "",
      dates: "November–December 2024",
      active: false,
      description:
        "Coordinated a 4-member team to complete 100% of objectives within 3 weeks. Designed scalable API endpoints and database schema for textbook listings, enabling seamless interactions with 100+ simulated listings. Collaborated on a React-based front end, increasing engagement metrics by 30% during usability testing.",
      technologies: [
        "React.js",
        "Java",
        "Figma",
        "RESTful APIs",
        "Firebase",
        "Software Engineering",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/apatankars/TextSwap",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/text.svg",
      video: "",
    },
  ],
} as const;
