import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Backend Developer",
    icon: <BackendIcon />,
  },

  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Freelancer",
    icon: <FreelancerIcon />,
  },

];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
  
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
  ],
  frameworks: [
  
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },

  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Redux/Redux-toolkit",
      icon: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
      link: "https://redux.js.org",
    },
   
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "PostgreSQL",
      icon: "/assets/tech/postgresql.png",
      link: "https://www.postgresql.org",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
  ],
};

const experiences = [

  {
    title: "Backend Engineer (Python/Django + DevOps)",
    company_name: "SomniateTech",
    icon: "/assets/company/Somniate-Tech.png",
    iconBg: "#E6DEDD",
    date: "November 2025",
    points: [
      "Designed and deployed scalable backend systems using Python, Django REST Framework, Fast API and Node.js (Express.js), including HRMS, employee tracking, and real-time attendance solutions integrated with hardware sensors.",
      "Developed and optimized REST APIs for mobile applications, enabling seamless communication, authentication, and efficient data handling with improved system performance and reliability.",
      "Managed end-to-end DevOps and production deployment on VPS using Docker, Nginx, Gunicorn, and SSL, ensuring secure, scalable, and high-availability applications.",
    ],
  },
  {
    title: "Devops Intern ",
    company_name: "Technoshrine",
    icon: "/assets/company/Technoshrine.png",
    iconBg: "#E6DEDD",
    date: "August 2025",
    points: [
      "Built and deployed an automated chatbot using n8n, integrating APIs and workflow automation to optimize business operations.",
      "Designed end-to-end chatbot workflows, improving automation efficiency and reducing manual intervention.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
{
  name: "Women Safety Application",
  description:
    "Developed a Women Safety Application using Django, implementing real-time location tracking, emergency alert system, and secure authentication to enhance user safety and rapid response.",
  tags: [
    {
      name: "python",
      color: "blue-text-gradient",
    },
    {
      name: "django",
      color: "green-text-gradient",
    },
    {
      name: "sqlite",
      color: "pink-text-gradient",
    },

    {
      name: "bootstrap",
      color: "yellow-text-gradient",
    },
  ],
  image: "/assets/projects/sos.png",
  source_code_link: "https://github.com/drashmiranjan/safety-Project",
 
},
 {
  name: "AI-Based Animal Health Chatbot",
  description:
    "Built an AI-based Animal Health Chatbot integrating image and text processing (HuggingFace API), delivering disease insights and medicine recommendations for intelligent animal care support.",
  tags: [
    {
      name: "python",
      color: "blue-text-gradient",
    },
    {
      name: "FastAPI",
      color: "green-text-gradient",
    },
    {
      name: "huggingface-api",
      color: "pink-text-gradient",
    },
    {
      name: "ai-chatbot",
      color: "orange-text-gradient",
    },
    {
      name: "machine-learning",
      color: "yellow-text-gradient",
    },
  ],
  image: "/assets/projects/BOT.png",
  source_code_link: "https://github.com/drashmiranjan/animal_helpbot",

},
 
{
  name: "On-Demand Service Booking Platform",
  description:
    "Developed a full-stack on-demand service booking platform inspired by modern apps like Swiggy and Urban Company, designed to connect users with nearby verified technicians for services such as plumbing, electrical repair, AC servicing, cleaning, painting, and appliance repair.",
  tags: [
    {
      name: "python",
      color: "blue-text-gradient",
    },
    {
      name: "django",
      color: "green-text-gradient",
    },
    {
      name: "postgresql",
      color: "pink-text-gradient",
    },
 
  ],
  image: "/assets/projects/booking.jpeg",
  source_code_link: "https://github.com/drashmiranjan/servicehub",
},
 
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/drashmiranjan",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/rashmiranjan-das-89b914245",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "https://x.com/_drashmiranjan",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/dev.chunks?igsh=enpld3RtbDM3cnM5",
  },
];

const heroTexts = [
  "Freelancer",
  500,
  "AI Backend ENGINEER",
    500,
  "Backend Developer",
  500,
  "Problem solver",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
