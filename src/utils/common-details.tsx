
import { Code, Database, Cloud, GitBranch, Award } from 'lucide-react';
export const experienceData = [

  {
    id: 1,
    designation: 'Software Engineer',
    company: 'Revyrie Global',
    location: 'Trivandrum, Kerala',
    duration: 'April 2024 - Present',
    responsibilities: [{
      id: 1,
      title: 'Implemented real-time document status updates using Firebase, eliminating the need for manual page refreshes and enabling instant synchronization. This improvement reduced latency by 100%, enhancing user experience with immediate, up-to-date information.',
    }, {
      id: 2,
      title: 'Integrated AI APIs to enable document-based chat functionality, providing dynamic responses.'
    }, {
      id: 3,
      title: 'Implemented web push notifications using Firebase to enhance user engagement by sending reminder alerts.',

    }, {
      id: 4,
      title: 'Implemented API Encryption on the frontend, to secure data transmission.'
    }, {
      id: 5,
      title: 'Developed an Admin Panel to manage user listings and visualize data through graphical analytics.'
    }


    ]
  },

  {
    id: 2,
    designation: 'Software Engineer',
    company: 'Hamon Technologies',
    location: 'Calicut, Kerala',
    duration: 'January 2022 - February 2024',
    responsibilities: [{
      id: 1,
      title: 'Developed and maintained full-stack web applications using React.js (TypeScript) for front-end and Express.js for back-end.',
    }, {
      id: 2,
      title: 'Created reusable functional components and implemented responsive UI design for various devices, including mobile and high-resolution screens.'
    }, {
      id: 3,
      title: 'Integrated third-party SDKs like React-Hook-Form, Bootstrap, and react-beautiful-dnd to enhance app functionality and user experience.',

    }, {
      id: 4,
      title: 'Managed application state with Redux Toolkit and integrated APIs with the front end.'
    },
    ]
  }
]


export const educationDetails = {
  course: 'B-Tech in Electronics and Communications Engineering',
  university: 'Kannur University',
  year: 2017
}

export const skillDetails = [
  {
    id: 1,
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
    icon: Code,
    bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
    chipColor: 'bg-blue-600'
  },
  {
    id: 2,
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'React Admin', 'MUI', 'Bootstrap', 'Tailwind CSS'],
    icon: Award,
    bgColor: 'bg-gradient-to-br from-green-50 to-green-100',
    chipColor: 'bg-green-600'
  },
  {
    id: 3,
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'WebSockets', 'Middleware'],
    icon: Database,
    bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
    chipColor: 'bg-purple-600'
  },
  {
    id: 4,
    title: 'State management',
    skills: ['Redux', 'MobX', 'Zustand'],
    icon: GitBranch,
    bgColor: 'bg-gradient-to-br from-orange-50 to-orange-100 ',
    chipColor: 'bg-orange-600'
  },
  {
    id: 5,
    title: 'Databases',
    skills: ['PostgreSQL', 'Firebase'],
    icon: Database,
    bgColor: 'bg-gradient-to-br from-red-50 to-red-100 ',
    chipColor: 'bg-red-600'
  },
  {
    id: 6,
    title: 'Tools & Cloud',
    skills: ['AWS', 'Git', 'VSCode', 'GitHub', 'GitLab', 'Jira', 'Postman'],
    icon: Cloud,
    bgColor: 'bg-gradient-to-br from-indigo-50 to-indigo-100',
    chipColor: 'bg-indigo-600'
  },
]
